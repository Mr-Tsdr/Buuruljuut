"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function TechnicalSolutions() {
  const features = [
    'There are many variations of dummy of Lorem Ipsum.',
    'There are many variations of passages.',
    'It`s are readily variations at dummy ready.',
    'That are many variations is passages text.',
    'There are many variations of text.',
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const node = sectionRef.current;     
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node); 
    };
  }, []); 

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className={`w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="max-w-lg">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-3">
                  <div className="w-full h-0.5 bg-gray-300 rotate-45" />
                  <div className="w-full h-0.5 bg-gray-300 -rotate-45 mt-1" />
                </div>
                <p className="text-orange-500 font-medium">Technical</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solutions
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in that some form by
                injected humour or randomised words which don`t look even
                slightly believable.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600"
              >
                CONTACT&nbsp;US
              </Link>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <Image
              src="/images/industrial-team.jpg"
              alt="Professional industrial team"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
