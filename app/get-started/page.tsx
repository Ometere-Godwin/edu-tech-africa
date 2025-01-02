"use client"

import RegistrationDialog from "@/components/registration/RegistrationDialog"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started with TechEdu
          </h1>
          <p className="text-gray-600 mb-8">
            Join our community of learners and start your journey in tech
          </p>
          <RegistrationDialog />
        </div>
      </div>
    </div>
  )
}