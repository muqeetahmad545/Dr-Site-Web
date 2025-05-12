import React from 'react';

const Contact = () => {
  return (
    <div
      className="p-8"
      style={{
        backgroundImage: "url('/assets/bg-img-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {/* Contact Title */}
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Have Any Question? Please Contact Us</h1>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full mb-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 w-full mb-4 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Find Us Here</h2>
        <div className="relative w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317869.5297477346!2d-74.25819071727338!3d40.705625267953876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27cadd7a6f%3A0x1066878a15d61699!2sNew%20York%20City%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1636623926367!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
