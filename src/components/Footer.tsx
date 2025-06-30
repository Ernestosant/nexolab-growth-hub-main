import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Navegación': [
      { name: 'Inicio', href: '#home' },
      { name: 'Servicios', href: '#services' },
      { name: 'Testimonios', href: '#testimonials' },
      { name: 'Contacto', href: '#contact' }
    ],
    'Servicios': [
      { name: 'Branding', href: '#' },
      { name: 'Redes Sociales', href: '#' },
      { name: 'Publicidad Digital', href: '#' },
      { name: 'Diseño Web', href: '#' }
    ],
    'Contacto': [
      { name: 'hola@nexolab.com', href: 'mailto:hola@nexolab.com', icon: <Mail className="h-4 w-4" /> },
      { name: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: <Phone className="h-4 w-4" /> },
      { name: 'Av. Tecnología 123', href: '#', icon: <MapPin className="h-4 w-4" /> }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: '#' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="bg-nexo-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/nexolab-logo-transparent.png" 
                alt="NexoLab Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
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
                    <a
                      href={link.href}
                      className="text-nexo-blue-200 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.name}</span>
                    </a>
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
              © 2024 NexoLab. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-nexo-blue-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-nexo-blue-300 hover:text-white transition-colors">
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
