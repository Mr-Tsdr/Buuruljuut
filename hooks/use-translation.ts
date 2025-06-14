"use client"

import { useState, useEffect } from "react"
import { type Locale, defaultLocale, getTranslation, type Translation } from "@/lib/i18n"

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [translation, setTranslation] = useState<Translation>(getTranslation(defaultLocale))

  useEffect(() => {
    // Get locale from localStorage or browser
    const savedLocale = localStorage.getItem("locale") as Locale
    const browserLocale = navigator.language.split("-")[0] as Locale

    const initialLocale =
      savedLocale || (browserLocale && ["en", "mn", "zh"].includes(browserLocale) ? browserLocale : defaultLocale)

    setLocale(initialLocale)
    setTranslation(getTranslation(initialLocale))

    // Set document direction and language
    document.documentElement.dir = "ltr" // All three languages use LTR
    document.documentElement.lang = initialLocale
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    setTranslation(getTranslation(newLocale))
    localStorage.setItem("locale", newLocale)

    // Update document language
    document.documentElement.dir = "ltr" // All three languages use LTR
    document.documentElement.lang = newLocale
  }

  return {
    locale,
    translation,
    changeLocale,
    t: translation, // Shorthand for translation
    isRTL: false, // None of these languages require RTL
  }
}
