import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the User interface based on likely response data
// Adjust based on your actual API response
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  // Add other user properties here
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  forgotPassword: boolean;
  resetCode: string;
}

interface AuthActions {
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setForgotPassword: (forgotPassword: boolean) => void;
  setResetCode: (resetCode: string) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      forgotPassword: false,
      resetCode: "",

      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      setLoading: (isLoading) => set({ isLoading }),
      setForgotPassword: (forgotPassword: boolean) =>
        set({ forgotPassword: forgotPassword }),
      setResetCode: (resetCode: string) => set({ resetCode: resetCode }),
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

// // Example of another simple slice/store if needed (e.g., for UI)
// interface UIState {
//   isSidebarOpen: boolean;
//   toggleSidebar: () => void;
// }

// export const useUIStore = create<UIState>((set) => ({
//   isSidebarOpen: true,
//   toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
// }));
