import axiosInstance from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

export interface Products {
  product_category_id: string | number;
  product_name: string;
  product_sku: string;
  product_retail_price: string;
  product_memory_price: string;
  product_qty: string;
  created_at: string;
  updated_at: string;
  uploads: [
    {
      id: number;
      upload_path: string;
      upload_type: string;
      file_size: string;
      file_name: string;
      entity_id: number;
      created_at: string;
      updated_at: string;
    },
  ];
}

export interface Category {
  category_name: string;
  category_description: string;
}

export const useGetProducts = (perPage: number) => {
  return useQuery({
    queryKey: ["products", perPage],
    queryFn: async () => {
      const response = await axiosInstance.get(`/product?per_page=${perPage}`);
      return response.data.data;
    },
  });
};
export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/product/category`);
      console.log(response);
      return response.data.data;
    },
  });
};
