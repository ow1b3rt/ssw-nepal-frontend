"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { getRuntimeConfig } from "../lib/runtime.config.js";
import { useApi, useGet } from "./ApiContext.jsx";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { data, isLoading, mutate } = useGet("/auth/me");
  const { post } = useApi();
  const router = useRouter();

  // Prevents refresher -> mutate -> data change -> effect -> refresher ...
  // from looping forever. We only want to attempt a refresh ONCE per
  // "not authenticated" result, not every time `data` changes.
  const hasAttemptedRefresh = useRef(false);

  async function refresher(url) {
    const { apiBaseUrl } = getRuntimeConfig();
    const res = await fetch(apiBaseUrl + url, {
      credentials: "include",
      method: "POST",
    });
    return res;
  }

  useEffect(() => {
    if (!data) return;

    // Adjust this check to match your ACTUAL /auth/me response shape.
    // If your backend returns { user: {...} } on success (no `success`
    // field), checking `!data.success` is always true and this branch
    // runs on every successful load too -- that was the infinite loop.
    const isAuthenticated = !!data?.user;

    if (!isAuthenticated) {
      if (hasAttemptedRefresh.current) {
        // Already tried refreshing once for this failure -- give up
        // instead of looping. Treat as logged out.
        setUser(null);
        router.replace("/admin/login");
        return;
      }

      hasAttemptedRefresh.current = true;
      refresher("/auth/refresh").then((res) => {
        if (!res.ok) {
          setUser(null);
          router.replace("/admin/login");
          return;
        }
        mutate(); // re-fetch /auth/me; effect will run once more, guarded above
      });
      return; // don't setUser from this failed payload
    }

    // Successful load -- reset the guard and set the user.
    hasAttemptedRefresh.current = false;
    setUser(data.user);
  }, [data]);

  const logout = async () => {
    const res = await post("/auth/logout");
    if (res?.success) {
      setUser(null);
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
