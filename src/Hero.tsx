/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChefHat, Clock, Truck, Users, Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from './constants';

export default function Hero() {
  const { t } = useLanguage();

  const trustBadges = [
    { text: t(UI_TEXT.trustBadge1), style: 'bg-brand-green text-white' },
    { text: t(UI_TEXT.trustBadge3), style: 'bg-white/20 backdrop-blur-md text-white border border-white/30' },
  ];

  return (
    <section id="home" className="pt-24 pb-6 px-6 min-h-[90vh]">
      <div className="container mx-auto h-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative h-[600px] md:h-[700px] rounded-[48px] overflow-hidden bg-brand-brown"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1920"
              alt="Vegetarian Thali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 h-full p-8 md:p-20 flex flex-col justify-end max-w-4xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex gap-2 mb-6"
            >
              {trustBadges.map((badge, idx) => (
                <span key={idx} className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl ${badge.style}`}>
                  {badge.text}
                </span>
              ))}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black mb-4 text-white leading-[0.95]"
            >
              {t(BUSINESS_INFO.name)} <br/>
              <span className="text-brand-orange">{t({ en: 'Pure Taste', hi: 'शुद्ध स्वाद' })}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl mb-10 font-bold text-white/90 max-w-xl"
            >
              {t(UI_TEXT.heroSubheadline)}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#order"
                className="bg-brand-orange hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-2xl hover:scale-105"
              >
                {t(UI_TEXT.order)}
              </a>
              <a
                href="#menu"
                className="bg-white text-brand-brown font-black py-5 px-10 rounded-2xl transition-all shadow-2xl hover:scale-105"
              >
                {t(UI_TEXT.viewMenu)}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
