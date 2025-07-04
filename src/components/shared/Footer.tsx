import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

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

  const legalLinks = [
    { name: 'Terms of Service', url: '#' },
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Trust & Safety', url: '#' },
    { name: 'Press', url: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ];

  const contactEmails = [
    'VIENNA@MABLAB.TECH',
    'KYE@MABLAB.TECH'
  ];

  return (
    <footer className="bg-slate-900 py-12">
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
                  className="block text-slate-400 hover:text-white transition-colors"
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
                  className="block text-slate-400 hover:text-white transition-colors"
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
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">CONTACT</h3>
            <div className="space-y-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left: Copyright */}
            <div className="text-slate-400">
              © Tutorloop
            </div>

            {/* Center: Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right: Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;