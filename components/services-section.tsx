import Image from "next/image"
import { Car, Cog, Truck, Droplet } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image with orange accent */}
          <div className="relative w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="/placeholder.svg?height=1200&width=800&text=Modern+Building"
                alt="Modern industrial building"
                fill
                className="object-cover"
              />
              {/* Orange accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-orange-500"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-7/12 lg:pl-12">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-3">
                  <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
                  <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
                </div>
                <p className="text-orange-500 font-medium">Welcome to</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry & Factory</h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="service-card">
                <div className="mb-4">
                  <Car
                    size={48}
                    strokeWidth={1.5}
                    className="text-orange-500 p-2 border border-orange-200 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Automobile Manufacturing</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.
                </p>
              </div>

              {/* Service 2 */}
              <div className="service-card">
                <div className="mb-4">
                  <Cog
                    size={48}
                    strokeWidth={1.5}
                    className="text-orange-500 p-2 border border-orange-200 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Mechanical Engineering</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.
                </p>
              </div>

              {/* Service 3 */}
              <div className="service-card">
                <div className="mb-4">
                  <Truck
                    size={48}
                    strokeWidth={1.5}
                    className="text-orange-500 p-2 border border-orange-200 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Construction & Engineering</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.
                </p>
              </div>

              {/* Service 4 */}
              <div className="service-card">
                <div className="mb-4">
                  <Droplet
                    size={48}
                    strokeWidth={1.5}
                    className="text-orange-500 p-2 border border-orange-200 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Oil & Gas Energy</h3>
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t pt-8">
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <p className="text-3xl md:text-4xl font-bold">26</p>
                  <p className="text-gray-800 font-medium">Years</p>
                  <p className="text-orange-500 font-medium">Experience</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <p className="text-3xl md:text-4xl font-bold">758</p>
                  <p className="text-gray-800 font-medium">Project</p>
                  <p className="text-orange-500 font-medium">Completed</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <p className="text-3xl md:text-4xl font-bold">1769</p>
                  <p className="text-gray-800 font-medium">Expert</p>
                  <p className="text-orange-500 font-medium">Employed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
