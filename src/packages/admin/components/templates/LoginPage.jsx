"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ImageContainer } from "@/components/molecules/ImageContainer.jsx";

import { getRuntimeConfig } from "../../lib/runtime.config.js";
import { Input } from "../atoms/Input.jsx";
import { Form } from "../molecules/Form.jsx";

export function LoginPage({ loginUrl = "/auth/login", redirectTo = "/admin/dashboard" }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(values) {
    setError(null);
    setLoading(true);

    const { apiBaseUrl } = getRuntimeConfig();
    const res = await fetch(`${apiBaseUrl}${loginUrl}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok || !data?.user) {
      setError(data?.errors?.[0]?.message ?? "Invalid email or password");
      return;
    }
    router.push(redirectTo);
  }

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-4 px-4 lg:flex-row">
      <ImageContainer src="/logo.png" alt="SSW logo" className="h-f aspect-video w-1/2 md:w-1/3" />
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] md:w-1/2 lg:w-1/3 lg:p-8">
        <h1 className="mb-6 text-2xl font-semibold">Admin LogIn</h1>
        <Form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="password" type="password" placeholder="Password" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-green hover:bg-primary-green-dark mt-2 cursor-pointer rounded-md px-4 py-2 text-lg font-medium text-white transition duration-500 ease-in-out disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </Form>
      </div>
    </div>
  );
}
