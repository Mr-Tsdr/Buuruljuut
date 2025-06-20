"use client";

import { motion } from "framer-motion";
import { Plug, Presentation, Shapes, Sprout, UserRoundPlus, UtilityPole } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Sprout,
    title: "Байгаль орчинд ээлтэй технологи",
    desc: "There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.",
  },
  {
    icon: UtilityPole,
    title: "Эрчим хүчний тариф хямд, найдвартай эх үүсвэртэй болно",
    desc: "There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.",
  },
  {
    icon: Plug,
    title: "Эрчим хүчээр хараат бус улс болно",
    desc: "There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.",
  },
  {
    icon: UserRoundPlus,
    title: "Ажлын байр нэмэгдэнэ",
    desc: "There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.",
  },
  {
    icon: Presentation,
    title: "Мега төслүүд эрчим хүчээр хангагдана",
    desc: "There are many variations of passages of Lorem Ipsum available but majority have suffered alteration.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT: Image + Orange Bar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full lg:w-5/12 mb-10 lg:mb-0"
          >
            <div className="relative h-[500px] lg:h-[800px] shadow-lg rounded-sm overflow-hidden">
              <Image
                src="/images/bg2.jpeg"
                alt="Modern industrial building"
                fill
                className="object-fit h-[600px]"
              />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 lg:pl-12"
          >
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <div className="relative w-6 h-6 mr-2">
                  <Shapes className="absolute top-0 left-0 w-6 h-6 text-orange-500" />
                </div>
                <span className="text-orange-500 font-medium">Тавтай морил</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Монгол улсад гарах 
                <br /> <span className="text-orange-500">5 том өөрчлөлт</span>
              </h2>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                >
                  <div className="mb-3">
                    <service.icon
                      size={40}
                      strokeWidth={1.5}
                      className="text-orange-500 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-orange-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t"
            >
              {[ 
                { num: "14", label1: "Жилийн", label2: "Туршлага" },
                { num: "25", label1: "Гүйцэтгэсэн", label2: "Төслүүд" },
                { num: "999", label1: "Нийт", label2: "Ажилчид" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl font-bold">{stat.num}</p>
                  <p className="text-gray-800">{stat.label1}</p>
                  <p className="text-orange-500 font-medium">{stat.label2}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
