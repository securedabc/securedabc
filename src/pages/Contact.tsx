import { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
    subscribe: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "FedRAMP Assessment",
    "CMMC Compliance",
    "ISO 27001 Certification",
    "Penetration Testing",
    "Digital Accessibility",
    "Privacy Compliance",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;


    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          service: formData.service,
          message: formData.message,
          subscribe: formData.subscribe ? "Yes" : "No",
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B263B]">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[#6E7E91] max-w-2xl mx-auto">
            Get in touch with our team to discuss your compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lead Capture Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#FF6E40] mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#1B263B]">
                  Thank You!
                </h2>
                <p className="text-base md:text-lg text-[#6E7E91] mb-6">
                  We've received your inquiry and will reply within 1 business
                  day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-[#1B263B] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6 text-[#1B263B]">
                  Send us a Message
                </h2>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1B263B] mb-2"
                  >
                    Name <span className="text-[#FF6E40]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF6E40] focus:ring-1 focus:ring-[#FF6E40] outline-none transition-colors"
                    aria-label="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1B263B] mb-2"
                  >
                    Email <span className="text-[#FF6E40]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF6E40] focus:ring-1 focus:ring-[#FF6E40] outline-none transition-colors"
                    aria-label="Your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-[#1B263B] mb-2"
                  >
                    Organization <span className="text-[#FF6E40]">*</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF6E40] focus:ring-1 focus:ring-[#FF6E40] outline-none transition-colors"
                    aria-label="Your organization name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#1B263B] mb-2"
                  >
                    Service of Interest{" "}
                    <span className="text-[#FF6E40]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF6E40] focus:ring-1 focus:ring-[#FF6E40] outline-none transition-colors bg-white"
                    aria-label="Select a service"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1B263B] mb-2"
                  >
                    Message <span className="text-[#FF6E40]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF6E40] focus:ring-1 focus:ring-[#FF6E40] outline-none transition-colors"
                    aria-label="Your message"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#FF6E40] focus:ring-[#FF6E40] border-gray-300 rounded"
                    aria-label="Subscribe to compliance updates"
                  />
                  <label
                    htmlFor="subscribe"
                    className="ml-2 block text-sm text-[#6E7E91]"
                  >
                    Subscribe to compliance updates
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#1B263B] text-white text-base font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                  aria-label="Send inquiry"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Alternate Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#1B263B]">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#FF6E40]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#FF6E40]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-[#1B263B]">
                      Office Address
                    </h3>
                    <p className="text-base text-[#6E7E91] mt-1">
                      1234 Security Street
                      <br />
                      Suite 500
                      <br />
                      Washington, DC 20001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#FF6E40]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#FF6E40]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-[#1B263B]">
                      Phone
                    </h3>
                    <p className="text-base text-[#6E7E91] mt-1">
                      (202) 555-0123
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-[#FF6E40]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#FF6E40]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-[#1B263B]">
                      Email
                    </h3>
                    <a
                      href="mailto:info@3pao.com"
                      className="text-base text-[#FF6E40] hover:underline"
                    >
                      info@3pao.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#1B263B] text-white p-4">
                <h2 className="text-xl font-semibold">Our Location</h2>
              </div>
              <div className="h-full">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24836.64727226703!2d-77.05646933548654!3d38.91069802329007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b80288c28f3d%3A0x851f8ad0ff54eae2!2sWashington%2C%20DC%2020001%2C%20USA!5e0!3m2!1sen!2sin!4v1753696612577!5m2!1sen!2sin"
                  width="600"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
