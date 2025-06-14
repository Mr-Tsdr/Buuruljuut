import Image from "next/image"
import Link from "next/link"
import { Wrench, Zap, Ship, Plane, Fuel, Cog } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Construction & Engineering",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Construction+Site",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Power and Energy",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Power+Plant",
    icon: Zap,
  },
  {
    id: 3,
    title: "Ship Building Industry",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Ship+Port",
    icon: Ship,
  },
  {
    id: 4,
    title: "Aero Space Services",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Aerospace",
    icon: Plane,
  },
  {
    id: 5,
    title: "Petroleum and Gas",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Oil+Gas",
    icon: Fuel,
  },
  {
    id: 6,
    title: "Mechanical Engineering",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected",
    image: "/placeholder.svg?height=300&width=400&text=Mechanical",
    icon: Cog,
  },
]

export default function ServicesShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center mb-2">
              <div className="flex items-center space-x-3">
      {/* Diagonal lines block */}
      <div className="relative w-8 h-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-full bg-gray-400"
            style={{
              transform: `rotate(45deg)`,
              left: `${i * 3}px`,
            }}
          ></div>
        ))}
      </div>
      </div>
              <p className="text-orange-500 font-medium">Юуг санал болгож байна бэ?</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Бидний үйлчилгээ</h2>
          </div>
          <Link
            href="/services"
            className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition-colors hidden md:block rounded-sm"
          >
            Бүх үйлчилгээ
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>

                  {/* Border frame on hover */}
                  <div className="absolute inset-4 border-2 border-transparent group-hover:border-white transition-all duration-300"></div>

                  {/* Orange corner triangle */}
                  <div className="absolute top-0 right-0">
                    <div className="relative">
                      <div className="w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gray-900 group-hover:border-t-orange-500 transition-all duration-300"></div>
                      <div className="absolute top-3 right-3 transform">
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile ALL SERVICES Button */}
        <div className="text-center mt-8 md:hidden">
          <Link
            href="/services"
            className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition-colors inline-block"
          >
            ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}
