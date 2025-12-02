import axiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useAdminLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: Login) => {
      const response = await axiosInstance.post(`/user/login`, data);
      localStorage.setItem("user", JSON.stringify(response.data?.data));
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Login successful");
      router.push("/admin/dashboard/products");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to login account. Please try again.";

      toast.error("Login failed");
    },
  });
};
