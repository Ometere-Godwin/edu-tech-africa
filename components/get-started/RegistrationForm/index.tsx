"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PersonalInfo } from "./PersonalInfo"
import { LocationInfo } from "./LocationInfo"
import { CourseSelection } from "./CourseSelection"
import { AccountInfo } from "./AccountInfo"
import { useRouter } from "next/navigation"

export default function RegistrationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    city: "",
    courseOfInterest: "",
    referralSource: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/profile-completion")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="purple">Create Your Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Your Account</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <PersonalInfo formData={formData} onChange={handleChange} />
          <LocationInfo formData={formData} onChange={handleChange} />
          <CourseSelection formData={formData} onChange={handleChange} />
          <AccountInfo formData={formData} onChange={handleChange} />
          <Button type="submit" className="w-full">Continue</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}