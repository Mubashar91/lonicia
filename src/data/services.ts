// src/data/services.ts

export type GalleryItem =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string };

export interface PricingItem {
  name: string;
  price: string;
}

export interface ServiceDetails {
  category: string;
  aboutTitle: string;
  aboutDescription: string;
  howItWorks: string;
  whatToExpect: string[];
  closingText: string;
  mainImage: string;
  pricing?: PricingItem[];
}

export interface ExploreServiceCard {
  title: string;
  tag: string;
  url: string;
}

// MANICURE data (moved from ServicesDetails page)
export const manicureDetails: ServiceDetails = {
  category: 'MANICURE',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Give your hands the care and attention they deserve.\n\nAt MK Nails & Beauty, our Manicure service is more than just nail care — it's a relaxing experience designed to rejuvenate your hands and enhance your natural beauty. Using premium products and expert techniques, we ensure your nails look flawless and feel healthy after every session.",
  howItWorks:
    "Our manicure begins with gentle nail shaping, cuticle care, and exfoliation to remove dryness and restore smoothness. A soothing hand massage follows to improve circulation and relaxation. Finally, we apply your preferred polish — from classic shades to trendy finishes — for a clean, elegant look.",
  whatToExpect: [
    'Perfectly shaped and polished nails.',
    'Hydrated, soft, and refreshed hands.',
    'High-quality products for lasting shine and protection.',
    'Hygienic, comfortable, and professional care every time.',
  ],
  closingText:
    "Treat yourself to the perfect balance of beauty and relaxation — because your hands deserve to look as good as you feel.",
  mainImage:
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1200&fit=crop',
  pricing: [
    { name: 'Manicure', price: '€20' },
    { name: 'Manicure + nail polish', price: '€25' },
    { name: 'Manicure + soft gel', price: '€30' },
    { name: 'Manicure + hard gel (2-3)', price: '€35' },
    { name: 'Manicure + hard gel (4-5)', price: '€40' },
    { name: 'Nail extension (2-3)', price: '€55' },
    { name: 'Nail extension (4-5)', price: '€65' },
    { name: 'Japanese manicure', price: '€30' },
    { name: 'Manicure for man', price: '€25' },
    { name: 'Paraffin Therapy hands', price: '€10' },
    { name: 'French / powder / design TWO nails', price: '€10' },
    { name: 'Gel removal', price: '€5/10' },
    { name: 'Hard gel / extension removal', price: '€10' },
    { name: 'Repair ONE nail', price: '€5' },
  ],
};

export const manicureGallery: readonly GalleryItem[] = [
  {
    type: 'video',
    src: '/detail/WhatsApp Video 2025-10-28 at 12.09.15 AM.mp4',
    poster: '/detail/one.jpg',
  },
  { type: 'image', src: '/detail/one.jpg' },
  { type: 'image', src: '/detail/two.jpg' },
  { type: 'image', src: '/detail/thre.jpg' },
  { type: 'image', src: '/detail/four.jpg' },
  { type: 'image', src: '/detail/five.jpg' },
  { type: 'image', src: '/detail/six.jpg' },
] as const;

export const exploreServicesDefault: ExploreServiceCard[] = [
  {
    title: 'LASER HAIR REMOVAL',
    tag: 'Women/Mens',
    url: '/laser.jpg',
  },
  {
    title: 'MANICURE',
    tag: 'Women/Mens',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'PEDICURE',
    tag: 'Women/Mens',
    url: '/pedicure/pedicuremian.jpeg',
  },
];

// LASH EXTENSIONS data
export const lashDetails: ServiceDetails = {
  category: 'LASH EXTENSIONS',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Enhance your eyes with beautifully crafted lash extensions. Our certified artists customize curl, length, and volume to suit your features and preference — from subtle classic sets to bold mega-volume looks.",
  howItWorks:
    "We begin with a consultation to choose your desired style. Natural lashes are cleansed and prepped, then premium, lightweight fibers are applied individually using medical‑grade adhesive for a seamless, long‑lasting result.",
  whatToExpect: [
    'Custom styling: classic, hybrid, or volume',
    'Lightweight, comfortable wear',
    'Damage‑free application and proper isolation',
    'Aftercare guidance for better retention',
  ],
  closingText:
    "Wake up ready with effortless, camera‑ready lashes that elevate your everyday look.",
  mainImage: '/lash/lashone.jpeg',
  pricing: [
    { name: 'Classic (First time)', price: '€50' },
    { name: 'Classic (Infill)', price: '€40' },
    { name: 'Hybrid (First time)', price: '€55' },
    { name: 'Hybrid (Infill)', price: '€45' },
    { name: 'Light Volume 2-3D (First time)', price: '€60' },
    { name: 'Light Volume 2-3D (Infill)', price: '€50' },
    { name: 'Mega Volume (First time)', price: '€65' },
    { name: 'Mega Volume (Infill)', price: '€55' },
    { name: 'Wispy (First time)', price: '€65' },
    { name: 'Wispy (Infill)', price: '€55' },
    { name: 'Corner Lashes', price: '€40' },
    { name: 'Lash Removal', price: '€15' },
    { name: 'Colourful/Ombré', price: '€10' },
  ],
};
 
