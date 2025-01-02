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

interface LocationInfoProps {
  formData: {
    country: string;
    city: string;
  };
  onChange: (field: string, value: string) => void;
}

export function LocationInfo({ formData, onChange }: LocationInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
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
  );
}
