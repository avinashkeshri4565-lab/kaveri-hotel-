/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Feature, MenuItem, Offer, Review, Translation } from './types';

export const BUSINESS_INFO = {
  name: {
    en: 'Kaveri Hotel',
    hi: 'कावेरी होटल',
  },
  location: {
    en: 'Bettiah, Bihar',
    hi: 'बेतिया, बिहार',
  },
  phone: '+91 9999999999',
  whatsapp: '919999999999',
  address: {
    en: 'Main Road, Near Town Hall, Bettiah, Bihar - 845438',
    hi: 'मेन रोड, टाउन हॉल के पास, बेतिया, बिहार - 845438',
  },
  openingHours: {
    en: '7:00 AM - 10:30 PM (Everyday)',
    hi: 'सुबह 7:00 - रात 10:30 (प्रतिदिन)',
  },
};

export const UI_TEXT: Record<string, Translation> = {
  home: { en: 'Home', hi: 'मुख्य' },
  about: { en: 'About', hi: 'हमारे बारे में' },
  menu: { en: 'Menu', hi: 'मेनू' },
  thali: { en: 'Thali', hi: 'थाली' },
  special: { en: 'Special Dishes', hi: 'विशेष व्यंजन' },
  offers: { en: 'Offers', hi: 'ऑफर' },
  gallery: { en: 'Gallery', hi: 'गैलरी' },
  reviews: { en: 'Reviews', hi: 'समीक्षाएं' },
  order: { en: 'Order Now', hi: 'ऑर्डर करें' },
  contact: { en: 'Contact', hi: 'संपर्क' },
  viewMenu: { en: 'View Menu', hi: 'मेनू देखें' },
  callNow: { en: 'Call Now', hi: 'कॉल करें' },
  whatsappOrder: { en: 'WhatsApp Order', hi: 'व्हाट्सएप ऑर्डर' },
  trustBadge1: { en: '100% Pure Vegetarian', hi: '100% शुद्ध शाकाहारी' },
  trustBadge2: { en: 'Fresh Food Daily', hi: 'ताजा भोजन हर दिन' },
  trustBadge3: { en: 'Family Restaurant', hi: 'पारिवारिक भोजनालय' },
  trustBadge4: { en: 'Home Delivery', hi: 'होम डिलीवरी' },
  trustBadge5: { en: 'Takeaway Available', hi: 'टेकअवे उपलब्ध' },
  heroHeadline: {
    en: 'Kaveri Hotel Bettiah',
    hi: 'कावेरी होटल बेतिया',
  },
  heroSubheadline: {
    en: 'Pure Vegetarian Taste You Can Trust',
    hi: 'शुद्ध शाकाहारी स्वाद जिस पर आप भरोसा कर सकते हैं',
  },
  popupTitle: { en: "Today's Special Offer!", hi: 'आज का स्पेशल ऑफर!' },
  popupSubtitle: {
    en: 'Order your favourite vegetarian meal today. Get special discount on family orders.',
    hi: 'आज ही अपना पसंदीदा शाकाहारी भोजन ऑर्डर करें। फैमिली ऑर्डर पर खास छूट।',
  },
  submit: { en: 'Submit', hi: 'भेजें' },
  close: { en: 'Close', hi: 'बंद करें' },
  orderSuccess: {
    en: 'Thanks! Your order request has been received.',
    hi: 'धन्यवाद! आपका ऑर्डर रिक्वेस्ट प्राप्त हो गया है।',
  },
  aboutText: {
    en: 'Kaveri Hotel is a pure vegetarian restaurant in Bettiah offering fresh, tasty and hygienic food for families, students, office workers and travellers. From traditional Indian meals to snacks, breakfast, lunch and dinner, we serve food with quality and care.',
    hi: 'कावेरी होटल बेतिया का एक शुद्ध शाकाहारी होटल है, जहां परिवार, छात्र, ऑफिस वर्कर और यात्रियों के लिए ताजा, स्वादिष्ट और साफ-सुथरा भोजन उपलब्ध है। नाश्ता, लंच, डिनर, थाली और स्नैक्स सब कुछ अच्छे स्वाद और गुणवत्ता के साथ परोसा जाता है।',
  },
  whyChooseUs: { en: 'Why Choose Us?', hi: 'हमें क्यों चुनें?' },
  deliveryTitle: { en: 'Home Delivery Available in Bettiah', hi: 'बेतिया में होम डिलीवरी उपलब्ध है' },
  deliveryContent: {
    en: 'Order fresh pure vegetarian food from Kaveri Hotel and get it delivered to your home.',
    hi: 'कावेरी होटल से ताजा शुद्ध शाकाहारी भोजन ऑर्डर करें और घर पर डिलीवरी पाएं।',
  },
  deliveryArea: { en: 'Delivery Area: Bettiah City', hi: 'डिलीवरी क्षेत्र: बेतिया शहर' },
  minOrder: { en: 'Minimum Order: ₹200', hi: 'न्यूनतम ऑर्डर: ₹200' },
  deliveryCharge: { en: 'Delivery Charge: ₹30', hi: 'डिलीवरी चार्ज: ₹30' },
  deliveryTime: { en: 'Delivery Time: 30–45 mins', hi: 'डिलीवरी समय: 30–45 मिनट' },
  orderFormTitle: { en: 'Place Your Order', hi: 'अपना ऑर्डर दें' },
  name: { en: 'Name', hi: 'नाम' },
  mobile: { en: 'Mobile Number', hi: 'मोबाइल नंबर' },
  foodItem: { en: 'Food Item', hi: 'भोजन का नाम' },
  quantity: { en: 'Quantity', hi: 'मात्रा' },
  type: { en: 'Delivery / Takeaway', hi: 'डिलीवरी / टेकअवे' },
  address: { en: 'Address', hi: 'पता' },
  instructions: { en: 'Special Instructions', hi: 'विशेष निर्देश' },
  message: { en: 'Message', hi: 'संदेश' },
  getDirection: { en: 'Get Direction', hi: 'रास्ता देखें' },
  quickLinks: { en: 'Quick Links', hi: 'त्वरित लिंक' },
  categories: { en: 'Categories', hi: 'श्रेणियां' },
  all: { en: 'All', hi: 'सभी' }
};

