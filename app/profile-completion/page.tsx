"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export default function ProfileCompletionPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    interests: "",
    education: "",
    careerGoals: "",
    skills: "",
    experience: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/payment")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="interests">Areas of Interest</Label>
              <Textarea
                id="interests"
                placeholder="What technology areas interest you the most?"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Educational Background</Label>
              <Textarea
                id="education"
                placeholder="Tell us about your educational background"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Textarea
                id="careerGoals"
                placeholder="What are your career aspirations?"
                value={formData.careerGoals}
                onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Current Skills</Label>
              <Textarea
                id="skills"
                placeholder="What technical skills do you currently have?"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Work Experience</Label>
              <Textarea
                id="experience"
                placeholder="Tell us about your relevant work experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Continue to Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}