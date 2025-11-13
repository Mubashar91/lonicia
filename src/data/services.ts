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
    "Our manicure begins with gentle nail shaping, cuticle care, and exfoliation to remove dryness and restore smoothness. A soothing hand massage follows to improve circulation and relaxation. Finally, we apply your preferred polish — from classic shades to trendy finishes — for a clean, elegant look.\n\nOur Japanese Manicure is a natural nail care treatment that originated in Japan and is designed to restore the nails’ healthy shine without using any polish or chemicals. The process involves gently buffing a special paste made from natural ingredients—such as beeswax, keratin, and sea minerals—into the nail plate, followed by a fine powder that seals in nutrients and gives a glossy, pinkish finish. This treatment strengthens weak or damaged nails, promotes natural growth, and leaves them looking beautifully healthy and polished—completely naturally.\n\nParaffin Therapy for Hands and Feet is a deeply nourishing and relaxing treatment that helps restore softness and hydration to the skin. Warm paraffin wax is applied to the hands or feet, creating a gentle heat that opens pores, improves blood circulation, and locks in moisture. As the wax cools, it leaves the skin feeling silky smooth and rejuvenated. This therapy is especially beneficial for dry, rough skin and can also help soothe joint pain and stiffness, offering both beauty and therapeutic benefits.",
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
    url: '/laser-hair-removel111.jpeg',
  },
  {
    title: 'MANICURE',
    tag: 'Women/Mens',
    url: '/manicure.jpeg',
  },
  {
    title: 'PEDICURE',
    tag: 'Women/Mens',
    url: '/pedicure/pedicuremian.jpeg',
  },
  {
    title: 'LASH EXTENSIONS',
    tag: 'Women',
    url: '/hdhd.jpg',
  },
  {
    title: 'BROWS / LASHES',
    tag: 'Women/Mens',
    url: '/bowsone.jpeg',
  },
  {
    title: 'PERMANENT MAKEUP',
    tag: 'Women',
    url: '/realpermanentmakeup.jpeg',
  },
  {
    title: 'MAKEUP',
    tag: 'Women',
    url: '/realmackup.jpeg',
  },
  {
    title: 'BODY SLIM TREATMENT',
    tag: 'Women/Mens',
    url: '/realhairremoving.jpeg',
  },
  {
    title: 'HAIR DRESSING',
    tag: 'Women/Mens',
    url: '/realhairdressing.jpeg',
  },
  {
    title: 'FACIALS',
    tag: 'Women/Mens',
    url: '/hair-dressing.jpg',
  },
  {
    title: 'AESTHETICS',
    tag: 'Women/Mens',
    url: '/asthetic.jpeg',
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

  { type: 'video', src: '/lash/lash2video.mp4', poster: '/lash/lasttwo.jpeg' },
 
  { type: 'image', src: '/lash/lashone.jpeg' },
  { type: 'image', src: '/lash/lasttwo.jpeg' },
  { type: 'image', src: '/lash/lashthree.jpeg' },
  { type: 'image', src: '/lash/lashfour.jpeg' },
  { type: 'image', src: '/lash/lashfive.jpeg' },
  { type: 'image', src: '/lash/lastsix.jpeg' },
  { type: 'image', src: '/lash/lashseven.jpeg' },
  { type: 'image', src: '/lash/lasheight.jpeg' },
  { type: 'image', src: '/lash/lashnine.jpeg' },
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
  // { type: 'image', src: '/pedicure/69eb3575-c6c4-43a9-90a7-489236020709.jpeg' },
  // { type: 'image', src: '/pedicure/69f64207-9f7a-4c6d-885d-e2dcf6bbb8b1.jpeg' },
  { type: 'image', src: '/pedicure/a751e6a6-69cd-4643-8bbc-539850dbd14b.jpeg' },
  { type: 'image', src: '/pedicure/d71a39d6-e8a3-4a6a-90b4-ccd25da99112.jpeg' },
  { type: 'image', src: '/pedicure/e90cb8ef-5eae-4dab-9611-dc37200d53b6.jpeg' },
  { type: 'image', src: '/pedicure/fdc1954a-3be0-4d72-bc7a-64d7f5bb7609.jpeg' },
] as const;

