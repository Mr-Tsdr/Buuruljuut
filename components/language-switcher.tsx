"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

const languageNames: Record<Locale, string> = {
  en: "English",
  mn: "Монгол",
  zh: "中文",
}

const languageFlags: Record<Locale, string> = {
  en: "🇺🇸",
  mn: "🇲🇳",
  zh: "🇨🇳",
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span className="text-sm">
          {languageFlags[currentLocale]} {languageNames[currentLocale]}
        </span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-51">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => {
                onLocaleChange(locale)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                currentLocale === locale ? "bg-orange-50 text-orange-500" : "text-gray-700"
              }`}
            >
              <span>{languageFlags[locale]}</span>
              <span>{languageNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
