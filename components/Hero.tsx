import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master the Art of{" "}
            <span className="text-purple-600">Modern Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn from industry experts and build real-world projects. Join
            thousands of students worldwide in their journey to tech excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="purple" size="lg" className="text-lg">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg bg-transparent text-black hover:bg-gray-100"
            >
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
