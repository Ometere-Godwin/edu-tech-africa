import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  content,
  rating
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}