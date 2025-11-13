import { ServiceDetails } from '../data/services';

type Props = { details: ServiceDetails };

export default function ServiceInfoPreview({ details }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {/* Title */}
      <h1 className="text-[#D4AF37] font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
        {details.category}
      </h1>

      {/* Subtitle */}
      <h2 className="text-[#D4AF37] font-poppins font-semibold text-2xl md:text-3xl mb-6 md:mb-8">
        {details.aboutTitle}
      </h2>

      {/* Introduction */}
      <p className="text-[#E8D5C4] font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-justify mb-4 md:mb-6 whitespace-pre-line">
        {details.aboutDescription}
      </p>

      {/* How It Works Section */}
      <h3 className="text-[#D4AF37] font-poppins font-semibold text-lg md:text-xl mb-3 md:mb-4">
        How It Works:
      </h3>

      <p className="text-[#E8D5C4] font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-justify mb-4 md:mb-6">
        {details.howItWorks}
      </p>

      {/* What to Expect Section */}
      <h3 className="text-[#D4AF37] font-poppins font-semibold text-lg md:text-xl mb-3 md:mb-4">
        What to Expect:
      </h3>

      <ul className="text-[#E8D5C4] font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 mb-4 md:mb-6 space-y-2">
        {details.whatToExpect.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Closing Statement */}
      <p className="text-[#E8D5C4] font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-justify mb-6 md:mb-8">
        {details.closingText}
      </p>

      {/* Pricing Section */}
      {details.pricing && details.pricing.length > 0 && (
        <div className="mt-10 md:mt-16">
          {/* Pricing Header */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[#D4AF37] font-poppins text-xs md:text-sm uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h3 className="text-[#D4AF37] font-poppins font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
              Pricing
            </h3>
          </div>

          {/* Pricing Card */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#D4AF37] rounded-2xl p-6 md:p-10 shadow-2xl">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-2xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D4AF37] rounded-br-2xl opacity-50"></div>
            
            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {details.pricing.map((item, idx) => {
                const isSubtitle = item.price === '';
                if (isSubtitle) {
                  return (
                    <div key={idx} className="md:col-span-2">
                      <div className="text-center text-[#D4AF37] font-poppins font-bold text-xl md:text-2xl uppercase tracking-wide py-2">
                        {item.name}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={idx}
                    className="group relative bg-black/40 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-3 md:p-3.5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex-1">
                        <p className="text-white font-poppins text-sm md:text-base font-medium leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                          {item.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#D4AF37]/50 hidden md:block"></div>
                        <p className="text-[#D4AF37] font-poppins text-base md:text-lg font-bold whitespace-nowrap">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 text-center">
              <p className="text-[#E8D5C4]/70 font-poppins text-xs md:text-sm italic">
                All prices are subject to consultation. Contact us for personalized packages.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
