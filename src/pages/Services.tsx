import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceModule {
    title: string;
    description: string;
    icon: string;
    services: {
        name: string;
        description: string;
    }[];
}

interface FAQ {
    question: string;
    answer: string;
}

const serviceModules: ServiceModule[] = [
    {
        title: 'Compliance',
        description: 'Comprehensive compliance assessments and certifications',
        icon: 'fas fa-shield-alt',
        services: [
            {
                name: 'FedRAMP Assessment',
                description: 'Full FedRAMP readiness and assessment services'
            },
            {
                name: 'CMMC Compliance',
                description: 'CMMC level 1-3 assessments and gap analysis'
            },
            {
                name: 'ISO 27001',
                description: 'ISO 27001 certification and implementation'
            }
        ]
    },
    {
        title: 'Digital Accessibility',
        description: 'WCAG 2.1 compliance and accessibility testing',
        icon: 'fas fa-universal-access',
        services: [
            {
                name: 'WCAG 2.1 Testing',
                description: 'Comprehensive accessibility testing and remediation'
            },
            {
                name: 'VPAT Creation',
                description: 'Voluntary Product Accessibility Template development'
            },
            {
                name: 'Accessibility Training',
                description: 'Staff training and implementation guidance'
            }
        ]
    },
    {
        title: 'Privacy',
        description: 'Privacy compliance and data protection services',
        icon: 'fas fa-user-shield',
        services: [
            {
                name: 'GDPR Compliance',
                description: 'GDPR readiness and implementation'
            },
            {
                name: 'CCPA Compliance',
                description: 'California Consumer Privacy Act compliance'
            },
            {
                name: 'Privacy Impact Assessment',
                description: 'Comprehensive privacy risk assessment'
            }
        ]
    }
];

const faqs: FAQ[] = [
    {
        question: 'How long does a typical assessment take?',
        answer: 'Assessment timelines vary based on scope and complexity. A standard FedRAMP assessment typically takes 3-4 months, while CMMC assessments can be completed in 2-3 months.'
    },
    {
        question: 'What are your assessment costs?',
        answer: 'Costs are determined by the scope of work, system complexity, and compliance requirements. We provide detailed quotes after an initial consultation.'
    },
    {
        question: 'What deliverables can I expect?',
        answer: "You'll receive comprehensive assessment reports, gap analysis, remediation plans, and certification documentation. All deliverables are detailed in our engagement agreement."
    }
];

const Services = () => {
    const [expandedModule, setExpandedModule] = useState<string | null>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Intro */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl font-bold mb-4 text-[#1B263B]">Our Services</h1>
                    <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                        Comprehensive compliance and security assessment services tailored to your needs
                    </p>
                </div>

                {/* Methodology Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1B263B]">Our Methodology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-clipboard-list"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Plan</h3>
                            <p className="text-[#6E7E91]">Initial assessment and scope definition</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Assess</h3>
                            <p className="text-[#6E7E91]">Comprehensive evaluation and testing</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Report</h3>
                            <p className="text-[#6E7E91]">Detailed findings and recommendations</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl text-[#FF6E40] mb-4">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">Remediate</h3>
                            <p className="text-[#6E7E91]">Implementation support and guidance</p>
                        </div>
                    </div>
                </div>

                {/* Service Modules */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1B263B]">Service Modules</h2>
                    <div className="space-y-4">
                        {serviceModules.map((module) => (
                            <div key={module.title} className="card">
                                <button
                                    className="w-full flex items-center justify-between"
                                    onClick={() => setExpandedModule(expandedModule === module.title ? null : module.title)}
                                    aria-expanded={expandedModule === module.title}
                                >
                                    <div className="flex items-center">
                                        <i className={`${module.icon} text-2xl text-[#FF6E40] mr-4`}></i>
                                        <div className="text-left">
                                            <h3 className="text-xl font-semibold text-[#1B263B]">{module.title}</h3>
                                            <p className="text-[#6E7E91]">{module.description}</p>
                                        </div>
                                    </div>
                                    <i className={`fas fa-chevron-${expandedModule === module.title ? 'up' : 'down'} text-[#6E7E91]`}></i>
                                </button>
                                <div
                                    className={`accordion-content ${expandedModule === module.title ? 'max-h-96' : 'max-h-0'
                                        } overflow-hidden`}
                                >
                                    <div className="pt-6 space-y-4">
                                        {module.services.map((service) => (
                                            <div key={service.name} className="pl-12">
                                                <h4 className="text-lg font-semibold text-[#1B263B] mb-1">
                                                    {service.name}
                                                </h4>
                                                <p className="text-[#6E7E91]">{service.description}</p>
                                            </div>
                                        ))}
                                        <div className="pl-12 pt-4">
                                            <Link to="/contact" className="btn-secondary inline-block">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries Served */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1B263B]">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Healthcare', icon: 'fas fa-hospital' },
                            { name: 'Medical Device', icon: 'fas fa-heartbeat' },
                            { name: 'Accounting', icon: 'fas fa-calculator' },
                            { name: 'Educational', icon: 'fas fa-graduation-cap' },
                            { name: 'Cloud', icon: 'fas fa-cloud' },
                            { name: 'Retail', icon: 'fas fa-shopping-cart' },
                            { name: 'Manufacturing', icon: 'fas fa-industry' },
                            { name: 'Government', icon: 'fas fa-landmark' }
                        ].map((industry) => (
                            <div key={industry.name} className="card text-center">
                                <i className={`${industry.icon} text-3xl text-[#FF6E40] mb-3`}></i>
                                <h3 className="text-lg font-semibold text-[#1B263B]">{industry.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1B263B]">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="card">
                                <button
                                    className="w-full flex items-center justify-between"
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    aria-expanded={expandedFaq === index}
                                >
                                    <h3 className="text-lg font-semibold text-[#1B263B]">{faq.question}</h3>
                                    <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} text-[#6E7E91]`}></i>
                                </button>
                                <div
                                    className={`accordion-content ${expandedFaq === index ? 'max-h-96' : 'max-h-0'
                                        } overflow-hidden`}
                                >
                                    <p className="pt-4 text-[#6E7E91]">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">Ready to Get Started?</h2>
                    <p className="text-xl text-[#6E7E91] mb-8">
                        Schedule a consultation to discuss your compliance needs
                    </p>
                    <Link to="/contact" className="btn-primary inline-block">
                        Schedule Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services; 