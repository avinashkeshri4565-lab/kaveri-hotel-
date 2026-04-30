/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, MapPin, Phone, Clock, ShoppingBag } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT, BUSINESS_INFO } from './constants';

export default function OrderForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="order" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 bento-card bg-brand-orange text-white p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">{t(UI_TEXT.orderFormTitle)}</h2>
              <p className="text-white/80 font-bold mb-10 leading-relaxed">{t({ en: 'Fresh, hot and delicious food delivered to your doorstep.', hi: 'ताजा और स्वादिष्ट भोजन आपके घर तक।' })}</p>
            </div>
            <div className="space-y-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl hover:bg-white/20 transition-all font-black text-sm"
              >
                <div className="bg-white text-brand-orange p-3 rounded-2xl">
                  <Phone className="w-5 h-5" />
                </div>
                <span>CALL TO ORDER</span>
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Kaveri%20Hotel,%20I%20want%20to%20order%20food.`} 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl hover:bg-white/20 transition-all font-black text-sm"
              >
                <div className="bg-white text-green-600 p-3 rounded-2xl">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>WHATSAPP ORDER</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3 bento-card p-10 md:p-16 bg-white">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.name)}</label>
                  <input required className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/30 font-bold" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.mobile)}</label>
                  <input required type="tel" className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/30 font-bold" placeholder="+91 0000000000" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.foodItem)}</label>
                  <input required className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/30 font-bold" placeholder="e.g. Special Thali" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.quantity)}</label>
                  <input required type="number" min="1" className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/30 font-bold" placeholder="1" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.address)}</label>
                  <textarea required rows={3} className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/30 font-bold" placeholder="Enter Full Address"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-brand-brown text-white font-black py-5 rounded-[24px] shadow-2xl hover:bg-brand-orange transition-all transform active:scale-95 text-lg uppercase tracking-widest">
                     {t({ en: 'Submit Request', hi: 'अनुरोध भेजें' })}
                  </button>
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-24 h-24 bg-brand-cream text-brand-orange rounded-full flex items-center justify-center mb-8 border-4 border-brand-border animate-bounce">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-brand-brown mb-4 leading-tight">{t(UI_TEXT.orderSuccess)}</h3>
                <p className="text-stone-500 font-bold text-lg">{t({ en: 'We will contact you shortly to confirm your order.', hi: 'हम आपके ऑर्डर की पुष्टि करने के लिए आपसे संपर्क करेंगे।' })}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const { t } = useLanguage();
  const images = [
    'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-brand-cream/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-2 block">{t(UI_TEXT.gallery)}</span>
          <h2 className="text-4xl font-black text-brand-brown">Captured Moments</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           {images.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               className="bento-card relative aspect-square overflow-hidden group bg-white border border-brand-border"
             >
               <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-24 px-6">
      <div className="container mx-auto">
        <div className="bento-card bg-brand-brown text-brand-cream p-12 md:p-20 shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-black text-brand-orange mb-6 tracking-tighter">KAVERI.</h2>
                <p className="text-white/60 font-bold text-lg leading-relaxed max-w-md">{t(UI_TEXT.aboutText)}</p>
              </div>
              <div className="flex gap-4">
                 {[MessageCircle, Phone, MapPin].map((Icon, i) => (
                   <div key={i} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-all cursor-pointer border border-white/10">
                     <Icon className="w-6 h-6 text-white" />
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange mb-8">{t(UI_TEXT.quickLinks)}</h4>
                <ul className="space-y-4 text-white/80 font-bold">
                   <li><a href="#" className="hover:text-brand-orange transition-colors">{t(UI_TEXT.home)}</a></li>
                   <li><a href="#about" className="hover:text-brand-orange transition-colors">{t(UI_TEXT.about)}</a></li>
                   <li><a href="#menu" className="hover:text-brand-orange transition-colors">{t(UI_TEXT.menu)}</a></li>
                   <li><a href="#special" className="hover:text-brand-orange transition-colors">{t(UI_TEXT.special)}</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange mb-8">{t(UI_TEXT.contact)}</h4>
                <ul className="space-y-6 text-white/80 font-bold">
                   <li className="flex items-start space-x-3">
                     <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                     <span className="text-sm leading-relaxed">{t(BUSINESS_INFO.address)}</span>
                   </li>
                   <li className="flex items-center space-x-3">
                     <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                     <span className="text-sm leading-relaxed">{BUSINESS_INFO.phone}</span>
                   </li>
                   <li className="flex items-center space-x-3">
                     <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                     <span className="text-sm leading-relaxed">{t(BUSINESS_INFO.openingHours)}</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-bold text-xs uppercase tracking-widest">
             <p>© 2026 {t(BUSINESS_INFO.name)}. ALL RIGHTS RESERVED.</p>
             <p>MADE FOR PURE VEG LOVERS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
