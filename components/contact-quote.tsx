"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Why you should working with us?",
    answer:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don't look even as slightly believable dummy now.There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  },
  {
    id: 2,
    question: "Factory Press Distinctively synergize methods",
    answer:
      "Our factory utilizes cutting-edge technology and proven methodologies to deliver exceptional results. We combine traditional craftsmanship with modern innovation to ensure the highest quality standards in every project we undertake.",
  },
  {
    id: 3,
    question: "Competently streamline progressive scenarios",
    answer:
      "We excel at managing complex projects by implementing streamlined processes that adapt to changing requirements. Our progressive approach ensures efficient project delivery while maintaining flexibility for evolving client needs.",
  },
  {
    id: 4,
    question: "How there are many variations of passages",
    answer:
      "Our diverse portfolio showcases various approaches and solutions tailored to different industry requirements. Each project is unique, and we adapt our methods to provide the most effective solution for your specific needs.",
  },
]

export default function ContactQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Construction",
    requirements: "",
  })
  const [openFaq, setOpenFaq] = useState(1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Quote Request Form */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-3">
                  <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
                  <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
                </div>
                <p className="text-orange-500 font-medium">Request</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">For Quote</h2>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">For Business:</span> For Business, inquiry fills our feedback form and
                Toll-Free Number - <span className="text-orange-500 font-semibold">(+91) 90-700-6202</span>, our team
                help you with in 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="Construction">Construction</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Engineering">Engineering</option>
                <option value="Oil & Gas">Oil & Gas</option>
                <option value="Aerospace">Aerospace</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="requirements"
                placeholder="Other Requirement"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition-colors rounded-sm"
              >
                GET A QUOTE
              </button>
            </form>
          </div>

          {/* Right side - FAQ Section */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-3">
                  <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
                  <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
                </div>
                <p className="text-orange-500 font-medium">General</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <Minus size={20} className="text-orange-500 flex-shrink-0" />
                    ) : (
                      <Plus size={20} className="text-orange-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
