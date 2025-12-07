"use client";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useRegisterUser } from "@/services/user";
import { format } from "date-fns";
import {
  CalendarIcon,
  Check,
  Eye,
  Mail,
  Phone,
  PiggyBankIcon,
  PointerIcon,
  Share2Icon,
  EyeOff,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";


function Page() {
  const [hide, setHide] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Registration>();

  const { mutate, isPending } = useRegisterUser();

  const onSubmit: SubmitHandler<Registration> = (data) => {
    mutate( data as any);
  };

  const router = useRouter();

  // Watch password field for real-time validation
  const password = watch("password") || "";

  // Password validation checks
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  const ValidationBadge = ({
    isValid,
    text,
  }: {
    isValid: boolean;
    text: string;
  }) => (
    <div
      className={cn(
        "px-2 py-1 border flex flex-row gap-2 items-center justify-between rounded-full transition-colors",
        isValid
          ? "text-green-600 border-green-600 bg-green-50"
          : "text-neutral-400 border-neutral-300"
      )}
    >
      <p className="text-xs">{text}</p>
      {isValid ? (
        <Check size={12} className="text-green-600" />
      ) : (
        <X size={12} className="text-neutral-400" />
      )}
    </div>
  );

  return (
    <div className="min-h-[100dvh] relative pt-[5rem] lg:pt-[7.5rem] bg-[#FAF9F6]">
      <Container className="lg:px-28 max-sm:!px-0 py-4">
        <div className="bg-white p-24 rounded-xl">
          <div className="text-center">
            <h3 className="font-semibold text-3xl">Sign up</h3>
            <p>
              Already have an account?
              <Link href={"/login"} className="text-[#B69B64]">
                {" "}
                Login now
              </Link>
            </p>
          </div>
          <div className="flex flex-row flex-wrap mt-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[40%] w-full"
            >
              <div className="my-5">
                <label className="ml-1 text-sm">First Name</label>
                <Input
                  className={cn(
                    "h-10 mt-1 w-full border border-neutral-300",
                    errors.firstName && "border-red-600"
                  )}
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-600 text-xs">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Last Name</label>
                <Input
                  className={cn(
                    "h-10 mt-1 w-full border border-neutral-300",
                    errors.lastName && "border-red-600"
                  )}
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                />
                {errors.lastName && (
                  <span className="text-red-600 text-xs">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Email</label>
                <div
                  className={cn(
                    "relative rounded-lg mt-1 w-full border border-neutral-300",
                    errors.email && "border-red-600"
                  )}
                >
                  <Input
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-10 w-full border-0"
                  />
                  <Mail
                    size={20}
                    className={cn(
                      "absolute top-2.5 right-3 text-neutral-300",
                      errors.email && "text-red-600"
                    )}
                  />
                </div>
                {errors.email ? (
                  <span className="text-red-600 text-xs">
                    {errors.email.message}
                  </span>
                ) : (
                  <span className="text-xs text-neutral-500">
                    Write your email in this format my@email.com
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Phone</label>
                <div
                  className={cn(
                    "relative rounded-lg mt-1 w-full border border-neutral-300",
                    errors.phone && "border-red-600"
                  )}
                >
                  <Input
                    className="h-10 w-full border-0"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                  />
                  <Phone
                    size={20}
                    className={cn(
                      "absolute top-2.5 right-3 text-neutral-300",
                      errors.phone && "text-red-600"
                    )}
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-600 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Date of Birth</label>
                <Controller
                  control={control}
                  name="dob"
                  rules={{ required: "Please select your date of birth" }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full h-10 mt-1 justify-start text-left font-normal border border-neutral-300",
                            !field.value && "text-muted-foreground",
                            errors.dob && "border-red-600"
                          )}
                        >
                          <CalendarIcon />
                          {field.value ? (
                            format(field.value, "yyyy-MM-dd")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.dob && (
                  <span className="text-red-600 text-xs">
                    {errors.dob.message}
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Unique ID</label>
                <Input
                  className={cn(
                    "h-10 mt-1 w-full border border-neutral-300",
                    errors.username && "border-red-600"
                  )}
                  {...register("username", {
                    required: "This field is required",
                  })}
                />
                {errors.username && (
                  <span className="text-red-600 text-xs">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="ml-1 text-sm">Password</label>
                <div
                  className={cn(
                    "relative rounded-lg mt-1 w-full border border-neutral-300",
                    errors.password && "border-red-600"
                  )}
                >
                  <Input
                    className="h-10 w-full border-0"
                    type={hide ? "password" : "text"}
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      validate: {
                        hasLowercase: (value) =>
                          /[a-z]/.test(value) ||
                          "Password must contain a lowercase letter",
                        hasUppercase: (value) =>
                          /[A-Z]/.test(value) ||
                          "Password must contain an uppercase letter",
                        hasNumber: (value) =>
                          /[0-9]/.test(value) ||
                          "Password must contain a number",
                        hasSpecialChar: (value) =>
                          /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                          "Password must contain a special character",
                        hasMinLength: (value) =>
                          value.length >= 8 ||
                          "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <div
                    onClick={() => setHide(!hide)}
                    className="absolute top-2.5 right-3 cursor-pointer"
                  >
                    {hide ? (
                      <Eye size={20} className="text-neutral-300" />
                    ) : (
                      <EyeOff size={20} className="text-neutral-300" />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-600 text-xs">
                    {errors.password.message}
                  </span>
                )}
                <div className="flex flex-row items-center flex-wrap gap-3 mt-3">
                  <ValidationBadge isValid={hasLowercase} text="Lowercase" />
                  <ValidationBadge isValid={hasMinLength} text="8 Characters" />
                  <ValidationBadge isValid={hasUppercase} text="Uppercase" />
                  <ValidationBadge isValid={hasNumber} text="Number" />
                  <ValidationBadge
                    isValid={hasSpecialChar}
                    text="Special character"
                  />
                </div>
              </div>
              <div className="my-6 flex flex-row items-start gap-2">
                <Controller
                  control={control}
                  name="agreeToTerms"
                  rules={{ required: "You must agree to the terms" }}
                  render={({ field }) => (
                    <Checkbox
                      className="h-5 w-5"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <p className="text-sm">
                  I acknowledge and agree to Agreement ROOTS ATL, Terms of Use &
                  Privacy Policy.
                </p>
              </div>
              {errors.agreeToTerms && (
                <span className="text-red-600 text-xs block -mt-4 mb-2">
                  {errors.agreeToTerms.message}
                </span>
              )}
              <Button
                type="submit"
                disabled={isPending}
                className="bg-[#B69B64] mt-5 w-full flex-grow font-semibold border-0 text-lg text-white py-6 cursor-pointer hover:bg-[#A58B54] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Creating account..." : "Continue"}
              </Button>
            </form>
            <div className="hidden lg:block lg:w-[60%] px-12">
              <div className="rounded-lg p-24 bg-[#F8D8CC] flex flex-col gap-12">
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <PointerIcon size={30} />
                  <h4 className="text-lg font-semibold">Subscribe</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <Share2Icon size={30} />
                  <h4 className="text-lg font-semibold">Share</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 text-center items-center">
                  <PiggyBankIcon size={30} />
                  <h4 className="text-lg font-semibold">Earn</h4>
                  <p className="text-sm">
                    Make your own work schedule, set your own working hours,
                    work from home, work online - be independent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
