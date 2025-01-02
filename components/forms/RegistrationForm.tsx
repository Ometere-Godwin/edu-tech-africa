"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import PersonalInfo from "./sections/PersonalInfo"
import AddressInfo from "./sections/AddressInfo"
import CourseInfo from "./sections/CourseInfo"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    address: "",
    courseOfInterest: "",
    referralSource: ""
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-8">
      <PersonalInfo formData={formData} onChange={handleChange} />
      <AddressInfo formData={formData} onChange={handleChange} />
      <CourseInfo formData={formData} onChange={handleChange} />
      
      <Button type="submit" className="w-full">Submit Registration</Button>
    </form>
  )
}