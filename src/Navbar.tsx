/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { BUSINESS_INFO, UI_TEXT } from './constants';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t(UI_TEXT.home), href: '#' },
    { name: t(UI_TEXT.about), href: '#about' },
    { name: t(UI_TEXT.menu), href: '#menu' },
    { name: t(UI_TEXT.special), href: '#special' },
    { name: t(UI_TEXT.offers), href: '#offers' },
    { name: t(UI_TEXT.gallery), href: '#gallery' },
    { name: t(UI_TEXT.reviews), href: '#reviews' },
    { name: t(UI_TEXT.contact), href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-brand-border' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
            {t(BUSINESS_INFO.name)[0]}
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-lg leading-none ${scrolled ? 'text-brand-orange' : 'text-white'}`}>
              {t(BUSINESS_INFO.name).toUpperCase()}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${scrolled ? 'text-brand-green' : 'text-amber-200'}`}>
              {t(BUSINESS_INFO.location)}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wider hover:text-brand-orange transition-colors ${
                scrolled ? 'text-brand-brown' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex bg-stone-100 rounded-full p-1 border border-stone-200">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                language === 'en' ? 'bg-white shadow-sm text-brand-orange' : 'text-stone-400'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                language === 'hi' ? 'bg-white shadow-sm text-brand-orange' : 'text-stone-400'
              }`}
            >
              हि
            </button>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-brand-green hover:bg-green-800 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t(UI_TEXT.callNow)}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-amber-900' : 'text-white'}`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-stone-800 font-medium text-lg border-b border-stone-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'hi' : 'en');
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 text-orange-600 font-bold"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === 'en' ? 'हिन्दी (Hindi)' : 'English'}</span>
                </button>
                <div className="flex space-x-4">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-orange-600">
                    <Phone />
                  </a>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="text-green-600">
                    <MessageCircle />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
