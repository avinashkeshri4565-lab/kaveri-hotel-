/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageCircle, ShoppingBag } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CATEGORIES, MENU_ITEMS, BUSINESS_INFO, UI_TEXT } from './constants';

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-widest uppercase mb-2 block"
          >
            {t(UI_TEXT.menu)}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
          >
            Our Delicious Categories
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-stone-600 hover:bg-orange-100 border border-stone-100 shadow-sm'
              }`}
            >
              {t(cat.name)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-brand-border h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isSpecial && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                      {t({ en: 'Customer Favorite', hi: 'पसंदीदा' })}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-brand-brown group-hover:text-brand-orange transition-colors">
                      {t(item.name)}
                    </h3>
                    <span className="font-black text-brand-green text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-xs font-bold leading-relaxed mb-6 line-clamp-2">
                    {t(item.description)}
                  </p>

                  <div className="mt-auto flex gap-2">
                    <a
                      href="#order"
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-brand-brown font-black py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all transition-colors"
                    >
                      <span>{t(UI_TEXT.order)}</span>
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Kaveri%20Hotel,%20I%20want%20to%20order%20${t(item.name)}`}
                      className="bg-brand-orange hover:bg-orange-600 text-white p-4 rounded-2xl transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
