"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/courses";

interface CourseFieldsProps {
  formData: {
    courseOfInterest: string;
    referralSource: string;
  };
  onChange: (field: string, value: string) => void;
}

export function CourseFields({ formData, onChange }: CourseFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="courseOfInterest">Course of Interest</Label>
        <Select
          value={formData.courseOfInterest}
          onValueChange={(value) => onChange("courseOfInterest", value)}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="referralSource">How did you hear about us?</Label>
        <Select
          value={formData.referralSource}
          onValueChange={(value) => onChange("referralSource", value)}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Source" />
          </SelectTrigger>
          <SelectContent>
            {[
              { value: "social", label: "Social Media" },
              { value: "friend", label: "Friend/Family" },
              { value: "search", label: "Search Engine" },
              { value: "advertisement", label: "Advertisement" },
              { value: "other", label: "Other" },
            ].map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
