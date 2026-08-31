import { ROUTES } from "@/constants/routes/routes";

export async function fetchWithAuth(url, options) {
  const { redirectTo = ROUTES.ADMIN_LOGIN, ...fetchOptions } = options;

  const requestOptions = {
    ...fetchOptions,
    credentials: "include",
  };

  let res = await fetch(url, requestOptions);

  if (res.status === 401) {
    try {
      const refreshRes = await fetch(ROUTES.API.REFRESH_TOKEN, {
        method: "POST",
        credentials: "include",
      });

      if (refreshRes.ok) {
        res = await fetch(url, requestOptions);
      } else {
        handleRedirect(redirectTo);
      }
    } catch (error) {
      handleRedirect(redirectTo);
    }
  }

  return res;
}

function handleRedirect(targetUrl) {
  if (typeof window !== "undefined" && window.location.pathname !== targetUrl) {
    window.location.href = targetUrl;
  }
}
