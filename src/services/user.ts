import axiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (data: Registration) => {
      const response = await axiosInstance.post(`/user/register`, data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Account created successfully!");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to create account. Please try again.";

      toast.error("Registration failed");
    },
  });
};
