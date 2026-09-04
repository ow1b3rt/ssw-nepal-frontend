"use client";

import { useEffect, useState } from "react";
import { Textarea, useApi, useGet } from "@/packages/admin";

export default function Layout() {
  const { post } = useApi();
  const { data } = useGet("/layouts/home");
  const [layout, setLayout] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) {
      setLayout(JSON.stringify(data.layout, null, 2));
    }
  }, [data]);

  const handleSubmit = async () => {
    try {
      setSaving(true);
      const parsed = JSON.parse(layout);
      await post("/layouts/home", parsed);
    } catch (err) {
      alert("Invalid JSON — please check formatting before submitting.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="gap-sm p-md mx-auto flex max-w-3xl flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Home Layout</h3>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
      <Textarea
        value={layout ?? ""}
        onChange={(e) => setLayout(e.target.value)}
        rows={30}
        className="font-mono text-sm"
      />
    </div>
  );
}
