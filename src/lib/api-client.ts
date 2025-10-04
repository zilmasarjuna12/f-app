type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiOptions extends RequestInit {
  body?: any;
}

export async function apiFetch<T>(
  endpoint: string,
  method: HttpMethod = "GET",
  options: ApiOptions = {},
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const config: RequestInit = {
    method,
    headers,
    ...options,
  };

  if (options.body) {
    config.body = JSON.stringify(options.body);
  }

  const res = await fetch(`${endpoint}`, config);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error ${res.status}: ${errorText}`);
  }

  return res.json() as Promise<T>;
}
