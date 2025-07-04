import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const aboutLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Partnerships', url: '#' },
    { name: 'Roadmap', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'PROGRESS', url: '#' },
  ];

  const tutoringLinks = [
    { name: 'Peer Tutoring Benefits', url: '#' },
    { name: 'Get Certified', url: '#' },
    { name: 'Become a Tutor', url: '#' },
    { name: 'Session Safety Measures', url: '#' },
  ];

  const communityLinks = [
    { name: 'Blog', url: '#' },
    { name: 'Tutorloop Stories', url: '#' },
  ];

  const resourceLinks = [
    { name: 'Brand Resources', url: '#' },
    { name: 'Help Desk', url: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'TikTok', icon: null, url: '#' },
    { name: 'YouTube', icon: null, url: '#' },
    { name: 'Facebook', icon: null, url: '#' },
  ];

  const contactEmails = [
    'VIENNA@MABLAB.TECH',
    'KYE@MABLAB.TECH'
  ];

  return (
    <footer className="bg-blue-600 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">ABOUT</h3>
            <div className="space-y-2">
              {aboutLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tutoring Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">TUTORING</h3>
            <div className="space-y-2">
              {tutoringLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">COMMUNITY</h3>
            <div className="space-y-2">
              {communityLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">RESOURCES</h3>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-blue-100 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">CONTACT</h3>
            <div className="space-y-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-blue-100 hover:text-white transition-colors text-sm"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 pt-8 border-t border-blue-500">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-blue-100 hover:text-white transition-colors"
              aria-label={link.name}
            >
              {link.icon ? (
                <link.icon size={24} />
              ) : (
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-xs font-bold text-blue-600">
                  {link.name.charAt(0)}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;