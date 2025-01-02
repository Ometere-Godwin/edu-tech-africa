"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "08137627522"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}