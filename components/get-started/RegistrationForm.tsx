"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { countries } from "@/lib/countries";
import { courses } from "@/lib/courses";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  country: z.string().min(1, "Please select your country"),
  state: z.string().min(1, "Please enter your state"),
  course: z.string().min(1, "Please select a course"),
  dateOfBirth: z.date({
    required_error: "Please select your date of birth",
  }),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Implement form submission
      console.log(data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className={errors.firstName ? "border-red-500" : ""}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className={errors.lastName ? "border-red-500" : ""}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber")}
              className={errors.phoneNumber ? "border-red-500" : ""}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        {/* Location & Course Selection */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="state">State/Province</Label>
            <Input
              id="state"
              {...register("state")}
              className={errors.state ? "border-red-500" : ""}
              placeholder="Enter your state"
            />
            {errors.state && (
              <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="course">Course</Label>
            <Select onValueChange={(value) => setValue("course", value)}>
              <SelectTrigger className={errors.course ? "border-red-500" : ""}>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course && (
              <p className="text-sm text-red-500 mt-1">{errors.course.message}</p>
            )}
          </div>

          <div>
            <Label>Date of Birth</Label>
            <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    errors.dateOfBirth ? "border-red-500" : ""
                  }`}
                >
                  {watch("dateOfBirth")
                    ? new Date(watch("dateOfBirth")).toLocaleDateString()
                    : "Select your date of birth"}
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <DialogHeader>
                  <DialogTitle className="px-4 pt-4">Select Date of Birth</DialogTitle>
                </DialogHeader>
                <Calendar
                  mode="single"
                  selected={watch("dateOfBirth")}
                  onSelect={(date) => {
                    setValue("dateOfBirth", date as Date);
                    setIsCalendarOpen(false);
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </DialogContent>
            </Dialog>
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={errors.password ? "border-red-500 pr-10" : "pr-10"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </div>
    </form>
  );
}
