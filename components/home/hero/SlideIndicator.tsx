interface SlideIndicatorProps {
  index: number
  isActive: boolean
  onClick: () => void
}

export default function SlideIndicator({ 
  index, 
  isActive, 
  onClick 
}: SlideIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-all ${
        isActive ? "bg-white w-6" : "bg-white/50"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  )
}