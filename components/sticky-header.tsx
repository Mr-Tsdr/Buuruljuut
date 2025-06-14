"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Phone,
  Mail,
  Twitter,
  Facebook,
  WebcamIcon as Skype,
  VideoIcon as Vimeo,
  Search,
  ShoppingCart,
  Menu,
  X,
  MapPin,
} from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import LanguageSwitcher from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function StickyHeader() {
  const { t, changeLocale, locale, isRTL } = useTranslation()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Only add background when scrolled - remove hide/show logic
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navigationItems = [
    { href: "/", label: t.header.home },
    { href: "/about", label: t.header.aboutUs },
    { href: "/services", label: t.header.services },
    { href: "/pages", label: t.header.pages },
    { href: "/blog", label: t.header.blog },
    { href: "/contact", label: t.header.contactUs },
  ]

  return (
    <>
      {/* Top Bar */}
      <div
        className={cn(
          "bg-[#0a1631] text-white py-2 px-4 md:px-8 transition-all duration-500 ease-in-out",
          isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0",
        )}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className={cn("flex items-center mb-2 md:mb-0", isRTL ? "space-x-reverse space-x-6" : "space-x-6")}>
            <div className="flex items-center">
              <Phone size={14} className={cn(isRTL ? "ml-2" : "mr-2", "text-orange-500")} />
              <span>{t.header.call}</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className={cn(isRTL ? "ml-2" : "mr-2", "text-orange-500")} />
              <span>{t.header.email}</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin size={14} className={cn(isRTL ? "ml-2" : "mr-2", "text-orange-500")} />
              <span>{t.header.address}</span>
            </div>
          </div>
          <div className={cn("flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
            <LanguageSwitcher currentLocale={locale} onLocaleChange={changeLocale}/>
            <Link href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
              <Twitter size={14} className="text-orange-500" />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
              <Facebook size={14} className="text-orange-500" />
            </Link>
            <Link href="#" aria-label="Skype" className="hover:text-orange-500 transition-colors">
              <Skype size={14} className="text-orange-500" />
            </Link>
            <Link href="#" aria-label="Vimeo" className="hover:text-orange-500 transition-colors">
              <Vimeo size={14} className="text-orange-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <header
        className={cn(
          "sticky top-0 z-40 bg-white shadow-sm transition-all duration-300 ease-in-out",
          // Remove isVisible condition - always visible now
          isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : "shadow-sm",
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={cn("hidden lg:flex items-center", isRTL ? "space-x-reverse space-x-6" : "space-x-6")}>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium transition-all duration-300 hover:text-orange-500 relative group",
                    isActivePage(item.href) ? "text-orange-500" : "text-gray-700",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full",
                      isActivePage(item.href) ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              ))}

              {/* Action Icons */}
              <div className={cn("flex items-center")}>
                <Link
                  href="/quote"
                  className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {t.header.getQuote}
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="container mx-auto px-4 md:px-8 py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block font-medium transition-all duration-300 hover:text-orange-500 hover:translate-x-2",
                  isActivePage(item.href) ? "text-orange-500" : "text-gray-700",
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? "slideInFromLeft 0.3s ease-out forwards" : "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div
                className={cn("flex items-center justify-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}
              >
                <Link
                  href="/cart"
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-300"
                >
                  <ShoppingCart size={18} />
                  <span>{t.common.cart}</span>
                </Link>
                <Link
                  href="/search"
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-300"
                >
                  <Search size={18} />
                  <span>{t.common.search}</span>
                </Link>
              </div>
              <Link
                href="/quote"
                className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded font-medium hover:bg-orange-600 transition-all duration-300"
              >
                {t.header.getQuote}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
