"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  token: string;
  firstName: string;
  lastName: string;
  username: string;
  user_role: string;
  // Add other user properties
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Public routes that don't require authentication
  const publicRoutes = [
    "/admin/login",
    "/admin/register",
    "/admin/forgot-password",
  ];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error loading user:", error);
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Save last visited page before logout/session expiry
  useEffect(() => {
    if (user && !isPublicRoute) {
      localStorage.setItem("lastVisitedPage", pathname);
    }
  }, [pathname, user, isPublicRoute]);

  // Redirect logic
  useEffect(() => {
    if (!isLoading) {
      if (!user && !isPublicRoute) {
        // User not authenticated, redirect to login
        router.push("/admin/login");
      } else if (user && isPublicRoute) {
        // User authenticated but on public route, redirect to last page or dashboard
        const lastPage = localStorage.getItem("lastVisitedPage");
        router.push(lastPage || "/admin/dashboard");
      }
    }
  }, [user, isLoading, isPublicRoute, router]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to last visited page or dashboard
    const lastPage = localStorage.getItem("lastVisitedPage");
    router.push(lastPage || "/admin/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Keep lastVisitedPage for redirect after next login
    router.push("/admin/login");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
