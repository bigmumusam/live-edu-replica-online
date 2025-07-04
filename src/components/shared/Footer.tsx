import { useLanguage } from "@/contexts/LanguageContext";

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
    { name: 'Schoolhouse Stories', url: '#' },
  ];

  const resourceLinks = [
    { name: 'Brand Resources', url: '#' },
    { name: 'Help Desk', url: '#' },
  ];

  const socialLinks = [
    { name: 'LINKEDIN', url: '#' },
    { name: 'INSTAGRAM', url: '#' },
    { name: 'TIKTOK', url: '#' },
    { name: 'TECHCRUNCH', url: '#' },
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

        <div className="grid md:grid-cols-3 gap-8">
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

          {/* Follow Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">FOLLOW</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
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

        <div className="mt-8 pt-8 border-t border-blue-500 text-center">
          <p className="text-blue-100">&copy; 2024 Schoolhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;