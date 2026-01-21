import axiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

export interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: Date | undefined;
  username: string;
  password: string;
  agreeToTerms: boolean;
}

export interface Verification {
  code: string;
}

export const useRegisterUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: Registration) => {
      const response = await axiosInstance.post(`/user/register`, data);
      localStorage.setItem("email", data.email);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Account created successfully!");
      // usage example: setUser(data.user);
      router.push("/verify");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to create account. Please try again.";

      toast.error(errorMessage);
    },
  });
};
export interface Login {
  email: string;
  password?: string;
  username?: string;
  code?: string;
}

export const useVerifyUser = () => {
  const router = useRouter();
  const { forgotPassword } = useAuthStore();

  return useMutation({
    mutationFn: async (data: Verification) => {
      const response = await axiosInstance.post(`/user/verify`, data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Account verified successfully!");
      if (forgotPassword) {
        router.push("/reset-password");
      } else {
        router.push("/login");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to verify account. Please try again.";

      toast.error(errorMessage);
    },
  });
};

export const useLoginUser = () => {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();
  return useMutation({
    mutationFn: async (data: Login) => {
      const response = await axiosInstance.post(`/user/login`, data);
      // Assuming the API returns a token or user data that we might want to store?
      // For now just basic login
      return response.data;
    },
    onSuccess: (data) => {
      // Assuming data contains user and token. Adjust based on actual API response.
      // if (data.token) setToken(data.token);
      // if (data.user) setUser(data.user);

      toast.success("Login successful!");
      router.push("/");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to login. Please try again.";

      toast.error(errorMessage);
    },
  });
};
export const useResetPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: Login) => {
      const response = await axiosInstance.post(
        `/account/recovery/email`,
        data,
      );
      // Assuming the API returns a token or user data that we might want to store?
      // For now just basic login
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Password reset email sent successfully!");
      router.push("/verify");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to login. Please try again.";

      toast.error(errorMessage);
    },
  });
};
export const useResetNewPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: Login) => {
      const response = await axiosInstance.post(
        `/account/recovery/reset/password`,
        data,
      );

      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Password reset email sent successfully!");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to login. Please try again.";

      toast.error(errorMessage);
    },
  });
};
export const useGoggleLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`/auth/google/redirect`);
      // Assuming the API returns a token or user data that we might want to store?
      // For now just basic login
      return response.data;
    },
    onSuccess: () => {
      toast.success("Login successful!");
      router.push("/");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to login. Please try again.";

      toast.error(errorMessage);
    },
  });
};