export const CATEGORIES: Category[] = [
  { id: 'all', name: { en: 'All', hi: 'सभी' } },
  { id: 'breakfast', name: { en: 'Breakfast', hi: 'नाश्ता' } },
  { id: 'thali', name: { en: 'Thali', hi: 'थाली' } },
  { id: 'north-indian', name: { en: 'North Indian', hi: 'उत्तर भारतीय' } },
  { id: 'south-indian', name: { en: 'South Indian', hi: 'दक्षिण भारतीय' } },
  { id: 'chinese', name: { en: 'Chinese', hi: 'चाइनीज' } },
  { id: 'snacks', name: { en: 'Snacks', hi: 'स्नैक्स' } },
  { id: 'rice-biryani', name: { en: 'Rice & Biryani', hi: 'चावल और बिरयानी' } },
  { id: 'sweets-drinks', name: { en: 'Sweets & Drinks', hi: 'मिठाई और ड्रिंक्स' } },
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: { en: 'Idli Sambhar', hi: 'इडली सांभर' },
    description: { en: 'Soft steamed rice cakes served with spicy sambar.', hi: 'सांभर के साथ परोसी गई नरम स्टीम्ड चावल की इडली।' },
    price: 60,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400',
    category: 'breakfast',
  },
  {
    id: 'b2',
    name: { en: 'Puri Sabji', hi: 'पूरी सब्जी' },
    description: { en: 'Golden fried puris served with savory potato curry.', hi: 'आलू की सब्जी के साथ गरमागरम पूरियां।' },
    price: 50,
    image: 'https://images.unsplash.com/photo-1547928576-a4a33237ecd3?auto=format&fit=crop&q=80&w=400',
    category: 'breakfast',
  },
  {
      id: 'b3',
      name: { en: 'Chole Bhature', hi: 'छोले भटूरे' },
      description: { en: 'Authentic spicy chickpeas served with fluffy soft bhature.', hi: 'मसालेदार छोले और फूले हुए भटूरे।' },
      price: 80,
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400',
      category: 'breakfast',
      isSpecial: true,
      rating: 4.8
  },
  // Thali
  {
    id: 't1',
    name: { en: 'Simple Veg Thali', hi: 'साधारण वेज थाली' },
    description: { en: 'Rice, Dal, 1 Sabji, 2 Roti, Salad.', hi: 'चावल, दाल, 1 सब्जी, 2 रोटी, सलाद।' },
    price: 120,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
    category: 'thali',
  },
  {
    id: 't2',
    name: { en: 'Special Veg Thali', hi: 'स्पेशल वेज थाली' },
    description: { en: 'Rice, Dal Fry, Paneer Sabji, 3 Roti, Raite, Sweet, Salad.', hi: 'चावल, दाल फ्राई, पनीर सब्जी, 3 रोटी, रायता, मिठाई, सलाद।' },
    price: 180,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=400',
    category: 'thali',
    isSpecial: true,
    rating: 4.9
  },
  // North Indian
  {
    id: 'ni1',
    name: { en: 'Paneer Butter Masala', hi: 'पनीर बटर मसाला' },
    description: { en: 'Creamy paneer in a rich tomato-based gravy.', hi: 'टमाटर की ग्रेवी में बना मलाईदार पनीर।' },
    price: 160,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400',
    category: 'north-indian',
    isSpecial: true,
    rating: 4.7
  },
  // South Indian
  {
    id: 'si1',
    name: { en: 'Masala Dosa', hi: 'मसाला डोसा' },
    description: { en: 'Crispy crepe filled with spicy potato mash.', hi: 'मसालेदार आलू के साथ कुरकुरा डोसा।' },
    price: 90,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=400',
    category: 'south-indian',
    isSpecial: true,
    rating: 4.8
  },
  // Chinese
  {
    id: 'c1',
    name: { en: 'Veg Chowmein', hi: 'वेज चाउमीन' },
    description: { en: 'Stir-fried noodles with fresh vegetables.', hi: 'ताजी सब्जियों के साथ तले हुए नूडल्स।' },
    price: 70,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400',
    category: 'chinese',
  },
  // Rice & Biryani
  {
    id: 'rb1',
    name: { en: 'Veg Biryani', hi: 'वेज बिरयानी' },
    description: { en: 'Aromatic basmati rice cooked with seasonal vegetables and spices.', hi: 'चुनिंदा सब्जियों और खुशबूदार मसालों के साथ बिरयानी।' },
    price: 140,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=400',
    category: 'rice-biryani',
    isSpecial: true,
    rating: 4.6
  }
];

