/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Hero from './Hero';
import OfferPopup from './OfferPopup';
import MenuSection from './MenuSection';
import OrderForm, { GallerySection, Footer } from './Footer';
import { 
  AboutSection, 
  WhyChooseUsSection, 
  SpecialDishesSection, 
  DeliverySection, 
  ReviewSection, 
  ContactSection,
  OffersSection
} from './Sections';
import { BUSINESS_INFO } from './constants';

function AppContent() {
  return (
    <div className="relative">
      <OfferPopup />
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseUsSection />
        <MenuSection />
        <SpecialDishesSection />
        <OffersSection />
        <DeliverySection />
        <GallerySection />
        <ReviewSection />
        <OrderForm />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-500 rounded-full -z-10 opacity-50"
        />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold">
          Order on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
