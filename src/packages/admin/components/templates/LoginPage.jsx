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
    <div className="container mx-auto flex h-screen flex-col-reverse items-center justify-center gap-0 px-4 md:flex-row">
      <div className="border-gray-00 flex w-full flex-col justify-between rounded-lg border bg-white p-4 md:h-96 md:w-1/2 md:rounded-none md:rounded-l-lg lg:w-1/3 lg:p-8">
        <div className="mb-6 flex flex-col items-center">
          <h1 className="text-primary-blue-dark text-2xl font-semibold">Welcome Back</h1>
          <p className="text-text-color font-light">Login to your SSW Admin account</p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <Input
            inputClassName="text-primary-blue"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <Input name="password" type="password" placeholder="Password" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-green hover:bg-primary-green-dark mt-2 cursor-pointer rounded-md px-4 py-1.5 text-sm font-normal text-white transition duration-500 ease-in-out disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </Form>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-r-lg border-l-0 p-2 md:h-96 md:w-1/2 md:items-start md:gap-6 md:border lg:w-1/3">
        <ImageContainer src="/ssw.png" alt="SSW logo" className="aspect-video w-full" />
      </div>
    </div>
  );
}