export const FEATURES: Feature[] = [
  { id: 'f1', title: { en: '100% Pure Vegetarian', hi: '100% शुद्ध शाकाहारी' }, icon: 'Leaf' },
  { id: 'f2', title: { en: 'Fresh Ingredients', hi: 'ताजा सामग्री' }, icon: 'Utensils' },
  { id: 'f3', title: { en: 'Hygienic Kitchen', hi: 'हाइजीनिक किचन' }, icon: 'ShieldCheck' },
  { id: 'f4', title: { en: 'Family Friendly', hi: 'फैमिली फ्रेंडली' }, icon: 'Users' },
  { id: 'f5', title: { en: 'Affordable Prices', hi: 'सस्ती दरें' }, icon: 'IndianRupee' },
  { id: 'f6', title: { en: 'Quick Service', hi: 'तेज सर्विस' }, icon: 'Zap' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: { en: 'Rakesh Verma', hi: 'राकेश वर्मा' }, text: { en: 'Best pure vegetarian food in Bettiah.', hi: 'बेतिया में सबसे अच्छा शुद्ध शाकाहारी भोजन।' }, rating: 5 },
  { id: 'r2', name: { en: 'Anjali Sharma', hi: 'अंजली शर्मा' }, text: { en: 'Good taste and hygienic food.', hi: 'स्वादिष्ट और साफ-सुथरा भोजन।' }, rating: 4 },
  { id: 'r3', name: { en: 'Sumit Kumar', hi: 'सुमित कुमार' }, text: { en: 'Affordable thali and quick service.', hi: 'कम कीमत में बेहतरीन थाली और तेज़ सर्विस।' }, rating: 5 },
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    title: { en: 'Family Combo Offer', hi: 'फैमिली कॉम्बो ऑफर' },
    description: { en: 'Get 10% off on orders above ₹1000.', hi: '₹1000 से अधिक के ऑर्डर पर 10% की छूट।' },
    image: 'https://images.unsplash.com/photo-1582284540020-8acaf0222bb7?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'o2',
    title: { en: 'Student Meal Offer', hi: 'स्टूडेंट मील ऑफर' },
    description: { en: 'Simple Thali just at ₹99 for students with ID.', hi: 'आईडी कार्ड दिखाने पर स्टूडेंट्स के लिए सिंपल थाली सिर्फ ₹99 में।' },
    image: 'https://images.unsplash.com/photo-1601050690597-df056fbec7ad?auto=format&fit=crop&q=80&w=400',
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
];
