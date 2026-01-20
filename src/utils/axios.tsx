import axios from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
});

// Enhanced debug logging
const DEBUG = true; // Set to false in production

function debugLog(message: string, data?: any) {
  if (DEBUG) {
    console.log(`[AUTH DEBUG] ${message}`, data || "");
  }
}

// Read token from storage
function getAuthToken(): string | null {
  try {
    debugLog("=== Reading token from storage ===");

    // Check auth key
    const authStr = localStorage.getItem("auth");
    debugLog("auth key content:", authStr);

    if (authStr) {
      const auth = JSON.parse(authStr);
      debugLog("Parsed auth object:", auth);

      // Check all possible token paths
      if (auth?.token) {
        debugLog("✅ Found token at: auth.token");
        return auth.token;
      }
      if (auth?.data?.token) {
        debugLog("✅ Found token at: auth.data.token");
        return auth.data.token;
      }
      if (auth?.accessToken) {
        debugLog("✅ Found token at: auth.accessToken");
        return auth.accessToken;
      }
      if (auth?.data?.accessToken) {
        debugLog("✅ Found token at: auth.data.accessToken");
        return auth.data.accessToken;
      }
    }

    // Check user key
    const userStr = localStorage.getItem("user");
    debugLog("user key content:", userStr);

    if (userStr) {
      const user = JSON.parse(userStr);
      debugLog("Parsed user object:", user);

      if (user?.token) {
        debugLog("✅ Found token at: user.token");
        return user.token;
      }
      if (user?.data?.token) {
        debugLog("✅ Found token at: user.data.token");
        return user.data.token;
      }
    }

    debugLog("❌ No token found in storage");
    return null;
  } catch (error) {
    debugLog("❌ Error parsing auth data:", error);
    return null;
  }
}

// Store auth data after login
export function setAuthData(authResponse: any): void {
  try {
    debugLog("=== Storing auth data ===");
    debugLog("Input data:", authResponse);

    localStorage.setItem("auth", JSON.stringify(authResponse));

    // Verify it was stored
    const stored = localStorage.getItem("auth");
    debugLog("Verification - stored data:", stored);

    // Verify we can read the token back
    const token = getAuthToken();
    debugLog("Verification - can read token:", token ? "YES" : "NO");

    if (token) {
      debugLog("Token preview:", token.substring(0, 30) + "...");
    }
  } catch (error) {
    debugLog("❌ Failed to store auth data:", error);
  }
}

// Clear auth data
export function clearAuthData(): void {
  debugLog("=== Clearing auth data ===");
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
}

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    debugLog("=== Outgoing Request ===");
    debugLog("URL:", config.url);
    debugLog("Method:", config.method);

    const token = getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      debugLog("✅ Authorization header set");
    } else {
      debugLog("⚠️ No token available - request will be unauthenticated");
    }

    return config;
  },
  (error) => {
    debugLog("❌ Request interceptor error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
let isRedirecting = false;

axiosInstance.interceptors.response.use(
  (response) => {
    debugLog("=== Successful Response ===");
    debugLog("Status:", response.status);
    debugLog("URL:", response.config.url);
    return response;
  },
  (error) => {
    const status = error?.response?.status;
    const requestUrl = error?.config?.url ?? "";
    const responseData = error?.response?.data;

    debugLog("=== Request Failed ===");
    debugLog("Status:", status);
    debugLog("URL:", requestUrl);
    debugLog("Response data:", responseData);
    debugLog("Request headers:", error?.config?.headers);

    const publicEndpoints = ["/user/login", "/user/register", "/auth/login"];
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      requestUrl.includes(endpoint),
    );

    if (status === 401) {
      debugLog("🚨 401 Unauthorized detected");
      debugLog("Is public endpoint:", isPublicEndpoint);
      debugLog("Is already redirecting:", isRedirecting);

      if (!isPublicEndpoint && !isRedirecting) {
        isRedirecting = true;
        clearAuthData();

        toast.error("Session expired. Please login again.");

        setTimeout(() => {
          if (
            typeof window !== "undefined" &&
            !window.location.pathname.includes("/admin/login")
          ) {
            debugLog("Redirecting to login...");
            window.location.href = "/admin/login";
          }
        }, 500);
      }
    }

    if (status === 403) {
      debugLog("🚨 403 Forbidden");
      toast.error("You don't have permission to access this resource.");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