// LASER HAIR REMOVAL data
export const laserDetails: ServiceDetails = {
  category: 'LASER HAIR REMOVAL',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Experience smooth, hair-free skin with our advanced laser hair removal treatments.\n\nAt MK Nails & Beauty, we use state-of-the-art laser technology to provide safe, effective, and long-lasting hair removal for both men and women. Our Laser hair removal with AI-technology customize each treatment to your skin type and hair color, ensuring optimal results with minimal discomfort.",
  howItWorks:
    "Our laser hair removal process uses concentrated light beams that target hair follicles. The pigment in the follicles absorbs the light, which destroys the hair. A consultation determines your treatment plan based on your skin tone, hair type, and desired results. Multiple sessions are typically needed for best results, as hair grows in cycles.",
  whatToExpect: [
    'Permanent hair reduction with multiple sessions.',
    'Safe for all skin types and tones.',
    'Minimal discomfort with cooling technology.',
    'Quick treatment times for most areas.',
    'Smooth, hair-free skin that lasts.',
    'Professional consultation and customized treatment plans.',
  ],
  closingText:
    "Say goodbye to razors and waxing — enjoy the freedom of smooth, beautiful skin all year round.",
  mainImage: '/laser.jpg',
  pricing: [
    { name: 'WOMEN', price: '' },
    { name: 'Full Legs', price: '€60' },
    { name: 'Lower Legs', price: '€40' },
    { name: 'Back', price: '€40' },
    { name: 'Arms', price: '€30' },
    { name: 'Half Arms', price: '€25' },
    { name: 'Full Bikini (Brazilian)', price: '€40' },
    { name: 'Bikini Line', price: '€30' },
    { name: 'Armpits', price: '€30' },
    { name: 'Glutes', price: '€25' },
    { name: 'Face', price: '€25' },
    { name: 'Small Area', price: '€10' },
    { name: 'Full Body', price: '€120' },
    { name: '1 (Lower Legs, Bikini, Armpits)', price: '€80' },
    { name: '2 (Full Legs, Arms, Bikini, Armpits)', price: '€100' },
    { name: '3 (Armpits + two small areas)', price: '€40' },
    { name: '4 (6 Full Body visits)', price: '€630' },
    { name: '5 (4 Full Body visits)', price: '€420' },
    { name: 'MEN', price: '' },
    { name: 'Full Legs', price: '€70' },
    { name: 'Lower Legs', price: '€50' },
    { name: 'Back', price: '€60' },
    { name: 'Chest', price: '€40' },
    { name: 'Arms', price: '€50' },
    { name: 'Half Arms', price: '€40' },
    { name: 'Armpits', price: '€30' },
    { name: 'Glutes', price: '€40' },
    { name: 'Full Body', price: '€140' },
    { name: 'Small Area', price: '€10' },
    { name: 'Face', price: '€30' },
    { name: 'Abdominal (stomach)', price: '€40' },
    { name: '1 (Full Legs, Arms, Chest, Glutes)', price: '€120' },
    { name: '2 (Chest, Back, Armpits, Abdominal)', price: '€100' },
    { name: '3 (Full Legs, Arms, Armpits)', price: '€100' },
    { name: '4 (6 Full Body visits)', price: '€750' },
    { name: '5 (4 Full Body visits)', price: '' },
  ],
};

export const laserGallery: readonly GalleryItem[] = [
  { type: 'video', src: '/laser-hair-removel/six.mp4', poster: '/laser-hair-removel/one.jpeg' },
  { type: 'video', src: '/laser-hair-removel/seven.mp4', poster: '/laser-hair-removel/two.jpeg' },
  { type: 'image', src: '/lyerrr.jpeg' },
  { type: 'image', src: '/laser-hair-removel/one.jpeg' },
  { type: 'image', src: '/laser-hair-removel/two.jpeg' },
  // { type: 'image', src: '/laser-hair-removel/three.jpeg' },
  // { type: 'image', src: '/laser-hair-removel/four.jpeg' },
  // { type: 'image', src: '/laser-hair-removel/five.jpeg' },
] as const;

