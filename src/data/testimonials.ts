export type Testimonial = {
  id: number;
  name: string;
  rating: number;
  testimonial: string;
  image?: string;
  meta?: string;
  services?: string[];
  title?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Hadjiyiakoumi',
    rating: 5,
    meta: '11 months ago',
    testimonial:
      'Amazing Experience! Highly Recommended!\n\nI recently visited this brand-new salon for nail services, brow lamination, and lash lamination, and I am absolutely in love with the results! The atmosphere is chic, welcoming, and very clean. The staff is incredibly professional and friendly, explaining each service so you feel comfortable. My brows have never looked so full and defined, and my lashes have the perfect curl. Nail services were equally amazing. I’ll definitely be returning and recommending this salon.',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Andreou Savvas',
    rating: 5,
    meta: '6 months ago',
    testimonial:
      '5 Stars – Fantastic Experience!\n\nI had laser hair removal at MK Nails & Beauty in Larnaca, and the results were amazing! Professional, clean, and comfortable experience. Their manicure and pedicure services are flawless. Maria, the owner, is warm and welcoming. Highly recommend to anyone in Larnaca looking for quality treatments.',
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Maria Andreou',
    rating: 5,
    meta: '6 months ago',
    testimonial:
      '5 Stars – The Best Beauty Salon in Larnaca!\n\nI had my permanent eyebrows done by Maria and I’m in love with the results! Skilled, precise, and made me feel completely comfortable. The salon is spotless, 100% clean, and all materials are single-use. Professional, hygienic, and welcoming atmosphere. Highly recommended!',
    image: '/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Anna Lazova',
    rating: 5,
    meta: '6 months ago',
    testimonial:
      'I’m so happy I found this new salon in Larnaca — it feels like my go-to place for self-care. Been doing face and body treatments with Maria — she’s incredible, super professional, and the results are amazing.',
    image: '/placeholder.jpg',
  },
  {
    id: 8,
    name: 'Gloria D.',
    rating: 5,
    meta: '1 month ago',
    testimonial:
      'Got both my nails and pedicure done — they’re amazing! Clean, professional, and fast. 100% would recommend and will be back every time I’m in Cyprus.',
    image: '/placeholder.jpg',
  },
  {
    id: 9,
    name: 'Anastasia Lashkul',
    rating: 5,
    meta: '6 months ago',
    testimonial:
      'This place is fascinating! Excellent customer service, clean environment, and super nice staff. Came for a pedicure and was very happy with the results.',
    image: '/placeholder.jpg',
  },
  {
    id: 10,
    name: 'Despina Andreadaki',
    rating: 5,
    meta: '2 months ago',
    testimonial:
      'I’ve had different beauty treatments here and always leave happy. All the ladies are friendly, professional, and make me feel welcome every time.',
    image: '/placeholder.jpg',
  },
  {
    id: 12,
    name: 'Marie Gunkin',
    rating: 5,
    meta: '4 months ago',
    testimonial:
      'Best salon! Great service, very professional and warm staff. I recommend 100%.',
    image: '/placeholder.jpg',
  },
  {
    id: 13,
    name: 'Lily-ane Kamudyariwa',
    rating: 5,
    meta: '11 months ago',
    testimonial:
      'Beautiful place, great atmosphere. Loved how welcoming everyone was. Loved my nails and will definitely come again.',
    image: '/placeholder.jpg',
  },
  {
    id: 14,
    name: 'Zoe Martin',
    rating: 5,
    meta: '5 months ago',
    testimonial:
      'Friendly, warm, and professional; an exceptional salon. Staff are lovely and Maria (the owner) has high standards. Felt welcomed and valued as a customer.',
    image: '/placeholder.jpg',
  },
  {
    id: 15,
    name: 'John Kotes',
    rating: 5,
    meta: '2 months ago',
    testimonial:
      'First time here, greeted warmly and made to feel comfortable. The salon is very clean and fresh. Great pedicure experience, and excellent hygiene standards.',
    image: '/placeholder.jpg',
  },
];
