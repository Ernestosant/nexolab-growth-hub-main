import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// X (Twitter) SVG icon as a React component
const XIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 509.64" className={className} fill="currentColor">
    <path fill="#fff" fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
  </svg>
);

// Telegram SVG icon as a React component
const TelegramIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16l-1.704 8.04c-.128.6-.464.744-.944.464l-2.6-1.92-1.256 1.208c-.136.136-.256.256-.528.256l.192-2.72L17.736 7.2c.224-.2-.048-.312-.352-.112l-6.464 4.072-2.784-.864c-.608-.192-.616-.608.128-.896l10.88-4.208c.504-.184.944.112.784.896z"/>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const footerLinks = {
    'Navegación': [
      { name: 'Inicio', href: '#home', type: 'scroll' },
      { name: 'Servicios', href: '#services', type: 'scroll' },
      { name: 'Contacto', href: '#contact', type: 'scroll' }
    ],
    'Servicios': [
      { name: "Desarrollo Web & Mobile", href: "/services#desarrollo-web-mobile", type: 'route' },
      { name: "Desarrollo de Soluciones con IA", href: "/services#desarrollo-soluciones-ia", type: 'route' },
      { name: "Automatización y CRM", href: "/services#automatizacion-crm", type: 'route' },
      { name: "Branding", href: "/services#branding", type: 'route' },
      { name: "Gestión de Redes Sociales", href: "/services#gestion-redes-sociales", type: 'route' },
      { name: "Marketing y Publicidad Digital", href: "/services#marketing-publicidad-digital", type: 'route' }
    ],
    'Contacto': [
      { name: 'sales@thotlabs.tech', href: 'mailto:sales@thotlabs.tech', icon: <Mail className="h-4 w-4" />, type: 'external' },
      { name: '+53 53226980', href: 'tel:+53 53226980', icon: <Phone className="h-4 w-4" />, type: 'external' },
      { name: 'Ave 5ta #1013, Chibas, La Habana, Cuba', href: '#', icon: <MapPin className="h-4 w-4" />, type: 'external' }
    ]
  };

  const handleLinkClick = (link: { href: string; type: string }) => {
    if (link.type === 'route') {
      navigate(link.href);
    } else if (link.type === 'scroll') {
      const sectionId = link.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: 'https://www.facebook.com/share/1HmZS8mA1x/' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: 'https://www.instagram.com/techlabas_ai_agency' },
    { icon: <XIcon className="h-5 w-5" />, name: 'X', url: 'https://x.com/ThotLabsAi?s=08' },
    { icon: <TelegramIcon className="h-5 w-5" />, name: 'Telegram', url: 'https://t.me/thotlabsAI_redcolaborativadeIA' }
  ];

  return (
    <footer className="bg-nexo-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/logothot_2.png" 
                alt="thotlabs Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-nexo-blue-800 rounded-lg hover:bg-nexo-orange-500 transition-colors group"
                  title={social.name}
                >
                  <div className="text-nexo-blue-200 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-nexo-orange-400">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.type === 'external' ? (
                      <a
                        href={link.href}
                        className="text-nexo-blue-200 hover:text-white transition-colors flex items-center space-x-2"
                      >
                        {link.icon && <span>{link.icon}</span>}
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-nexo-blue-200 hover:text-white transition-colors flex items-center space-x-2 text-left"
                      >
                        {link.icon && <span>{link.icon}</span>}
                        <span>{link.name}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nexo-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-nexo-blue-300 text-sm">
              © {new Date().getFullYear()} thotlabs. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/politicas_de_privacidad.pdf" className="text-nexo-blue-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Política de Privacidad
              </a>
              <a href="/terminos_y_condiciones.pdf" className="text-nexo-blue-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
