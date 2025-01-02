"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/lib/countries";

interface LocationFieldsProps {
  formData: {
    country: string;
    city: string;
  };
  onChange: (field: string, value: string) => void;
}

export function LocationFields({ formData, onChange }: LocationFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="country">Country</Label>
        <Select
          value={formData.country}
          onValueChange={(value) => onChange("country", value)}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
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
  );
}
