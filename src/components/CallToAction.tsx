const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-primary-dark text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Look Your Best?</h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Book your appointment today and experience the MK difference
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary-gold text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
