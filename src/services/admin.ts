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
      return response.data;
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
