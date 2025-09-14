'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import scrapedData from "../data/scraped-content.json";

// Animation component for fade-in effects
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

// Service card component with hover animations
const ServiceCard = ({ title, icon, delay = 0 }: { title: string; icon: string; delay?: number }) => (
  <FadeInSection delay={delay}>
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center border border-gray-100">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
    </div>
  </FadeInSection>
);

// Feature item component
const FeatureItem = ({ title, icon, delay = 0 }: { title: string; icon: string; delay?: number }) => (
  <FadeInSection delay={delay}>
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
      <div className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h6 className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h6>
    </div>
  </FadeInSection>
);

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter out logo images for the gallery
  const galleryImages = scrapedData.images.filter(img => 
    !img.src.includes('unitcloud.png') && img.src.trim() !== ''
  );

  // Auto-rotate images
  useEffect(() => {
    if (galleryImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [galleryImages.length]);

  // Service features mapping
  const features = [
    { title: "Flexibilität", icon: "🔄" },
    { title: "Schnelligkeit", icon: "⚡" },
    { title: "feste Ansprechpartner", icon: "👤" },
    { title: "Projekt- und Programm-Management", icon: "📊" },
    { title: "Rollout & Deployment", icon: "🔄" },
    { title: "Hard- und Software Support Service", icon: "💬" },
    { title: "Garantierte Wiederherstellungszeiten gemäß SLA", icon: "⏰" },
    { title: "Unterstützung remote und Vorort", icon: "🚑" },
    { title: "Schulungen im eigenen Trainingscenter", icon: "📺" }
  ];

  const services = [
    { title: "Sicherheit", icon: "🔒" },
    { title: "TK Services", icon: "🎧" },
    { title: "Multi Cloud Services", icon: "☁️" },
    { title: "Moderne Arbeitswelt", icon: "💻" },
    { title: "Netzwerk Services", icon: "🌐" },
    { title: "Microsoft Services", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <FadeInSection>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  {scrapedData.headings.find(h => h.level === 'h1')?.text || 'IT Service'}
                </h1>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                  Reibungslos. Kompetent.
                </h2>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  {scrapedData.paragraphs.slice(0, 2).map((paragraph, index) => 
                    paragraph.trim() && (
                      <p key={index} className="animate-fade-in">
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Jetzt beraten lassen
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Services entdecken
                  </button>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="relative">
              <FadeInSection delay={300}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  {galleryImages.length > 0 && (
                    <Image
                      src={galleryImages[currentImageIndex]?.src || '/placeholder.jpg'}
                      alt={galleryImages[currentImageIndex]?.alt || 'Service image'}
                      fill
                      className="object-cover transition-all duration-1000 ease-in-out"
                      priority
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Image indicators */}
                  {galleryImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Title */}
            <div className="lg:col-span-1">
              <FadeInSection>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Wir überzeugen durch…
                </h2>
              </FadeInSection>
            </div>

            {/* Right Columns - Features */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    title={feature.title}
                    icon={feature.icon}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6">Wir sind für Sie da.</h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  In unserem Servicecenter erhalten Sie eine individuelle Beratung, 
                  also auch kompetente Servicedienstleistungen direkt am Telefon. 
                  Profitieren Sie von unserer freundlichen und schnellen Unterstützung.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-4 text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold">Beratung</p>
                      <p className="text-blue-100">0821 999 599 87</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🛠️</span>
                    <div>
                      <p className="font-semibold">Services</p>
                      <p className="text-blue-100">0821 999 599 88</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">support@unit.cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Services</h2>
              <p className="text-xl text-gray-600">Entdecken Sie unser umfassendes Leistungsspektrum</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      {galleryImages.length > 1 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Einblicke in unsere Arbeit
              </h2>
            </FadeInSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.slice(1).map((image, index) => (
                <FadeInSection key={index} delay={index * 200}>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
