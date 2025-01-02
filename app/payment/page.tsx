"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { courses } from "@/lib/courses"

export default function PaymentPage() {
  const [selectedCourse, setSelectedCourse] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Choose Your Course</h1>
          <p className="text-gray-600">Select a course and complete your payment to begin learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="text-2xl font-bold text-purple-600 mb-4">
                {course.price}
              </div>
              <Button
                variant={selectedCourse === course.id ? "secondary" : "outline"}
                className="w-full"
                onClick={() => setSelectedCourse(course.id)}
              >
                {selectedCourse === course.id ? "Selected" : "Select Course"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Bank Transfer</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Bank: First Bank of Nigeria</p>
                <p className="mb-2">Account Name: TechEdu Africa Ltd</p>
                <p className="mb-2">Account Number: 1234567890</p>
                <p className="text-sm text-gray-600">
                  Please include your email as reference when making the transfer
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Online Payment</h3>
              <Button className="w-full" disabled={!selectedCourse}>
                Pay with Card
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}