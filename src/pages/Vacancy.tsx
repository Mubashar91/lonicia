// Vacancy.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ROLES = [
  'nail technician',
  'eyelash technician',
  'cosmetologist',
  'aesthetic injector',
  'brows technician',
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Vacancy = () => {
  const query = useQuery();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    role: ROLES[0],
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  // EmailJS credentials (CDN-loaded in index.html)
  const serviceID = 'service_c3a4xht';
  const templateID = 'template_6t3u09j';
  const publicKey = 'y8BtyZbzcChbe3tu8';

  useEffect(() => {
    const roleQ = query.get('role');
    if (roleQ) {
      const match = ROLES.find(r => r.toLowerCase() === roleQ.toLowerCase());
      if (match) setFormData(f => ({ ...f, role: match }));
    }
  }, [query]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // @ts-ignore - window.emailjs provided by CDN
      await window.emailjs.sendForm(serviceID, templateID, formRef.current as HTMLFormElement, publicKey);
      alert('Application sent successfully.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', address: '', role: ROLES[0], message: '' });
      formRef.current?.reset();
    } catch {
      alert('Could not send application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="pt-8 md:pt-0 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 gap-10 items-start justify-items-center">
              <div className="w-full max-w-2xl text-center">
                <h2 className="text-white font-poppins font-bold text-[28px] md:text-[32px] mb-2">
                  Apply for a Vacancy
                </h2>
                <p className="text-gray-400 font-poppins text-[14px] md:text-[16px] mb-8 leading-relaxed">
                  Fill the form below. We will get back to you shortly.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
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

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Address"
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                  />

                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent appearance-none cursor-pointer transition"
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
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

                  <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`.trim()} />
                  <input type="hidden" name="from_email" value={formData.email} />
                  <input type="hidden" name="reply_to" value={formData.email} />
                  <input type="hidden" name="to_email" value="mk.nails.n.beauty@gmail.com" />
                  {/* Aliases for broader template compatibility */}
                  <input type="hidden" name="name" value={`${formData.firstName} ${formData.lastName}`.trim()} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="user_name" value={`${formData.firstName} ${formData.lastName}`.trim()} />
                  <input type="hidden" name="user_email" value={formData.email} />
                  <input type="hidden" name="phone_number" value={formData.phone} />
                  <input type="hidden" name="user_phone" value={formData.phone} />
                  <input type="hidden" name="user_address" value={formData.address} />
                  <input type="hidden" name="user_role" value={formData.role} />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#D4AF37] text-black py-3 md:py-4 rounded-lg font-poppins font-bold text-sm md:text-base uppercase tracking-wide md:tracking-wider hover:bg-[#c8a231] transition disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Send Application'}
                  </button>
                </form>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacancy;