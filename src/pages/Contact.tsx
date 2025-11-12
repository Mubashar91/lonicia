// Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  // EmailJS credentials (CDN-loaded in index.html)
  const serviceID = 'service_c3a4xht';
  const templateID = 'template_6t3u09j';
  const publicKey = 'y8BtyZbzcChbe3tu8';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const templateParams = {
      // Required by your template
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      option: formData.service,
      message: formData.message,
      // Delivery helpers
      reply_to: formData.email,
      to_email: 'mk.nails.n.beauty@gmail.com',
      // Optional extras (kept if you add them later in the template)
      phone: formData.phone,
    };

    try {
      // @ts-ignore - window.emailjs provided by CDN
      await window.emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("✅ Thank you! Your message has been sent successfully.");
      setFormData({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Could not send your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? 'https://api.whatsapp.com/send?phone=35799958821'
      : 'https://web.whatsapp.com/send?phone=35799958821';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="hidden md:block pt-16 pb-8 md:pb-12">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-6xl">
          <h1 className="text-white font-poppins font-extrabold text-[64px] md:text-[72px] lg:text-[81.85px] leading-[100%] tracking-[-3%] mb-2">
            Get in <span className="text-[#D4AF37]">touch</span>
          </h1>
          <p className="text-white font-poppins font-medium text-[20px] md:text-[22px] leading-[100%] tracking-[-2%] mx-auto mb-0 mt-3">
            We’d love to hear from you — book your appointment, ask a question, or simply say hello!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-8 md:pt-0 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Form */}
              <div className="text-center lg:col-span-1">
                <h2 className="text-white font-poppins font-bold text-[28px] md:text-[32px] mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-400 font-poppins text-[14px] md:text-[16px] mb-8 leading-relaxed">
                  We'd love to hear from you — book your appointment, ask a question, or simply say hello!
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                    />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                  />

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent appearance-none cursor-pointer transition"
                    >
                      <option value="" disabled>Select the Service</option>
                      <option value="manicure">Manicure</option>
                      <option value="pedicure">Pedicure</option>
                      <option value="laser-hair-removal">Laser Hair Removal</option>
                      <option value="permanent-makeup">Permanent Makeup</option>
                      <option value="lash-extensions">Lash Extensions</option>
                      <option value="brows-lashes">Brows/Lashes Lamination</option>
                      <option value="facials">Facials</option>
                      <option value="body-treatments">Body Slim Treatments</option>
                      <option value="hairdressing">Hairdressing</option>
                      <option value="makeup">Makeup</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none transition"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#D4AF37] text-black py-3 md:py-4 rounded-lg font-poppins font-bold text-sm md:text-base uppercase tracking-wide md:tracking-wider hover:bg-[#c8a231] transition"
                  >
                    {submitting ? "Sending..." : "Submit"}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full bg-[#D4AF37] text-black py-3 md:py-4 rounded-lg font-poppins font-bold text-sm md:text-base uppercase tracking-wide md:tracking-wider hover:bg-[#c8a231] transition flex items-center justify-center gap-2"
                  >
                    Contact us
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.822 0 00-3.48-8.413Z"/>
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:flex justify-center">
                <div className="w-[400px] h-[770px] rounded-2xl overflow-hidden">
                  <img
                    src="/contact.jpg"
                    alt="MK Nails & Beauty Salon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;