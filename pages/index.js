import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const galleryImages = [
    "/images/sample1.jpg", "/images/sample2.jpg", "/images/sample3.jpg", "/images/sample4.jpg", "/images/sample5.jpg", "/images/sample6.jpg"
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-10 max-w-5xl mx-auto">
      <header className="flex justify-center mb-6">
        <img src="/images/logo.jpg" alt="True Wood Technologies LLC Logo" className="h-16" />
      </header>
      
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">True Wood Technologies LLC</h1>
        <p className="text-lg">Custom-designed cabinets and fine woodworking, crafted with precision and passion.</p>
      </section>
      
      {/* About Us Section */}
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          <Link href="/about" className="text-blue-600 underline">About Us</Link>
        </h2>
        <p className="text-lg">We are a team of skilled woodworkers dedicated to bringing high-quality, handcrafted wood products to your home or business. Our attention to detail and commitment to quality set us apart in the industry.</p>
      </section>
      
      {/* Services Section */}
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          <Link href="/services" className="text-blue-600 underline">Our Services</Link>
        </h2>
        <p className="text-lg">We specialize in creating beautiful, functional, and custom woodworking solutions tailored to your needs.</p>
        <ul className="list-disc list-inside text-lg">
          <li>Custom Kitchen Cabinetry</li>
          <li>Luxury Wood Furniture</li>
          <li>Built-in Closets and Storage</li>
          <li>Refinishing & Restoration</li>
          <li>Custom Wood Designs</li>
        </ul>
      </section>
      
      {/* Gallery Section */}
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
        <p className="text-lg mb-4">Browse some of our finest woodworking projects.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages && galleryImages.length > 0 ? (
            galleryImages.map((image, index) => (
              <motion.div whileHover={{ scale: 1.05 }} key={index} className="overflow-hidden rounded-2xl shadow-md">
                <img src={image} alt={`Woodworking project ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg">Have a custom project in mind? Let's discuss!</p>
        <p>Email us at: <a href="mailto:truewoodtechnologies@gmail.com" className="text-blue-600 underline">truewoodtechnologies@gmail.com</a></p>
      </section>
    </main>
  );
}
