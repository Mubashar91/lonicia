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
      <p className="text-[#E8D5C4] font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-justify">
        {details.closingText}
      </p>
    </div>
  );
}
