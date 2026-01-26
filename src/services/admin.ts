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


export interface Product {
  id?: string;
  name: string;
  sku: string;
  memory_price?: string;
  retail_price: string;
  category: string;
  description: string;
  inventory_quantity: number;
  image?: any; // File or string
}

export interface Category {
  id?: string;
  category_name: string;
  category_description: string;
}

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      // Use FormData for file uploads if needed, or JSON if image is a URL/base64
      // Assuming JSON for now based on snippet, or FormData if image is file.
      // If data.image is File, we need FormData.
      const response = await axiosInstance.post(`/product`, data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Product created successfully");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to create product");
    },
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await axiosInstance.put(`/product/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Product updated successfully");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update product");
    },
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: async (data: Category) => {
      const response = await axiosInstance.post(`/product/category`, data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Category created successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to create category",
      );
    },
  });
};

export const useGetCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/product/category`);
      if (!res.data.success) throw new Error(res.data.message);
      return res.data.data;
    },
  });

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/product`);
      if (!res.data.success) throw new Error(res.data.message);
      return res.data.data;
    },
  });

