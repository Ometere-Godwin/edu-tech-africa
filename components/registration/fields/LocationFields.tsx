"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { countries } from "@/lib/countries"

interface LocationFieldsProps {
  formData: {
    country: string
    city: string
  }
  onChange: (field: string, value: string) => void
}

export function LocationFields({ formData, onChange }: LocationFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
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
      <div>
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