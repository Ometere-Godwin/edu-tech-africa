"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AuthLayout from "../layout"

const signupSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  gender: z.string().min(1, "Please select your gender"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  countryOfResidence: z.string().min(1, "Country of residence is required"),
  stateOfResidence: z.string().min(1, "State of residence is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  howDidYouHear: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupForm = z.infer<typeof signupSchema>

export default function GetStartedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupForm) => {
    setIsLoading(true)
    try {
      // TODO: Implement signup logic
      console.log("Form data:", data)
    } catch (error) {
      console.error("Signup error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    
      <div className="min-h-screen grid md:grid-cols-2 bg-white">
      {/* Left side - Illustration */}
      <div className="hidden md:flex flex-col items-center justify-center bg-blue-50 p-12">
        <div className="max-w-md">
          <Image
            src="/images/learn-illustration.png"
            alt="Learning Illustration"
            width={500}
            height={400}
            priority
          />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Learn highly sought after skills without hassle.
          </h2>
          <div className="flex justify-center space-x-2">
            <Link href="#" className="text-blue-600 hover:underline">Twitter</Link>
            <span>•</span>
            <Link href="#" className="text-blue-600 hover:underline">Facebook</Link>
            <span>•</span>
            <Link href="#" className="text-blue-600 hover:underline">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="w-full mx-auto">
          <div className="text-right mb-8">
            <span className="text-sm text-gray-600">Already a TechEdu Scholar?</span>{" "}
            <Link href="/login" className="text-blue-600 font-medium hover:underline">
              Sign in!
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Signup</h1>
            <p className="text-gray-600">Take the next steps to apply at TechEdu Africa</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="First Name"
                  {...register("firstName")}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                )}
              </div>           
              <div>
                <Input
                  placeholder="Last Name"
                  {...register("lastName")}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                )}
              </div>
              <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Select onValueChange={(value) => setValue("gender", value)}>
                <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <Input
                type="date"
                placeholder="Date of Birth"
                {...register("dateOfBirth")}
                className={errors.dateOfBirth ? "border-red-500" : ""}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber")}
                className={errors.phoneNumber ? "border-red-500" : ""}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Country of Residence"
                {...register("countryOfResidence")}
                className={errors.countryOfResidence ? "border-red-500" : ""}
              />
              {errors.countryOfResidence && (
                <p className="text-sm text-red-500 mt-1">{errors.countryOfResidence.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="State of Residence"
                {...register("stateOfResidence")}
                className={errors.stateOfResidence ? "border-red-500" : ""}
              />
              {errors.stateOfResidence && (
                <p className="text-sm text-red-500 mt-1">{errors.stateOfResidence.message}</p>
              )}
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Optional: Let us know how you found us"
                {...register("howDidYouHear")}
              />
            </div>

            </div>



            
            <div className="text-sm text-gray-600">
              By clicking continue, I agree to the{" "}
              <Link href="/terms" className="text-purple-600 hover:underline">
                Terms of Use
              </Link>{" "}
              and acknowledge that I have read the{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Register"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}