/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Leaf, Utensils, ShieldCheck, Users, 
  IndianRupee, Zap, Phone, MessageCircle, 
  MapPin, Star, Truck, Calendar, Clock, ShoppingBag 
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { BUSINESS_INFO, FEATURES, REVIEWS, UI_TEXT, MENU_ITEMS } from './constants';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-2/5 bento-card h-[400px] md:h-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-3/5 bento-card p-10 md:p-16 flex flex-col justify-center"
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-4 block">{t(UI_TEXT.about)}</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-brown mb-6 leading-tight">
              {t({ en: 'Authentic Pure Veg Experience in Bettiah', hi: 'बेतिया में असली शुद्ध शाकाहारी अनुभव' })}
            </h2>
            <p className="text-stone-500 text-lg mb-10 leading-relaxed font-bold">
              {t(UI_TEXT.aboutText)}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-brand-cream border border-brand-border px-6 py-3 rounded-2xl flex items-center space-x-3 text-brand-brown font-black">
                <Leaf className="w-5 h-5 text-brand-green" />
                <span>{t(UI_TEXT.trustBadge1)}</span>
              </div>
              <div className="bg-brand-cream border border-brand-border px-6 py-3 rounded-2xl flex items-center space-x-3 text-brand-brown font-black">
                <Utensils className="w-5 h-5 text-brand-orange" />
                <span>{t(UI_TEXT.trustBadge2)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const { t } = useLanguage();
  const iconMap: Record<string, any> = {
    Leaf: <Leaf />,
    Utensils: <Utensils />,
    ShieldCheck: <ShieldCheck />,
    Users: <Users />,
    IndianRupee: <IndianRupee />,
    Zap: <Zap />,
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-10 flex flex-col items-center text-center group bg-white"
            >
              <div className="w-16 h-16 bg-brand-cream border border-brand-border text-brand-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all transform group-hover:rotate-12">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-black text-brand-brown mb-2">{t(feature.title)}</h3>
              <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{t({ en: 'Verified Quality', hi: 'सत्यापित गुणवत्ता' })}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecialDishesSection() {
  const { t } = useLanguage();
  const specials = MENU_ITEMS.filter(item => item.isSpecial);

  return (
    <section id="special" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest block mb-2">{t(UI_TEXT.special)}</span>
            <h2 className="text-4xl font-bold text-stone-900">Featured Delicacies</h2>
          </div>
          <a href="#menu" className="text-orange-600 font-bold hover:underline">View Full Menu →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 rounded-3xl overflow-hidden group shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={t(item.name)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-stone-900">{t(item.name)}</h3>
                  <span className="text-xl font-black text-orange-600">₹{item.price}</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-500 mb-6">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-4 h-4 ${i < (item.rating || 5) ? 'fill-current' : ''}`} />
                   ))}
                   <span className="text-stone-400 text-xs ml-2">( {item.rating} Rating )</span>
                </div>
                <a href="#order" className="w-full bg-stone-900 hover:bg-orange-600 text-white font-bold py-3 rounded-xl block text-center transition-colors">
                  Order This Item
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliverySection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6">
       <div className="container mx-auto">
         <div className="bg-brand-green rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border-none">
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
           <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl" />
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{t(UI_TEXT.deliveryTitle)}</h3>
               <p className="text-white/80 text-lg md:text-xl font-bold mb-10">{t(UI_TEXT.deliveryContent)}</p>
               <a href="#order" className="inline-block bg-white text-brand-green px-10 py-5 rounded-2xl font-black text-lg transition-transform active:scale-95 shadow-2xl">
                 Place Order Now
               </a>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               {[
                 { label: t(UI_TEXT.deliveryArea), val: 'Bettiah City' },
                 { label: t(UI_TEXT.minOrder), val: '₹200' },
                 { label: t(UI_TEXT.deliveryCharge), val: '₹30' },
                 { label: t(UI_TEXT.deliveryTime), val: '30-45m' }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                   <div className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-1">{item.label}</div>
                   <div className="text-xl font-black">{item.val}</div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
    </section>
  );
}

export function ReviewSection() {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-2 block tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-black text-brand-brown">{t(UI_TEXT.reviews)}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-10 bg-white"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-brown font-bold italic mb-8 leading-relaxed">"{t(review.text)}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-brand-orange font-black border border-stone-200">
                  {t(review.name)[0]}
                </div>
                <div>
                  <h4 className="font-black text-brand-brown">{t(review.name)}</h4>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-widest">Happy Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OffersSection() {
  const { t } = useLanguage();
  return (
    <section id="offers" className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: { en: 'Family Combo Offer', hi: 'फैमिली कॉम्बो ऑफर' },
              description: { en: 'Get 10% off on orders above ₹1000. Perfect for family weekends!', hi: '₹1000 से अधिक के ऑर्डर पर 10% की छूट।' },
              code: 'FAMILY10',
              image: 'https://images.unsplash.com/photo-1582284540020-8acaf0222bb7?auto=format&fit=crop&q=80&w=600'
            },
            {
              title: { en: 'Student Meal Deal', hi: 'स्टूडेंट मील डील' },
              description: { en: 'Simple Veg Thali just at ₹99 for students. Valid ID required.', hi: 'आईडी कार्ड दिखाने पर स्टूडेंट्स के लिए स्पेशल थाली सिर्फ ₹99 में।' },
              code: 'STUDENT99',
              image: 'https://images.unsplash.com/photo-1601050690597-df056fbec7ad?auto=format&fit=crop&q=80&w=600'
            }
          ].map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bento-card flex flex-col md:flex-row h-full group"
            >
              <div className="md:w-5/12 h-64 md:h-auto overflow-hidden">
                <img src={offer.image} alt={t(offer.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="md:w-7/12 p-10 flex flex-col justify-center">
                <div className="bg-red-50 text-red-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter inline-block w-max mb-6">
                  🔥 {t({ en: 'Limited Weekend Offer', hi: 'सीमित ऑफर' })}
                </div>
                <h3 className="text-2xl font-black text-brand-brown mb-3 leading-tight">{t(offer.title)}</h3>
                <p className="text-stone-500 font-bold mb-8 text-sm leading-relaxed">{t(offer.description)}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="border-2 border-dashed border-brand-border bg-brand-cream px-4 py-2 rounded-2xl">
                    <span className="text-brand-orange font-mono font-black">{offer.code}</span>
                  </div>
                  <a href="#order" className="bg-brand-brown text-white font-black px-6 py-3 rounded-2xl text-xs hover:bg-brand-orange transition-all">
                    Claim Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 bg-brand-cream/30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bento-card bg-white p-10 flex-1">
              <h2 className="text-4xl font-black text-brand-brown mb-10 tracking-tighter">{t(UI_TEXT.contact)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-cream border border-brand-border rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-1">Our Location</h4>
                    <p className="text-brand-brown font-bold text-sm leading-relaxed">{t(BUSINESS_INFO.address)}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-cream border border-brand-border rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-1">Call Us</h4>
                    <p className="text-brand-brown font-bold text-sm leading-relaxed">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-cream border border-brand-border rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                     <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-1">WhatsApp</h4>
                    <p className="text-brand-brown font-bold text-sm leading-relaxed">+{BUSINESS_INFO.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-cream border border-brand-border rounded-2xl flex items-center justify-center text-brand-brown shrink-0">
                     <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-1">Hours</h4>
                    <p className="text-brand-brown font-bold text-sm leading-relaxed">{t(BUSINESS_INFO.openingHours)}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bento-card overflow-hidden h-64 bg-stone-200 border-none relative group">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-brown/40 group-hover:bg-transparent transition-all">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=Kaveri+Hotel+Bettiah`}
                  className="bg-white text-brand-brown px-8 py-4 rounded-2xl font-black shadow-2xl hover:bg-brand-orange hover:text-white transition-all transform active:scale-95"
                >
                  {t(UI_TEXT.getDirection)}
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bento-card bg-white p-10 md:p-16 h-full">
               <h3 className="text-3xl font-black text-brand-brown mb-8 tracking-tight">Drop a Message</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.name)}</label>
                      <input className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/20 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.mobile)}</label>
                      <input className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/20 font-bold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t({ en: 'Subject', hi: 'विषय' })}</label>
                    <input className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/20 font-bold" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-stone-400 mb-2">{t(UI_TEXT.message)}</label>
                    <textarea rows={4} className="w-full px-6 py-4 border-2 border-brand-border rounded-[20px] outline-none focus:border-brand-orange transition-all bg-brand-cream/20 font-bold"></textarea>
                  </div>
                  <button className="w-full bg-brand-orange text-white font-black py-5 rounded-[24px] shadow-2xl hover:bg-brand-brown transition-all transform active:scale-95 text-lg uppercase tracking-widest">
                    Send Message
                  </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
