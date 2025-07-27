import { Link } from 'react-router-dom';

const services = [
    {
        title: 'FedRAMP Assessment',
        description: 'Comprehensive FedRAMP readiness and assessment services',
        icon: 'fas fa-shield-alt',
        link: '/services#fedramp'
    },
    {
        title: 'CMMC Compliance',
        description: 'CMMC level 1-3 assessments and gap analysis',
        icon: 'fas fa-lock',
        link: '/services#cmmc'
    },
    {
        title: 'ISO Certification',
        description: 'ISO 27001 certification and implementation',
        icon: 'fas fa-certificate',
        link: '/services#iso'
    }
];

const testimonials = [
    {
        quote: "Their team's expertise in FedRAMP assessments helped us achieve compliance in record time.",
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'CloudTech Solutions'
    },
    {
        quote: "The most thorough and professional assessment team we've worked with. Highly recommended.",
        author: 'Michael Chen',
        role: 'Security Director',
        company: 'DataSecure Inc.'
    }
];

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#1B263B] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl font-bold mb-6">
                            Your Trusted Partner in Compliance
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Expert compliance assessments and certifications for government contractors and cloud service providers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary">
                                Get Started
                            </Link>
                            <Link to="/services" className="btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">What We Do</h2>
                        <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                            Comprehensive compliance solutions tailored to your needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.title} className="card text-center">
                                <div className="text-4xl text-[#FF6E40] mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">{service.title}</h3>
                                <p className="text-[#6E7E91] mb-4">{service.description}</p>
                                <Link to={service.link} className="btn-secondary inline-block">
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">Why Choose Us</h2>
                        <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                            Trusted by government contractors and cloud service providers
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">ISO Certified Assessors</h3>
                            <p className="text-[#6E7E91]">
                                Our team consists of certified assessors with extensive experience in compliance frameworks.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Government Clearances</h3>
                            <p className="text-[#6E7E91]">
                                Our assessors hold government security clearances for handling sensitive information.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Streamlined Process</h3>
                            <p className="text-[#6E7E91]">
                                Efficient assessment process with clear communication and timely deliverables.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standards & Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">Standards & Certifications</h2>
                        <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                            We help you achieve and maintain compliance with key industry standards
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'FedRAMP', image: '/certifications/fedramp.png' },
                            { name: 'ISO 27001', image: '/certifications/iso.png' },
                            { name: 'CMMC', image: '/certifications/cmmc.png' },
                            { name: 'A2LA', image: '/certifications/a2la.png' }
                        ].map((cert) => (
                            <div key={cert.name} className="card flex items-center justify-center p-8">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="max-h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">What Our Clients Say</h2>
                        <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                            Trusted by leading organizations in government contracting and cloud services
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card">
                                <div className="text-4xl text-[#FF6E40] mb-4">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p className="text-lg text-[#6E7E91] mb-6">{testimonial.quote}</p>
                                <div>
                                    <p className="font-semibold text-[#1B263B]">{testimonial.author}</p>
                                    <p className="text-[#6E7E91]">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Secondary CTA */}
            <section className="py-20 bg-[#1B263B] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Schedule a consultation with our team to discuss your compliance needs
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home; 