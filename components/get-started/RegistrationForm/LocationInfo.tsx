"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { countries } from "@/lib/countries"

interface LocationInfoProps {
  formData: {
    country: string
    city: string
  }
  onChange: (field: string, value: string) => void
}

export function LocationInfo({ formData, onChange }: LocationInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select
          id="country"
          value={formData.country}
          onValueChange={(value) => onChange("country", value)}
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
          onChange={(e) => onChange("city", e.target.value)}
          required
        />
      </div>
    </div>
  )
}