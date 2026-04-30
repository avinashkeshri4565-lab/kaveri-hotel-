/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from './constants';

export default function OfferPopup() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setShow(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => handleClose(), 3000);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden max-w-md w-full z-10 border-4 border-brand-orange p-8"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-1 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-orange-50 rounded-full mx-auto flex items-center justify-center text-4xl mb-4">
                🎁
              </div>
              <h2 className="text-3xl font-black text-brand-orange leading-tight">{t(UI_TEXT.popupTitle)}</h2>
              <p className="text-stone-500 font-bold mt-2">{t(UI_TEXT.popupSubtitle)}</p>
            </div>

            <div className="">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder={t(UI_TEXT.name)}
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-brand-orange outline-none transition-all font-bold"
                  />
                  <input
                    required
                    type="tel"
                    placeholder={t(UI_TEXT.mobile)}
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-brand-orange outline-none transition-all font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl transition-all active:scale-95"
                  >
                    {t({ en: 'Claim Offer Now', hi: 'ऑफर अभी पाएं' })}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{t(UI_TEXT.orderSuccess)}</h3>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
