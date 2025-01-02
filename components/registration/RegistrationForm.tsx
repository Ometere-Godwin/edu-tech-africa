"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, Country } from "@/lib/countries";

const areas = [
  { id: "web-dev", name: "Web Development" },
  { id: "mobile-dev", name: "Mobile Development" },
  { id: "data-science", name: "Data Science" },
  { id: "ai-ml", name: "AI & Machine Learning" },
  { id: "cyber-security", name: "Cyber Security" },
] as const;

type Area = (typeof areas)[number];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    dateOfBirth: "",
    areaOfInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            placeholder="Enter your first name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country of Residence</Label>
        <Select
          value={formData.country}
          onValueChange={(value) =>
            setFormData({ ...formData, country: value })
          }
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className="flex items-center gap-2 cursor-pointer hover:bg-purple-50"
              >
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="areaOfInterest">Area of Interest</Label>
        <Select
          value={formData.areaOfInterest}
          onValueChange={(value) =>
            setFormData({ ...formData, areaOfInterest: value })
          }
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your area of interest" />
          </SelectTrigger>
          <SelectContent>
            {areas.map((area) => (
              <SelectItem
                key={area.id}
                value={area.id}
                className="cursor-pointer hover:bg-purple-50"
              >
                {area.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Submit Registration
      </Button>
    </form>
  );
}
