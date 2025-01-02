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

interface AddressInfoProps {
  formData: {
    country: string;
    address: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function AddressInfo({ formData, onChange }: AddressInfoProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Address Information</h2>

      <div>
        <Label htmlFor="country">Country of Residence</Label>
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
              <SelectItem
                key={country.code}
                value={country.code}
                className="flex items-center gap-2"
              >
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
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
  );
}
