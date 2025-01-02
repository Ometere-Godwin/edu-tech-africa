"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { countries } from "@/lib/countries"

interface AddressInfoProps {
  formData: {
    country: string
    address: string
  }
  onChange: (field: string, value: string) => void
}

export default function AddressInfo({ formData, onChange }: AddressInfoProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Address Information</h2>
      
      <div>
        <Label htmlFor="country">Country of Residence</Label>
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
        <Label htmlFor="address">House Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => onChange("address", e.target.value)}
          required
        />
      </div>
    </div>
  )
}