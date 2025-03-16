import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-10 max-w-5xl mx-auto">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">True Wood Technologies LLC</h1>
        <p className="text-lg">Custom-designed cabinets and fine woodworking</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[1,2,3,4].map((_, i) => (
          <motion.div whileHover={{ scale: 1.05 }} key={i} className="overflow-hidden rounded-2xl shadow-md">
            <img src={`/images/sample${i+1}.jpg`} alt={`Cabinet sample ${i+1}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>Email us at: <a href="mailto:truewoodtechnologies@gmail.com" className="text-blue-600 underline">truewoodtechnologies@gmail.com</a></p>
      </section>
    </main>
  );
}
