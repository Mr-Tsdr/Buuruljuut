import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Бидэнтэй холбогдох</h2>
      <p className="text-md text-gray-600 mb-8">Бидэнтэй холбогдохыг хүсвэл доорх холбоосоор холбогдоно уу </p>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Phone size={20} className="text-orange-500" />
          </div>
          <div>
            <p className="text-gray-900 font-medium mb-1">Холбогдох утасны дугаар :</p>
            <p className="text-orange-500 font-semibold">+ (976) 11-316117</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Mail size={20} className="text-orange-500" />
          </div>
          <div>
            <p className="text-gray-900 font-medium mb-1">Имайл хаяг :</p>
            <p className="text-orange-500 font-semibold">info@tme.mn</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <MapPin size={20} className="text-orange-500" />
          </div>
          <div>
            <p className="text-gray-900 font-medium mb-1">Байршил хаяг :</p>
            <p className="text-orange-500">
              Улаанбаатар хот, Сүхбаатар дүүрэг,
              <br />
              Парк плэйс оффис, #402
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
