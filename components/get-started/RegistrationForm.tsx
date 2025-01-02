"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select } from "../ui/select"
import { Calendar } from "../ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { countries } from "@/lib/countries"
import { courses } from "@/lib/courses"

export default function RegistrationForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission and redirect to profile completion
    window.location.href = "/profile-completion"
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseOfInterest">Course of Interest</Label>
            <Select
              id="courseOfInterest"
              value={formData.courseOfInterest}
              onValueChange={(value) => setFormData({ ...formData, courseOfInterest: value })}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="referralSource">How did you hear about us?</Label>
            <Select
              id="referralSource"
              value={formData.referralSource}
              onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
              required
            >
              <option value="">Select Source</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend/Family</option>
              <option value="search">Search Engine</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Continue</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}