// BROWS/LASHES data
export const browsLashesDetails: ServiceDetails = {
  category: 'BROWS / LASHES',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Frame your face with perfectly shaped brows and stunning lashes.\n\nAt MK Nails & Beauty, we specialize in brow and lash treatments that enhance your natural beauty. From precise brow shaping and tinting to luxurious lash lifts and lamination, our expert technicians create customized looks that complement your features and lifestyle.",
  howItWorks:
    "Our brow services include professional shaping using tweezers or wax, followed by tinting to define and enhance. For lashes, we offer LVL lamination that lifts and curls your natural lashes, plus optional botox treatment for added nourishment. Each service is tailored to your desired look, whether natural or dramatic.",
  whatToExpect: [
    'Perfectly shaped and defined brows.',
    'Long-lasting tint for fuller-looking brows.',
    'Lifted, curled lashes without extensions.',
    'Low-maintenance beauty that lasts weeks.',
    'Professional consultation for your ideal look.',
    'Safe, gentle treatments for sensitive eyes.',
  ],
  closingText:
    "Wake up with effortlessly beautiful brows and lashes — because your eyes deserve to shine.",
  mainImage: '/bowsone.jpeg',
  pricing: [
    { name: 'Brows shape (tweezers, wax)', price: '€15' },
    { name: 'Brows shape + tinting', price: '€20' },
    { name: 'Brows lamination', price: '€30' },
    { name: 'Brows lamination + botox', price: '€35' },
    { name: 'Brows lamination + botox shape, tinting', price: '€40' },
    { name: 'Lash lift (LVL lamination)', price: '€35' },
    { name: 'Lash lift + botox', price: '€40' },
    { name: 'Lash lift + botox, tinting', price: '€45' },
    { name: 'Lash tinting', price: '€15' },
    { name: 'Combo LVL Brows & Lash', price: '€80' },
    { name: 'Upper lip wax / tweezers', price: '€5' },
  ],
};

export const browsLashesGallery: readonly GalleryItem[] = [
   { type: 'video', src: '/lash/lash3video.mp4', poster: '/lash/lashthree.jpeg' },
  // { type: 'video', src: '/lashesbowes/two.mp4', poster: '/lashesbowes/one.jpeg' },
  { type: 'video', src: '/lash/lash1video.mp4', poster: '/lash/lashone.jpeg' },
  // { type: 'video', src: '/lash/lash2video.mp4', poster: '/lash/lasheight.jpeg' },
  // { type: 'video', src: '/lash/lash3video.mp4', poster: '/lash/lashthree.jpeg' },
  { type: 'image', src: '/lashesbowes/one.jpeg' },
  // { type: 'image', src: '/lash/lashone.jpeg' },
  // { type: 'image', src: '/lash/lasttwo.jpeg' },
  // { type: 'image', src: '/lash/lashthree.jpeg' },
  // { type: 'image', src: '/lash/lashfour.jpeg' },
  // { type: 'image', src: '/lash/lashfive.jpeg' },
  // { type: 'image', src: '/lash/lasheight.jpeg' },
] as const;

// MAKEUP data
export const makeupDetails: ServiceDetails = {
  category: 'MAKEUP',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Look stunning for any occasion with our professional makeup services.\n\nAt MK Nails & Beauty, our talented makeup artists create flawless looks tailored to your style and event. Whether you need a natural everyday glow, glamorous evening makeup, or a complete bridal transformation, we use premium products and expert techniques to enhance your natural beauty and boost your confidence.",
  howItWorks:
    "We start with a consultation to understand your desired look and the occasion. Our makeup artists then prepare your skin with quality primers and foundations matched to your skin tone. We carefully apply eye makeup, contouring, highlighting, and finishing touches to create a cohesive, long-lasting look that photographs beautifully and feels comfortable all day.",
  whatToExpect: [
    'Customized makeup for any occasion or event.',
    'Professional application using premium products.',
    'Flawless, long-lasting results.',
    'Skin-matched foundation and color coordination.',
    'Expert contouring and highlighting techniques.',
    'Bridal makeup packages available.',
    'Comfortable, breathable finish.',
  ],
  closingText:
    "Feel confident and beautiful — let our makeup artists bring out your best features for any special moment.",
  mainImage: '/makeup/75eb0e3c-87e3-456f-9e97-4283167a2f06.jpeg',
  pricing: [
    { name: 'Evening make up', price: '€90' },
    { name: 'Special Event Make up', price: '€90' },
    { name: 'Bridal make up', price: '€480' },
    { name: 'Bridal trial make up', price: '€155' },
    { name: 'Wedding guest make up', price: '€120' },
  ],
};

