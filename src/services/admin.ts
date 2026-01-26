import { useAdminAuth } from "@/providers/adminProvider";
import axiosInstance from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface Login {
  email: string;
  password: string;
}

export const useAdminLogin = () => {
  const { login } = useAdminAuth();

  return useMutation({
    mutationFn: async (data: Login) => {
      const response = await axiosInstance.post(`/user/login`, data);
      const resData = response.data;

      if (resData.success === false) {
        throw new Error(resData.message || "Login failed");
      }

      // Handle potential response structures
      // 1. { success: true, token: "...", user: { ... } }
      if (resData.user && resData.token) {
        return { ...resData.user, token: resData.token }; // Flatten for AdminAuthProvider
      }
      
      // 2. { success: true, data: { token: "...", user: { ... } } }
      if (resData.data) {
        const innerData = resData.data;
        if (innerData.user && innerData.token) {
           return { ...innerData.user, token: innerData.token };
        }
        return innerData;
      }

      // 3. Fallback
      return resData;
    },
    onSuccess: (data) => {
      toast.success("Login successful");
      // Store user data with token
      login(data);
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

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/product`);
      if (!res.data.success) throw new Error(res.data.message);
      return res.data.user;
    },
  });
