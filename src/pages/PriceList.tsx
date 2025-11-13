import { useEffect } from "react";

const PriceList = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0s';
            el.style.transitionDelay = delay;
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
 const pricingData = [
  // Manicure
  {
    category: 'MANICURE',
    subtitle: '',
    services: [
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
  },
  // Pedicure
  {
    category: 'PEDICURE',
    subtitle: '',
    services: [
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
  },
  // Lash Extensions
  {
    category: ' LASH EXTENSIONS',
    subtitle: '',
    services: [
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
  },
  // Brows / Lashes
  {
    category: 'BROWS / LASHES',
    subtitle: '',
    services: [
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
  },
  // Make Up
  {
    category: 'MAKE UP',
    subtitle: '',
    services: [
      { name: 'Evening make up', price: '€90' },
      { name: 'Special Event Make up', price: '€90' },
      { name: 'Bridal make up', price: '€480' },
      { name: 'Bridal trial make up', price: '€155' },
      { name: 'Wedding guest make up', price: '€120' },
    ],
  },
  // Hair Dressing
  {
    category: 'HAIR DRESSING',
    subtitle: '',
    services: [
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
  },
  // Facials
  {
    category: 'FACIALS',
    subtitle: '',
    services: [
      { name: 'Deep Cleansing Facial (1 and half hour)', price: '€65' },
      { name: 'Gentle Facial Cleansing (atraumatic)', price: '€50' },
      { name: 'PhotoDefense Glow Treatment (Hydrating, antioxidant facial - perfect after sun exposure)', price: '€60' },
      { name: 'Anti-Age Therapy (with Vitamin C) — Powerful antioxidant & collagen boost', price: '€70' },

      { name: 'AHA Peeling Facial (with mask & post-care) — Brighten, exfoliate & renew your skin', price: '' },
      { name: 'Single session', price: '€50' },
      { name: 'Course of 5 sessions (Pay for 4, get 1 FREE)', price: '€200' },

      { name: 'Facial Massage Course (30 min per session)', price: '' },
      { name: 'Single session', price: '€35' },
      { name: '5-session course (Pay for 4, get 1 FREE)', price: '€140' },

      { name: 'At-Home Facial Treatment — Professional skincare in the comfort of your home', price: '€75' },
      { name: 'At-Home FaceDrip Cleansing — Deep cleansing with premium products at home', price: '€75' },
    ],
  },
  // Permanent Makeup (Brows, Lips, Eyeliner)
  {
    category: 'PERMANENT MAKEUP',
    subtitle: 'BROWS',
    services: [
      { name: 'Brows', price: '€150' },
      { name: 'Brows correction (4-6 weeks)', price: '€50' },
      { name: 'Brows correction (7-8 weeks)', price: '€60' },
      { name: 'Brows refresh (12-18 months)', price: '€120' },
      { name: 'Colour correction', price: '€60' },
    ],
  },
  {
    category: 'PERMANENT MAKEUP',
    subtitle: 'LIPS',
    services: [
      { name: 'Lips', price: '€150' },
      { name: 'Lips correction (4-6 weeks)', price: '€50' },
      { name: 'Lips correction (7-8 weeks)', price: '€60' },
      { name: 'Lips refresh (12-18 months)', price: '€120' },
      { name: 'Colour correction', price: '€60' },
    ],
  },
  {
    category: 'PERMANENT MAKEUP',
    subtitle: 'EYELINER',
    services: [
      { name: 'Eyeliner', price: '€120' },
      { name: 'Eyeliner correction (4-6 weeks)', price: '€40' },
      { name: 'Eyeliner correction (7-8 weeks)', price: '€50' },
      { name: 'Eyeliner refresh (12-18 months)', price: '€100' },
    ],
  },
  // Laser Hair Removal (Men, Women)
  {
    category: 'LASER HAIR REMOVAL',
    subtitle: "MEN",
    services: [
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
      { name: '5 (4 Full Body visits)', price: '€500' },
    ],
  },
  {
    category: 'LASER HAIR REMOVAL',
    subtitle: "WOMEN",
    services: [
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
    ],
  },
  // Body & Face Treatments (all variants)
  {
    category: 'BODY & FACE TREATMENTS',
    subtitle: 'SPHERESCULPT – GLUTES AND LEGS',
    services: [
      { name: 'Glutes and Legs (40 min)', price: '€45' },
      { name: 'Glutes and Legs (4 sessions)', price: '€150' },
      { name: 'Glutes and Legs (6 sessions)', price: '€250' },
      { name: 'Glutes and Legs (10 sessions)', price: '€400' },
    ],
  },
  {
    category: 'BODY & FACE TREATMENTS',
    subtitle: 'SPHERESCULPT – ABDOMINAL',
    services: [
      { name: 'Abdominal "stomach" (30 min)', price: '€35' },
      { name: 'Abdominal (4 sessions)', price: '€120' },
      { name: 'Abdominal (6 sessions)', price: '€190' },
      { name: 'Abdominal (10 sessions)', price: '€320' },
    ],
  },
  {
    category: 'BODY & FACE TREATMENTS',
    subtitle: 'SPHERESCULPT – ABD. + GLUTES & LEGS',
    services: [
      { name: 'Abd. "stomach", Glutes & Legs (60 min)', price: '€55' },
      { name: 'Abd. + Glutes & Legs (4 sess.)', price: '€190' },
      { name: 'Abd. + Glutes & Legs (6 sess.)', price: '€300' },
      { name: 'Abd. + Glutes & Legs (10 sess.)', price: '€500' },
    ],
  },
  {
    category: 'BODY & FACE TREATMENTS',
    subtitle: 'SPHERESCULPT – UPPER UNDER ARMS',
    services: [
      { name: 'Upper under Arms (20 min)', price: '€25' },
      { name: 'Upper under Arms (4 sessions)', price: '€80' },
      { name: 'Upper under Arms (6 sessions)', price: '€130' },
      { name: 'Upper under Arms (10 sessions)', price: '€220' },
    ],
  },
  {
    category: 'BODY & FACE TREATMENTS',
    subtitle: 'SPHERESCULPT – FACE AND NECK',
    services: [
      { name: 'Face and Neck (30 min)', price: '€35' },
      { name: 'Face and Neck (4 sessions)', price: '€120' },
      { name: 'Face and Neck (6 sessions)', price: '€190' },
      { name: 'Face and Neck (10 sessions)', price: '€320' },
    ],
  },
];


  return (
    <div className="min-h-screen bg-black">
      {/* Price List Label */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
          <p data-reveal data-delay="0s" className="text-primary-gold font-poppins text-[12px] md:text-[14px] uppercase tracking-wide mb-4">
            PRICE LIST
          </p>
        </div>
      </section>

      {/* Hero Heading */}
      <section className="pb-8 md:pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center max-w-6xl">
          <h1 data-reveal data-delay=".06s" className="text-primary-gold font-poppins text-[24px] md:text-[40px] lg:text-[56px] font-normal leading-tight uppercase">
            <span className="hidden md:inline">YOUR BEAUTY JOURNEY BEGINS HERE — </span>CHOOSE YOUR PERFECT SERVICE
          </h1>
        </div>
      </section>

      {/* Price Tables */}
      <section className="pb-12 md:pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {pricingData.map((category, index) => (
              <div
                key={index}
                data-reveal
                data-delay={`${(((index % 2) * 0.08) + (Math.floor(index / 2) * 0.18)).toFixed(2)}s`}
                className="bg-transparent border-2 border-primary-gold rounded-lg p-5 md:p-8"
              >
                {/* Category Header */}
                <h2 className="text-primary-gold font-poppins text-[18px] md:text-[24px] font-bold mb-1 md:mb-2 uppercase tracking-wide">
                  {category.category}
                </h2>
                <p className="text-primary-gold font-poppins text-[11px] md:text-[14px] mb-4 md:mb-6 uppercase tracking-wider opacity-80">
                  {category.subtitle}
                </p>
                
                {/* Services List */}
                <div className="space-y-2 md:space-y-3">
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      data-reveal
                      data-delay={`${(0.06 + idx * 0.04).toFixed(2)}s`}
                      className="flex justify-between items-start gap-3 md:gap-4 pb-2 border-b border-primary-gold/10"
                    >
                      <p className="text-white font-poppins text-[12px] md:text-[14px] flex-1 leading-relaxed">
                        {service.name}
                      </p>
                      <p className="text-white font-poppins text-[12px] md:text-[14px] font-semibold whitespace-nowrap">
                        {service.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;