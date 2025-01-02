"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

interface PersonalInfoProps {
  formData: {
    firstName: string
    surname: string
    gender: string
    dateOfBirth: string
  }
  onChange: (field: string, value: string) => void
}

export function PersonalInfo({ formData, onChange }: PersonalInfoProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="surname">Surname</Label>
          <Input
            id="surname"
            value={formData.surname}
            onChange={(e) => onChange("surname", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select
          id="gender"
          value={formData.gender}
          onValueChange={(value) => onChange("gender", value)}
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
          onChange={(e) => onChange("dateOfBirth", e.target.value)}
          required
        />
      </div>
    </>
  )
}