"use client";
import { Modal } from "@/components/modal";
import TableView from "@/components/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MagnifyingGlassIcon, TrayArrowUpIcon } from "@phosphor-icons/react";
import { Plus, SlashIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetProducts,
  useCreateProduct,
  useCreateCategory,
  useGetCategories,
} from "@/services/admin";

function Breadcrumbs() {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-neutral-400 hover:text-neutral-400"
            href="/admin/dashboard"
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-[#B69B64] hover:text-[#B69B64]">
            Products & Inventory
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function Page() {
  // const products = [
  //   {
  //     id: 1,
  //     product: "Bellow Collins",
  //     sku: "#123456",
  //     category: "Home",
  //     price: "₦10K",
  //     stock: "Active",
  //     image: "🌿",
  //   },
  //   {
  //     id: 2,
  //     product: "Bellow Collins",
  //     sku: "#123456",
  //     category: "Home",
  //     price: "₦10K",
  //     stock: "Out of Stock",
  //     image: "🌿",
  //   },
  //   {
  //     id: 3,
  //     product: "Bellow Collins",
  //     sku: "#123456",
  //     category: "Home",
  //     price: "₦10K",
  //     stock: "Out of Stock",
  //     image: "🌿",
  //   },
  //   {
  //     id: 4,
  //     product: "Bellow Collins",
  //     sku: "#123456",
  //     category: "Home",
  //     price: "₦10K",
  //     stock: "Active",
  //     image: "🌿",
  //   },
  //   {
  //     id: 5,
  //     product: "Bellow Collins",
  //     sku: "#123456",
  //     category: "Home",
  //     price: "₦10K",
  //     stock: "Active",
  //     image: "🌿",
  //   },
  // ];
  const tableHeading = [
    {
      key: "product",
      label: "Product",
      render: (value: any, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={row.avatar} alt={value} />
            <AvatarFallback>
              {value
                ?.split(" ")
                .map((n: any) => n[0])
                .join("")
                .toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "sku",
      label: "SKU",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "price",
      label: "Price",
      render: (value: any) => <span className="font-semibold">{value}</span>,
    },
    {
      key: "stock",
      label: "Stock",
      render: (value: any) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (value: any) => (
        <span className="cursor-pointer">
          <Button
            variant="outline"
            className="border border-neutral-300 text-[12px] px-3 py-1"
          >
            Edit
          </Button>
        </span>
      ),
    },
  ];

  const [page, setPage] = useState(1);
  const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
  const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);
  const [per_page, setPerPage] = useState("10");

  // Data hooks
  const { data, isLoading, refetch: refetchProducts } = useGetProducts();
  const { data: categories } = useGetCategories();
  const { mutate: createProduct, isPending: isCreatingProduct } =
    useCreateProduct();
  const { mutate: createCategory, isPending: isCreatingCategory } =
    useCreateCategory();

  // Product Form State
  const [formData, setFormData] = useState({
    product_name: "",
    sku: "",
    memory_price: "",
    retail_price: "",
    category: "", // This will store the category_id
    description: "",
    inventory_quantity: "",
    images: [] as File[], // Changed to array for multiple images
    imagePreviews: [] as string[], // Changed to array for multiple previews
  });

  // Category Form State
  const [categoryForm, setCategoryForm] = useState({
    category_name: "",
    category_description: "",
  });

  const handleCreateProduct = () => {
    setOpenCreateProductModal(!openCreateProductModal);
  };

  const handleCreateCategory = () => {
    setOpenCreateCategoryModal(!openCreateCategoryModal);
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("product_name", formData.product_name);
    submitData.append("product_sku", formData.sku);
    submitData.append("memory_price", formData.memory_price);
    submitData.append("retail_price", formData.retail_price);
    submitData.append("product_category_id", formData.category);
    submitData.append("description", formData.description);
    submitData.append("product_qty", formData.inventory_quantity);

    // Append multiple images as an array
    formData.images.forEach((image) => {
      submitData.append("product_photo[]", image);
    });

    createProduct(submitData, {
      onSuccess: () => {
        setOpenCreateProductModal(false);
        setFormData({
          product_name: "",
          sku: "",
          memory_price: "",
          retail_price: "",
          category: "",
          description: "",
          inventory_quantity: "",
          images: [],
          imagePreviews: [],
        });
        refetchProducts();
      },
    });
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCategory(categoryForm, {
      onSuccess: () => {
        setOpenCreateCategoryModal(false);
        setCategoryForm({ category_name: "", category_description: "" });
        // Optionally refetch categories via query invalidation if needed,
        // but react-query usually handles this if keys match or explicit refetch.
        // Assuming categories query automatically refreshes or we need to invalidate.
        // For now, standard behavior.
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      const previewUrls = filesArray.map((file) => URL.createObjectURL(file));

      setFormData({
        ...formData,
        images: [...formData.images, ...filesArray],
        imagePreviews: [...formData.imagePreviews, ...previewUrls],
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = formData.imagePreviews.filter((_, i) => i !== index);

    // Revoke the object URL to free memory
    URL.revokeObjectURL(formData.imagePreviews[index]);

    setFormData({
      ...formData,
      images: newImages,
      imagePreviews: newPreviews,
    });
  };

  console.log(categories, "from backend");

  return (
    <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
      <Breadcrumbs />
      {/* ... grids ... */}
      <div className="grid grid-cols-4 gap-4 my-2">
        <div className="col-span-1 h-[125px] p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-[14px] text-[#B69B64] font-semibold">
            Active Subscribers
          </p>
          <div className="flex items-center">
            <h2 className="text-[24px] font-bold">0</h2>
          </div>
        </div>
        <div className="col-span-1 h-[125px] p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-[14px] text-[#B69B64] font-semibold">
            Sales This Month
          </p>
          <div className="flex items-center">
            <h2 className="text-[24px] font-bold">$0</h2>
          </div>
        </div>
        <div className="col-span-1 h-[125px] p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-[14px] text-[#B69B64] font-semibold">
            Pending Orders
          </p>
          <div className="flex items-center">
            <h2 className="text-[24px] font-bold">0</h2>
          </div>
        </div>
        <div className="col-span-1 h-[125px] p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-[14px] text-[#B69B64] font-semibold">
            Outstanding Payouts
          </p>
          <div className="flex items-center">
            <h2 className="text-[24px] font-bold">$0</h2>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className=" p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[14px] text-[#B69B64] font-semibold">
              Top 5 Selling Products
            </p>
            <div className="flex flex-row items-center gap-3">
              <div className="px-2 hidden md:flex items-center  flex-row gap-2 border border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm">
                <MagnifyingGlassIcon size={25} color="#667185" />
                <Input
                  type="text"
                  className="border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Search for products..."
                />
              </div>
              <Button
                onClick={handleCreateProduct}
                className="bg-[#B69B64] flex-grow font-semibold border-0 text-[12px] text-white py-4 cursor-pointer"
              >
                <Plus />
                Add Products
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="!h-[40px] !w-[40%] ">
                <TabsTrigger value="all" className="text-[12px]">
                  All
                </TabsTrigger>
                <TabsTrigger value="active" className="text-[12px]">
                  Active
                </TabsTrigger>
                <TabsTrigger value="drafts" className="text-[12px]">
                  Drafts
                </TabsTrigger>
                <TabsTrigger value="archive" className="text-[12px]">
                  Archive
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <TableView
                  heading={tableHeading}
                  data={data || []}
                  totalPages={1}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="active">
                <TableView
                  heading={tableHeading}
                  data={data || []}
                  totalPages={1}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="drafts">
                <TableView
                  heading={tableHeading}
                  data={[]}
                  totalPages={1}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="archive">
                <TableView
                  heading={tableHeading}
                  data={[]}
                  totalPages={1}
                  currentPage={1}
                  onPageChange={(newPage) => setPage(newPage)}
                  isLoading={isLoading}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Modal
        open={openCreateProductModal}
        onOpenChange={setOpenCreateProductModal}
        heading="Create New Product"
        description="Enter the details of the new product."
        className="min-w-xl"
      >
        <form
          className="py-4 w-full flex flex-col gap-4"
          onSubmit={handleProductSubmit}
        >
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Product Name
              </label>
              <Input
                type="text"
                placeholder="Enter product name"
                value={formData.product_name}
                onChange={(e) =>
                  setFormData({ ...formData, product_name: e.target.value })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                SKU
              </label>
              <Input
                type="text"
                placeholder="Enter SKU"
                value={formData.sku}
                onChange={(e) =>
                  setFormData({ ...formData, sku: e.target.value })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Memory Price
              </label>
              <Input
                type="number"
                placeholder="0.00"
                value={formData.memory_price}
                onChange={(e) =>
                  setFormData({ ...formData, memory_price: e.target.value })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Retail Prices
              </label>
              <Input
                type="number"
                placeholder="0.00"
                value={formData.retail_price}
                onChange={(e) =>
                  setFormData({ ...formData, retail_price: e.target.value })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Category
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) => {
                  if (value === "create_new") {
                    handleCreateCategory();
                  } else {
                    setFormData({ ...formData, category: value });
                  }
                }}
              >
                <SelectTrigger className="w-full !h-10 border-slate-700">
                  <SelectValue placeholder="Select or create category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="create_new"
                    className="font-semibold text-blue-600"
                  >
                    + Create New Category
                  </SelectItem>
                  {categories?.map((cat: any) => (
                    <SelectItem key={cat.id} value={cat.id || "default"}>
                      {cat?.category_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Description
              </label>
              <Input
                type="text"
                placeholder="add description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-4 items-center">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Inventory Quantity
              </label>
              <Input
                type="number"
                placeholder="0"
                value={formData.inventory_quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inventory_quantity: e.target.value,
                  })
                }
                className="border-slate-700 h-10 w-full placeholder:text-slate-500"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-neutral-500">
                Product Images
              </label>
              <div
                className="border-slate-700 flex flex-col min-h-40 p-4 w-full border rounded-lg items-center justify-center cursor-pointer relative"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />

                {formData.imagePreviews.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3 w-full">
                    {formData.imagePreviews.map((preview, index) => (
                      <div
                        key={index}
                        className="relative group aspect-square rounded-lg overflow-hidden border border-slate-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage(index);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <TrayArrowUpIcon
                      weight="duotone"
                      size={35}
                      className="text-[#B69B64]"
                    />
                    <p className="text-sm text-neutral-400 mt-2">
                      Drag and drop images or click to browse
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      You can select multiple images
                    </p>
                  </>
                )}

                <div className="absolute bottom-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="text-xs bg-white/80"
                  >
                    {formData.images.length > 0
                      ? `Add More Images (${formData.images.length} selected)`
                      : "Upload Images"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row gap-8 items-center justify-between mt-4">
            <Button
              type="button"
              variant={"outline"}
              onClick={handleCreateProduct}
              className="flex-grow border font-semibold text-sm text-neutral-700 py-4 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isCreatingProduct}
              className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
            >
              {isCreatingProduct ? "Creating..." : "Create Plan"}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={openCreateCategoryModal}
        onOpenChange={setOpenCreateCategoryModal}
        heading="Create New Category"
        description="Enter the details of the new category."
        className="min-w-xl"
      >
        <form
          className="py-4 w-full flex flex-col gap-4"
          onSubmit={handleCategorySubmit}
        >
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-neutral-500">
              Category Name
            </label>
            <Input
              type="text"
              placeholder="e.g. Well man"
              value={categoryForm.category_name}
              onChange={(e) =>
                setCategoryForm({
                  ...categoryForm,
                  category_name: e.target.value,
                })
              }
              className="border-slate-700 h-10 w-full placeholder:text-slate-500"
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-neutral-500">
              Category Description
            </label>
            <Input
              type="text"
              placeholder="e.g. Good for all men"
              value={categoryForm.category_description}
              onChange={(e) =>
                setCategoryForm({
                  ...categoryForm,
                  category_description: e.target.value,
                })
              }
              className="border-slate-700 h-10 w-full placeholder:text-slate-500"
            />
          </div>
          <div className="flex w-full flex-row gap-8 items-center justify-between mt-4">
            <Button
              type="button"
              variant={"outline"}
              onClick={handleCreateCategory}
              className="flex-grow border font-semibold text-sm text-neutral-700 py-4 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isCreatingCategory}
              className="bg-[#B69B64] flex-grow font-semibold border-0 text-sm text-white py-4 cursor-pointer"
            >
              {isCreatingCategory ? "Creating..." : "Create Category"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