export const lashGallery: readonly GalleryItem[] = [
  // First, make the tall big card a video
  { type: 'video', src: '/lash/lash1video.mp4', poster: '/lash/lashone.jpeg' },
  // Additional videos
  { type: 'video', src: '/lash/lash2video.mp4', poster: '/lash/lasheight.jpeg' },
  { type: 'video', src: '/lash/lash3video.mp4', poster: '/lash/lashthree.jpeg' },
  // Remaining images
  { type: 'image', src: '/lash/lashfour.jpeg' },
  { type: 'image', src: '/lash/lashfive.jpeg' },
  { type: 'image', src: '/lash/lashseven.jpeg' },
  { type: 'image', src: '/lash/lashnine.jpeg' },
  { type: 'image', src: '/lash/lasttwo.jpeg' },
  { type: 'image', src: '/lash/lastsix.jpeg' },
] as const;

// PEDICURE data
export const pedicureDetails: ServiceDetails = {
  category: 'PEDICURE',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Pamper your feet with our luxurious pedicure services.\n\nAt MK Nails & Beauty, our Pedicure service goes beyond basic nail care — it's a complete foot rejuvenation experience. From gentle exfoliation to soothing massage and flawless polish application, we ensure your feet look beautiful and feel refreshed.",
  howItWorks:
    "Our pedicure begins with a relaxing foot soak to soften the skin, followed by nail trimming, shaping, and cuticle care. We then exfoliate to remove dead skin and calluses, revealing smooth, healthy feet. A therapeutic foot massage improves circulation and relaxation. Finally, we apply your choice of polish for a perfect finish.",
  whatToExpect: [
    'Perfectly shaped and polished toenails.',
    'Soft, smooth, and refreshed feet.',
    'Removal of calluses and dead skin.',
    'Relaxing foot massage and hydration.',
    'Professional care in a hygienic environment.',
  ],
  closingText:
    "Step out with confidence — because beautiful, healthy feet deserve the best care.",
  mainImage: '/pedicure/pedicuremian.jpeg',
  pricing: [
    { name: 'Pedicure toes', price: '€20' },
    { name: 'Pedicure toes + nail polish', price: '€25' },
    { name: 'Pedicure toes + soft gel', price: '€30' },
    { name: 'Pedicure full', price: '€35' },
    { name: 'Pedicure full + nail polish', price: '€40' },
    { name: 'Pedicure full + soft gel', price: '€45' },
    { name: 'Japanese pedicure full', price: '€40' },
    { name: 'Pedicure for man', price: '€45' },
    { name: 'Paraffin Therapy feet', price: '€10' },
    { name: 'French / design / powder', price: '€10' },
    { name: 'Gel removal', price: '€5/10' },
  ],
};

export const pedicureGallery: readonly GalleryItem[] = [
  { type: 'image', src: '/pedicure/pedicuremian.jpeg' },
  { type: 'image', src: '/pedicure/pedi1.jpeg' },
  { type: 'image', src: '/pedicure/102ae395-dc87-4ae2-b17b-c1a1e100e466.jpeg' },
  { type: 'image', src: '/pedicure/69eb3575-c6c4-43a9-90a7-489236020709.jpeg' },
  { type: 'image', src: '/pedicure/69f64207-9f7a-4c6d-885d-e2dcf6bbb8b1.jpeg' },
  { type: 'image', src: '/pedicure/a751e6a6-69cd-4643-8bbc-539850dbd14b.jpeg' },
  { type: 'image', src: '/pedicure/d71a39d6-e8a3-4a6a-90b4-ccd25da99112.jpeg' },
  { type: 'image', src: '/pedicure/e90cb8ef-5eae-4dab-9611-dc37200d53b6.jpeg' },
  { type: 'image', src: '/pedicure/fdc1954a-3be0-4d72-bc7a-64d7f5bb7609.jpeg' },
] as const;
