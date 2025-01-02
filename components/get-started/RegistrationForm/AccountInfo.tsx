"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface AccountInfoProps {
  formData: {
    email: string
    password: string
    confirmPassword: string
  }
  onChange: (field: string, value: string) => void
}

export function AccountInfo({ formData, onChange }: AccountInfoProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
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
            onChange={(e) => onChange("password", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => onChange("confirmPassword", e.target.value)}
            required
          />
        </div>
      </div>
    </>
  )
}