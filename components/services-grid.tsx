import Image from "next/image"
import Link from "next/link"
import { Wrench, Zap, Ship, Plane, Fuel, Cog } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Construction & Engineering",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Construction+Site",
    icon: Wrench,
    href: "/services/construction",
  },
  {
    id: 2,
    title: "Power and Energy",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Power+Plant",
    icon: Zap,
    href: "/services/power-energy",
  },
  {
    id: 3,
    title: "Ship Building Industry",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Ship+Port",
    icon: Ship,
    href: "/services/ship-building",
  },
  {
    id: 4,
    title: "Aero Space Services",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Aerospace",
    icon: Plane,
    href: "/services/aerospace",
  },
  {
    id: 5,
    title: "Petroleum and Gas",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Oil+Gas",
    icon: Fuel,
    href: "/services/petroleum-gas",
  },
  {
    id: 6,
    title: "Mechanical Engineering",
    description:
      "There are many variations of passages of Lorem Ipsum available have suffered alteration in at that some form injected embarrassing.",
    image: "/placeholder.svg?height=300&width=400&text=Mechanical",
    icon: Cog,
    href: "/services/mechanical",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Link
                key={service.id}
                href={service.href}
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
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
