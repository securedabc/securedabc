import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TeamMember {
    name: string;
    title: string;
    photo: string;
    bio: string;
    linkedin: string;
    qualifications: string[];
    expertise: string[];
}

const teamMembers: TeamMember[] = [
    {
        name: 'Richard Appiah',
        title: 'Security Business Analyst',
        photo: '/team1.jpg',
        bio: 'Richard is a Security Business Analyst at Interr Limited, Birmingham. He holds a BSc and MSc, and is a Chartered Manager with expertise in Technology, Management, and Data Analytics (CMI). Currently pursuing his PhD in Business at Birmingham City University.',
        linkedin: 'https://linkedin.com/in/richard-appiah',
        qualifications: ['BSc', 'MSc', 'Chartered Manager (CMI)', 'PhD Candidate'],
        expertise: ['Technology', 'Management', 'Data Analytics', 'Compliance']
    },
    {
        name: 'Emmanuel Wilson, Esq.',
        title: 'Legal Counsel',
        photo: '/team2.jpg',
        bio: 'Emmanuel is a Barrister & Solicitor of the Supreme Court of Ghana. He holds a B(Ed.) and LLB, and is currently an LLM Candidate specializing in Information Technology Law at the University of Ghana. His legal expertise makes him an invaluable asset in navigating complex compliance requirements.',
        linkedin: 'https://linkedin.com/in/emmanuel-wilson',
        qualifications: ['B(Ed.)', 'LLB', 'Barrister & Solicitor', 'LLM Candidate'],
        expertise: ['IT Law', 'Regulatory Compliance', 'Legal Framework', 'Data Protection']
    },
    {
        name: 'Kingsley Ofosu',
        title: 'Security Engineer',
        photo: '/team3.jpg',
        bio: 'Kingsley holds an MPhil and MSc, specializing in Web Application Security. As a Web Application Pentester and Vulnerability Management Engineer, he brings extensive technical expertise to our security assessments. His deep understanding ensures thorough and effective security evaluations.',
        linkedin: 'https://linkedin.com/in/kingsley-ofosu',
        qualifications: ['MPhil', 'MSc', 'Certified Pentester', 'QA Engineer'],
        expertise: ['Web Security', 'Vulnerability Management', 'Quality Assurance', 'Penetration Testing']
    },
    {
        name: 'Daniel Kwakwa-Sarpong',
        title: 'Hospital Administrator & IT Manager',
        photo: '/team4.jpg',
        bio: 'Daniel holds a BSc in Computer Science and is currently pursuing an MSc in Cybersecurity and Digital Forensics at KNUST. He serves as Hospital Administrator and IT Manager at BRITEAID HEALTH SERVICE and SANTA MARIA MEDICAL AND DIAGNOSTIC CENTER in Kumasi, Ghana. His healthcare IT experience brings valuable insights to compliance assessments in the medical sector.',
        linkedin: 'https://linkedin.com/in/daniel-kwakwa-sarpong',
        qualifications: ['BSc Computer Science', 'MSc Candidate', 'Hospital Administrator', 'IT Manager'],
        expertise: ['Healthcare IT', 'Cybersecurity', 'Digital Forensics', 'Hospital Management']
    }
];

const Team = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Intro */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl font-bold mb-4 text-[#1B263B]">Meet the Experts Behind Your Compliance</h1>
                    <p className="text-xl text-[#6E7E91] max-w-3xl mx-auto">
                        Our team of certified assessors and security professionals brings decades of combined experience in compliance and security assessments.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="card group cursor-pointer transform transition-all duration-300 hover:scale-105"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 border-4 border-[#FF6E40] relative">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1B263B] mb-2">{member.name}</h3>
                                <p className="text-[#FF6E40] font-medium mb-4">{member.title}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {member.qualifications.slice(0, 2).map((qual, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-[#6E7E91] text-sm rounded-full"
                                        >
                                            {qual}
                                        </span>
                                    ))}
                                </div>
                                <button className="mt-4 text-[#6E7E91] hover:text-[#FF6E40] transition-colors duration-300">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Member Modal */}
                {selectedMember && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedMember(null)}>
                        <div
                            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#1B263B] transition-colors duration-300"
                                    aria-label="Close modal"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                        <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#FF6E40] flex-shrink-0">
                                            <img
                                                src={selectedMember.photo}
                                                alt={selectedMember.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h2 className="text-2xl font-bold text-[#1B263B] mb-2">{selectedMember.name}</h2>
                                            <p className="text-[#FF6E40] font-medium mb-4">{selectedMember.title}</p>
                                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                {selectedMember.qualifications.map((qual, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-gray-100 text-[#6E7E91] text-sm rounded-full"
                                                    >
                                                        {qual}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#1B263B] mb-2">About</h3>
                                            <p className="text-[#6E7E91]">{selectedMember.bio}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#1B263B] mb-2">Areas of Expertise</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedMember.expertise.map((exp, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-[#FF6E40]/10 text-[#FF6E40] text-sm rounded-full"
                                                    >
                                                        {exp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <a
                                            href={selectedMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border border-[#1B263B] text-[#1B263B] rounded-lg hover:bg-[#1B263B] hover:text-white transition-colors duration-300 mt-4"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                            CONNECT ON LINKEDIN
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-4 text-[#1B263B]">Book Time with Our Lead Assessors</h2>
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

export default Team; 