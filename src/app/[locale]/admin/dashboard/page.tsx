"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EnvelopeIcon, NoteIcon } from "@phosphor-icons/react/dist/ssr";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

function Breadcrumbs() {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-neutral-400 hover:text-neutral-400"
            // href="/admin/dashboard"
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function Page() {
  const router = useRouter();
  return (
    <div className="min-h-[100dvh] pt-[4rem] bg-[#FAF9F6] ">
      <Breadcrumbs />
      <div className="grid grid-cols-4 gap-5 my-2">
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Active Subscribers
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">1,234</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Sales This Month
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$2.2M</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Pending Orders
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">200</h2>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Outstanding Payouts
          </p>
          <div className="flex items-center">
            <h2 className="text-3xl font-semibold mt-2">$2.2M</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <p className="text-base text-[#B69B64] font-semibold">
            Top 5 Selling Products
          </p>
          <div className="flex items-center">
            <Table>
              <TableHeader className="bg-neutral-100">
                <TableRow>
                  <TableHead className="w-[100px] font-bold text-neutral-500">
                    Product
                  </TableHead>
                  <TableHead className="text-neutral-500 font-bold">
                    SKU
                  </TableHead>
                  <TableHead className="text-neutral-500 font-bold">
                    Quantity
                  </TableHead>
                  <TableHead className="text-right text-neutral-500 font-bold">
                    Revenue
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="col-span-1 p-6 flex flex-col gap-4 border border-neutral-200 bg-white rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="text-base text-[#B69B64] font-semibold">
              New Referrals This Week
            </p>
            <p className="text-xs font-semibold bg-[#B69B64] p-1 rounded-lg px-4 text-white">
              24 Total Referrals
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex w-full flex-row justify-between items-center cursor-pointer py-2 border-b border-neutral-200"
                >
                  <div className="flex flex-row items-center gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">
                        Admin Name {i + 1}
                      </p>
                      <p className="text-xs text-neutral-500">10 referrals</p>
                    </div>
                  </div>
                  <div>
                    <p>$120.00</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-2">
        <div
          onClick={() => router.push("/admin/dashboard/products")}
          className="cursor-pointer col-span-1 p-3 px-4 flex flex-row items-center gap-4 border border-neutral-200 bg-white rounded-lg"
        >
          <div className="rounded-full bg-neutral-100 w-12 h-12 flex items-center justify-center">
            <Plus size={25} />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base text-[#B69B64] font-semibold">
              Add Products
            </p>
            <h2 className="text-sm text-neutral-500 ">
              Add a new product to your inventory
            </h2>
          </div>
        </div>
        <div
          onClick={() => router.push("/admin/")}
          className="cursor-pointer col-span-1 p-3 px-4 flex flex-row items-center gap-4 border border-neutral-200 bg-white rounded-lg"
        >
          <div className="rounded-full bg-neutral-100 w-12 h-12 flex items-center justify-center">
            <NoteIcon size={25} />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base text-[#B69B64] font-semibold">
              Reslove Tickets
            </p>
            <h2 className="text-sm text-neutral-500 ">
              12 ticketing awaiting resolution
            </h2>
          </div>
        </div>
        <div
          onClick={() => router.push("/admin/")}
          className="cursor-pointer col-span-1 p-3 px-4 flex flex-row items-center gap-4 border border-neutral-200 bg-white rounded-lg"
        >
          <div className="rounded-full bg-neutral-100 w-12 h-12 flex items-center justify-center">
            <EnvelopeIcon size={25} />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base text-[#B69B64] font-semibold">
              Send Update
            </p>
            <h2 className="text-sm text-neutral-500 ">
              Schedule email campaign
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
