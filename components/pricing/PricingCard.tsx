import { Check } from "lucide-react"
import { Button } from "../ui/button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  recommended = false
}: PricingCardProps) {
  return (
    <div className={`rounded-lg p-8 ${
      recommended 
        ? "bg-purple-600 text-white ring-4 ring-purple-600 ring-opacity-50" 
        : "bg-white"
    }`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className={recommended ? "text-purple-200" : "text-gray-500"}>/month</span>
      </div>
      <p className={`mb-6 ${recommended ? "text-purple-200" : "text-gray-600"}`}>
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className={`h-5 w-5 mr-2 ${
              recommended ? "text-purple-200" : "text-purple-600"
            }`} />
            <span className={recommended ? "text-purple-100" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={recommended ? "secondary" : "purple"}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  )
}