import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ReactNode } from "react";

export function Modal({
  open,
  onOpenChange,
  heading,
  description,
  className,
  children,
  hasBackButton,
  preventOutsideClose,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  heading: string;
  description?: string;
  className?: string;
  children: ReactNode;
  hasBackButton?: boolean;
  preventOutsideClose?: boolean;
  closeButton?: boolean;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={description ? undefined : "modal-description"}
        className={cn(
          "max-w-[480px] max-h-[96vh] w-full !rounded-[20px] p-4 overflow-y-auto",
          className,
        )}
        onPointerDownOutside={
          preventOutsideClose
            ? (e) => {
                e.preventDefault();
              }
            : undefined
        }
        onInteractOutside={
          preventOutsideClose
            ? (e) => {
                e.preventDefault();
              }
            : undefined
        }
        onEscapeKeyDown={
          preventOutsideClose
            ? (e) => {
                e.preventDefault();
              }
            : undefined
        }
      >
        <DialogHeader>
          {heading && (
            <DialogTitle className="flex flex-row items-center justify-between">
              <span className="text-[#B69B64] text-[20px] font-bold">
                {heading}
              </span>
              <X size={25} onClick={() => onOpenChange(false)} />
            </DialogTitle>
          )}
          {description && (
            <DialogDescription className="-mt-1">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        {children}

        {hasBackButton && (
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
