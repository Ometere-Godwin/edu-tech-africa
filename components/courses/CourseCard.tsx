"use client"

import { Clock, Users, Star } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

interface CourseCardProps {
  title: string
  description: string
  image: string
  duration: string
  students: number
  rating: number
  price: string
  category: string
}

export default function CourseCard({
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  category
}: CourseCardProps) {
  const router = useRouter()

  const handleEnroll = () => {
    // Store course details in URL parameters
    const params = new URLSearchParams({
      course: title,
      price: price,
      category: category
    })
    router.push(`/get-started?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-purple-600 font-medium">{category}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </span>
            <span className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              {students}
            </span>
            <span className="flex items-center text-gray-500">
              <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
              {rating}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <Button 
            variant="purple"
            onClick={handleEnroll}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  )
}