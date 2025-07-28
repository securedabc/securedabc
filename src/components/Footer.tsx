import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: 'linkedin', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'Facebook', icon: 'facebook', url: '#' },
    ];

    const complianceSeals = [
        { name: 'ISO 27001', image: '/certifications/iso.png' },
        { name: 'FedRAMP', image: '/certifications/fedramp.png' },
        { name: 'CMMC', image: '/certifications/cmmc.png' },
        { name: 'A2LA', image: '/certifications/a2la.png' },
    ];

    return (
        <footer className="bg-[#1B263B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-[#FF6E40]">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>123 Security Street</li>
                            <li>Suite 100</li>
                            <li>Washington, DC 20001</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@3pao.com</li>
                        </ul>
                    </div>

                    {/* Social & Compliance */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="hover:text-[#FF6E40]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <i className={`fab fa-${social.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                        <div className="flex space-x-4">
                            {complianceSeals.map((seal) => (
                                <div key={seal.name} className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <img
                                    src={seal.image}
                                    alt={seal.name}
                                    className="max-h-9 w-auto"
                                />
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} 3PAO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 