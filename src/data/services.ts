// src/data/services.ts

export type GalleryItem =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string };

export interface ServiceDetails {
  category: string;
  aboutTitle: string;
  aboutDescription: string;
  howItWorks: string;
  whatToExpect: string[];
  closingText: string;
  mainImage: string;
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
};

export const manicureGallery: readonly GalleryItem[] = [
  {
    type: 'video',
    src: '/detail/WhatsApp%20Video%202025-10-28%20at%2012.09.15%20AM.mp4',
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
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop',
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
