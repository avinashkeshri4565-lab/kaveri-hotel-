/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, ReactNode, useContext, useState } from 'react';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translation: { en: string; hi: string } | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (translation: { en: string; hi: string } | string): string => {
    if (typeof translation === 'string') return translation;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
