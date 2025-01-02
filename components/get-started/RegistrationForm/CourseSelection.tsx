"use client"

import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { courses } from "@/lib/courses"

interface CourseSelectionProps {
  formData: {
    courseOfInterest: string
    referralSource: string
  }
  onChange: (field: string, value: string) => void
}

export function CourseSelection({ formData, onChange }: CourseSelectionProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="courseOfInterest">Course of Interest</Label>
        <Select
          id="courseOfInterest"
          value={formData.courseOfInterest}
          onValueChange={(value) => onChange("courseOfInterest", value)}
          required
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referralSource">How did you hear about us?</Label>
        <Select
          id="referralSource"
          value={formData.referralSource}
          onValueChange={(value) => onChange("referralSource", value)}
          required
        >
          <option value="">Select Source</option>
          <option value="social">Social Media</option>
          <option value="friend">Friend/Family</option>
          <option value="search">Search Engine</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </Select>
      </div>
    </>
  )
}