export const makeupGallery: readonly GalleryItem[] = [
  { type: 'image', src: '/makeup/75eb0e3c-87e3-456f-9e97-4283167a2f06.jpeg' },
  { type: 'image', src: '/makeup/910d08ea-a0b1-4d07-aed1-0a285a604bf7.jpeg' },
  { type: 'image', src: '/makeup/9ac263ae-5408-44bb-a381-870e78503129.jpeg' },
  { type: 'image', src: '/makeup/c6839767-1a07-4ee0-b9a7-1aa69b08906b.jpeg' },
  { type: 'image', src: '/makeup/dcc1f264-7d43-4006-be82-2c2c768216d5.jpeg' },
  { type: 'image', src: '/makeup/e6b0bd34-4b2e-46e3-9c6d-efc6c38a7ee6.jpeg' },
  { type: 'image', src: '/makeup/e6b0bd34-4b2e-46e3-9c6d-efc6c38a7ee6 (1).jpeg' },
] as const;

// PERMANENT MAKEUP data
export const permanentMakeupDetails: ServiceDetails = {
  category: 'PERMANENT MAKEUP',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Wake up with perfect brows, lips, and eyeliner every day.\n\nAt MK Nails & Beauty, our certified permanent makeup artists use advanced techniques and premium pigments to create natural-looking, long-lasting results. Whether you want perfectly shaped brows, defined lips, or subtle eyeliner, we customize each treatment to enhance your natural features and save you time on your daily makeup routine.",
  howItWorks:
    "Permanent makeup, also known as cosmetic tattooing or micropigmentation, involves depositing pigment into the dermal layer of the skin. We begin with a detailed consultation to design your desired look, select the perfect color match, and ensure you're comfortable with the process. Using sterile, single-use needles and premium pigments, we carefully apply the makeup with precision. A touch-up session is typically needed 4-6 weeks later for optimal results.",
  whatToExpect: [
    'Natural-looking, long-lasting results (1-3 years).',
    'Customized shape and color to suit your features.',
    'Minimal discomfort with numbing cream.',
    'Save time on daily makeup application.',
    'Waterproof and smudge-proof.',
    'Professional consultation and design.',
   
    'Strict hygiene and safety protocols.',
  ],
  closingText:
    "Invest in yourself with permanent makeup — wake up beautiful and confident every single day.",
  mainImage: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.38 AM.jpeg',
  pricing: [
    { name: 'Brows (Microblading)', price: '€150' },
    { name: 'Brows (Powder/Ombre)', price: '€150' },
    { name: 'Brows Touch-up (4-6 weeks)', price: '€50' },
    { name: 'Brows Annual Refresh', price: '€100' },
    { name: 'Lips (Full)', price: '€150' },
    { name: 'Lips Touch-up (4-6 weeks)', price: '€50' },
    { name: 'Lips Annual Refresh', price: '€100' },
    { name: 'Eyeliner (Upper)', price: '€120' },
    { name: 'Eyeliner (Lower)', price: '€100' },
    { name: 'Eyeliner Touch-up (4-6 weeks)', price: '€40' },
    { name: 'Eyeliner Annual Refresh', price: '€80' },
    { name: 'Removal/Correction (per session)', price: '€100' },
  ],
};

