import axiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
export const useVerifyUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: Verification) => {
      const response = await axiosInstance.post(`/user/verify`, data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Account verified successfully!");
      router.push("/");
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
