import { fetchWithAuth } from "@/lib/helpers/fetch-with-refresh";

export async function submitForm({
  url,
  data,
  method = "POST",
  onSuccess,
  onError,
  useAuth = true,
}) {
  try {
    const response = useAuth
      ? await fetchWithAuth(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      : await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        });

    const result = await response.json();

    if (!response.ok) {
      const details = result?.message || result?.error?.details;
      const firstFieldError = details ? Object.values(details).flat()[0] : undefined;

      throw new Error(
        details ||
          firstFieldError ||
          result?.error?.message ||
          "An error occurred during submission.",
      );
    }

    if (onSuccess) await onSuccess(result);
    return result;
  } catch (error) {
    if (onError) onError(error);
    else throw error;
  }
}
