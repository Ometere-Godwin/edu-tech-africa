"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="h-32"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@techedu.com</p>
                  <p className="text-gray-600">info@techedu.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">123 Tech Street</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}