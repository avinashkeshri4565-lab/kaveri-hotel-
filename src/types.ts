/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'hi';

export interface Translation {
  en: string;
  hi: string;
}

export interface MenuItem {
  id: string;
  name: Translation;
  description: Translation;
  price: number;
  image: string;
  category: string;
  isSpecial?: boolean;
  rating?: number;
}

export interface Category {
  id: string;
  name: Translation;
}

export interface Feature {
  id: string;
  title: Translation;
  icon: string;
}

export interface Review {
  id: string;
  name: Translation;
  text: Translation;
  rating: number;
}

export interface Offer {
  id: string;
  title: Translation;
  description: Translation;
  image: string;
}
