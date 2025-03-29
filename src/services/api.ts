// src/services/api.ts
const API_BASE_URL = "/api";

interface ShortenResponse {
  shortUrl: string;
}

interface ErrorResponse {
  error: string;
}

export async function shortenUrl(url: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as ErrorResponse;
      throw new Error(errorData.error || "Failed to shorten URL");
    }

    const data = (await response.json()) as ShortenResponse;
    return data.shortUrl;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
}

export async function checkApiStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/test`, {
      method: "GET",
    });
    return response.ok;
  } catch (error) {
    console.error("API server unavailable:", error);
    return false;
  }
}

export async function testExternalApi(): Promise<string> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from external API");
    }

    const data = await response.json();
    return data.title;
  } catch (error) {
    console.error("Error calling external API:", error);
    throw error;
  }
}