export const permanentMakeupGallery: readonly GalleryItem[] = [
  { type: 'video', src: '/permanent-makeup/WhatsApp Video 2025-11-11 at 1.26.03 AM.mp4', poster: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.27.28 AM.jpeg' },
  { type: 'video', src: '/permanent-makeup/WhatsApp Video 2025-11-11 at 1.26.14 AM.mp4', poster: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.38 AM.jpeg' },
  { type: 'video', src: '/permanent-makeup/WhatsApp Video 2025-11-11 at 1.26.22 AM.mp4', poster: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.59 AM.jpeg' },
  { type: 'video', src: '/permanent-makeup/WhatsApp Video 2025-11-11 at 1.27.16 AM.mp4', poster: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.30.13 AM.jpeg' },
  { type: 'video', src: '/permanent-makeup/WhatsApp Video 2025-11-11 at 1.28.47 AM.mp4', poster: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.31.11 AM.jpeg' },
  { type: 'image', src: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.27.28 AM.jpeg' },
  { type: 'image', src: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.38 AM.jpeg' },
  { type: 'image', src: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.59 AM.jpeg' },
  { type: 'image', src: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.30.13 AM.jpeg' },
  { type: 'image', src: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.31.11 AM.jpeg' },
] as const;

// BODY SLIM TREATMENT data
export const bodySlimDetails: ServiceDetails = {
  category: 'BODY SLIM TREATMENT',
  aboutTitle: 'Body and Face SphereSculpt treatments',
  aboutDescription:
    "Transform your body with our advanced body slimming treatments.\n\nAt MK Nails & Beauty, we offer cutting-edge body contouring and slimming treatments designed to help you achieve your desired shape. Using state-of-the-art technology and proven techniques, our treatments target stubborn fat, reduce cellulite, and tone your body for a more sculpted appearance.",
  howItWorks:
    "Our body slimming treatments use a combination of advanced technologies including radiofrequency, cavitation, and lymphatic drainage massage. These non-invasive procedures work by breaking down fat cells, improving circulation, and promoting natural detoxification. Each session is customized to target your specific problem areas and goals.",
  whatToExpect: [
    'Non-invasive body contouring and fat reduction.',
    'Visible results after multiple sessions.',
    'Cellulite reduction and skin tightening.',
    'Improved body shape and contours.',
    'Customized treatment plans for your goals.',
    'Safe, comfortable procedures with no downtime.',
    'Professional consultation and progress tracking.',
  ],
  closingText:
    "Achieve the body you've always wanted — let our advanced treatments help you look and feel your absolute best.",
  mainImage: '/body-slim/f706e63e-333f-4ed7-b53e-728e4c791e68.jpeg',
  pricing: [
    { name: 'SPHERESCULPT – GLUTES AND LEGS', price: '' },
    { name: 'Glutes and Legs (40 min)', price: '€45' },
    { name: 'Glutes and Legs (4 sessions)', price: '€150' },
    { name: 'Glutes and Legs (6 sessions)', price: '€250' },
    { name: 'Glutes and Legs (10 sessions)', price: '€400' },

    { name: 'SPHERESCULPT – ABDOMINAL', price: '' },
    { name: 'Abdominal "stomach" (30 min)', price: '€35' },
    { name: 'Abdominal (4 sessions)', price: '€120' },
    { name: 'Abdominal (6 sessions)', price: '€190' },
    { name: 'Abdominal (10 sessions)', price: '€320' },

    { name: 'SPHERESCULPT – ABD. + GLUTES & LEGS', price: '' },
    { name: 'Abd. "stomach", Glutes & Legs (60 min)', price: '€55' },
    { name: 'Abd. + Glutes & Legs (4 sess.)', price: '€190' },
    { name: 'Abd. + Glutes & Legs (6 sess.)', price: '€300' },
    { name: 'Abd. + Glutes & Legs (10 sess.)', price: '€500' },

    { name: 'SPHERESCULPT – UPPER UNDER ARMS', price: '' },
    { name: 'Upper under Arms (20 min)', price: '€25' },
    { name: 'Upper under Arms (4 sessions)', price: '€80' },
    { name: 'Upper under Arms (6 sessions)', price: '€130' },
    { name: 'Upper under Arms (10 sessions)', price: '€220' },

    { name: 'SPHERESCULPT – FACE AND NECK', price: '' },
    { name: 'Face and Neck (30 min)', price: '€35' },
    { name: 'Face and Neck (4 sessions)', price: '€120' },
    { name: 'Face and Neck (6 sessions)', price: '€190' },
    { name: 'Face and Neck (10 sessions)', price: '€320' },
  ],
};

export const bodySlimGallery: readonly GalleryItem[] = [
  { type: 'video', src: '/body-slim/WhatsApp Video 2025-11-11 at 12.59.06 AM.mp4', poster: '/body-slim/f706e63e-333f-4ed7-b53e-728e4c791e68.jpeg' },
  { type: 'video', src: '/body-slim/WhatsApp Video 2025-11-11 at 12.59.06 AM (1).mp4', poster: '/body-slim/WhatsApp Image 2025-11-11 at 12.59.06 AM.jpeg' },
  { type: 'video', src: '/body-slim/WhatsApp Video 2025-11-11 at 1.00.05 AM.mp4', poster: '/body-slim/WhatsApp Image 2025-11-11 at 1.04.44 AM.jpeg' },
  { type: 'image', src: '/body-slim/f706e63e-333f-4ed7-b53e-728e4c791e68.jpeg' },
  { type: 'image', src: '/body-slim/WhatsApp Image 2025-11-11 at 12.59.06 AM.jpeg' },
  { type: 'image', src: '/body-slim/WhatsApp Image 2025-11-11 at 12.59.27 AM.jpeg' },
  { type: 'image', src: '/body-slim/WhatsApp Image 2025-11-11 at 1.04.44 AM.jpeg' },
] as const;

// HAIR DRESSING data
export const hairDressingDetails: ServiceDetails = {
  category: 'HAIR DRESSING',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Transform your look with our professional hair dressing services.\n\nAt MK Nails & Beauty, our skilled hair stylists offer a full range of hair services from cuts and colors to styling and treatments. Whether you want a fresh new look, a special occasion style, or regular maintenance, we use premium products and the latest techniques to give you beautiful, healthy hair.",
  howItWorks:
    "We begin with a consultation to understand your hair goals and assess your hair type and condition. Our stylists then recommend the best approach, whether it's a precision cut, vibrant color, smoothing treatment, or elegant styling. We use professional-grade products and proven techniques to achieve stunning results while maintaining hair health.",
  whatToExpect: [
    'Expert cuts and styling for all hair types.',
    'Professional coloring and highlights.',
    'Hair treatments for health and shine.',
    'Special occasion styling and updos.',
    'Personalized consultation and recommendations.',
    'Premium products for lasting results.',
    'Comfortable, relaxing salon experience.',
  ],
  closingText:
    "Look and feel amazing with hair that turns heads — let our expert stylists create your perfect look.",
  mainImage: '/hairs-dessing/26f12c99-a456-41e9-b3fb-570373a6f52c.jpeg',
  pricing: [
    { name: 'Blow dry', price: '€15' },
    { name: 'Blow dry with steem', price: '€20' },
    { name: 'Wavy hair with tong', price: '€20' },
    { name: 'Botox (including blow dry)', price: '€45' },
    { name: 'Rood colour', price: '€30' },
    { name: 'Highlights', price: '€70 to €100' },
    { name: 'Half hair highlights', price: '€40' },
    { name: 'Hair cut', price: '€15' },
    { name: 'Hair keratin', price: '€150 to €200' },
    { name: 'Rood mtekapaz', price: '€60' },
    { name: 'Braids', price: 'from €30' },
    { name: 'Bridesmaids', price: '€30' },
    { name: 'Brides (with one rehearsal; hair extensions with order)', price: 'from €200' },
  ],
};

export const hairDressingGallery: readonly GalleryItem[] = [
  { type: 'image', src: '/hairs-dessing/26f12c99-a456-41e9-b3fb-570373a6f52c.jpeg' },
  { type: 'image', src: '/hairs-dessing/284f07f8-a119-47ca-85b8-2e1c4564774e.jpeg' },
  { type: 'image', src: '/hairs-dessing/3872f5ba-70c8-4e67-a93c-07d400f34bb0.jpeg' },
  { type: 'image', src: '/hairs-dessing/81515948-7229-4e91-8b2f-6abb95acf9ea.jpeg' },
  { type: 'image', src: '/hairs-dessing/9053c9d7-6163-4d17-a9e2-d9b5ceb0dc19.jpeg' },
  { type: 'image', src: '/hairs-dessing/d9df824a-4283-4644-ac8c-26029db90a28.jpeg' },
  { type: 'image', src: '/hairs-dessing/ec86b7f0-4c91-4964-8cd6-cedeb0fe3a48.jpeg' },
] as const;

// FACIALS data
export const facialsDetails: ServiceDetails = {
  category: 'FACIALS',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Revitalize your skin with our luxurious facial treatments.\n\nAt MK Nails & Beauty, our professional facial services are designed to cleanse, nourish, and rejuvenate your skin. Using premium products and advanced techniques, we customize each treatment to your skin type and concerns, helping you achieve a healthy, radiant complexion.",
  howItWorks:
    "Our facial treatments begin with a thorough skin analysis to determine your specific needs. We then cleanse, exfoliate, and extract impurities, followed by a relaxing facial massage to improve circulation. A customized mask is applied to target your skin concerns, and we finish with serums and moisturizers to protect and hydrate your skin.",
  whatToExpect: [
    'Deep cleansing and exfoliation for refreshed skin.',
    'Customized treatment for your skin type and concerns.',
    'Relaxing facial massage to improve circulation.',
    'Extraction of impurities and blackheads.',
    'Hydrating masks and serums for glowing skin.',
    'Professional skincare advice and recommendations.',
    'Immediate visible results with long-lasting benefits.',
  ],
  closingText:
    "Treat your skin to the care it deserves — experience the glow of healthy, beautiful skin with our expert facial treatments.",
  mainImage: '/facical/10c6fefc-2b28-4e27-a4a7-7a26c2be86ae.jpeg',
  pricing: [
    { name: 'Classic Facial', price: '€45' },
    { name: 'Deep Cleansing Facial', price: '€55' },
    { name: 'Anti-Aging Facial', price: '€65' },
    { name: 'Hydrating Facial', price: '€50' },
    { name: 'Brightening Facial', price: '€60' },
    { name: 'Acne Treatment Facial', price: '€55' },
    { name: 'Express Facial (30 min)', price: '€35' },
    { name: 'Luxury Facial (90 min)', price: '€85' },
  ],
};

export const facialsGallery: readonly GalleryItem[] = [
  { type: 'image', src: '/facical/1.jpeg' },
  { type: 'image', src: '/facical/2.jpeg' },
  { type: 'image', src: '/facical/3.jpeg' },
  { type: 'image', src: '/facical/4.jpeg' },
  { type: 'image', src: '/facical/5.jpeg' },
  { type: 'image', src: '/facical/6.jpeg' },
  { type: 'image', src: '/facical/7.jpeg' },
  { type: 'image', src: '/facical/8.jpeg' },
  { type: 'image', src: '/facical/9.jpeg' },
] as const;

// AESTHETICS data
export const aestheticsDetails: ServiceDetails = {
  category: 'AESTHETICS',
  aboutTitle: 'About this Services',
  aboutDescription:
    "Transform your appearance with our advanced aesthetic treatments.\n\nAt MK Nails & Beauty, we offer cutting-edge aesthetic services designed to enhance your natural beauty and boost your confidence. Our experienced practitioners use the latest techniques and premium products to deliver safe, effective results tailored to your unique needs.",
  howItWorks:
    "Our aesthetic treatments combine advanced technology with expert technique to address various concerns including skin rejuvenation, anti-aging, and facial enhancement. Each treatment begins with a thorough consultation to understand your goals and create a personalized treatment plan. We use medical-grade products and follow strict safety protocols to ensure optimal results.",
  whatToExpect: [
    'Professional consultation and personalized treatment plans.',
    'Advanced aesthetic procedures for facial enhancement.',
    'Safe, effective treatments with minimal downtime.',
    'Natural-looking results that enhance your features.',
    'Expert care from certified practitioners.',
    'Follow-up support and aftercare guidance.',
  ],
  closingText:
    "Discover the confidence that comes with looking and feeling your best — let our aesthetic experts help you achieve your beauty goals.",
  mainImage: '/facical/10c6fefc-2b28-4e27-a4a7-7a26c2be86ae.jpeg',
  pricing: [
    { name: 'Consultation', price: 'Free' },
    { name: 'Anti-Wrinkle Treatment', price: '€150' },
    { name: 'Dermal Fillers', price: '€200' },
    { name: 'Skin Rejuvenation', price: '€120' },
    { name: 'Chemical Peel', price: '€100' },
    { name: 'Microneedling', price: '€150' },
  ],
};

export const aestheticsGallery: readonly GalleryItem[] = [
  { type: 'image', src: '/asthetic/as1.jpeg' },
  { type: 'image', src: '/asthetic/as2.jpeg' },
  { type: 'image', src: '/asthetic/as3.jpeg' },
  { type: 'image', src: '/asthetic/as4.jpeg' },
  { type: 'image', src: '/asthetic/as5.jpeg' },
  { type: 'image', src: '/asthetic/as7.jpeg' },
  { type: 'image', src: '/asthetic/as8.jpeg' },
  { type: 'image', src: '/asthetic/as10.jpeg' },
  { type: 'image', src: '/asthetic/as11.jpeg' },
  { type: 'image', src: '/asthetic/as12.jpeg' },
] as const;
