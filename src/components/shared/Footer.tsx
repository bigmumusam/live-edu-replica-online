import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  const footerSections = [
    {
      title: 'ABOUT',
      links: [
        { name: language === 'zh' ? '关于我们' : 'About Us', url: '#' },
        { name: language === 'zh' ? '合作伙伴' : 'Partnerships', url: '#' },
        { name: language === 'zh' ? '路线图' : 'Roadmap', url: '#' },
        { name: language === 'zh' ? '学习进展' : 'Progress', url: '#' },
      ]
    },
    {
      title: 'TUTORING',
      links: [
        { name: language === 'zh' ? '同伴辅导优势' : 'Peer Tutoring Benefits', url: '#' },
        { name: language === 'zh' ? '成为导师' : 'Become a Tutor', url: '#' },
      ]
    },
    {
      title: 'COMMUNITY',
      links: [
        { name: language === 'zh' ? '博客' : 'Blog', url: '#' },
        { name: language === 'zh' ? 'Tutorloop 故事' : 'Tutorloop Stories', url: '#' },
      ]
    },
    {
      title: 'CONTACT',
      links: [
        { name: 'tutorloop@tutorloop.com', url: 'mailto:tutorloop@tutorloop.com' },
        { name: 'tutorloop@gmail.com', url: 'mailto:tutorloop@gmail.com' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ];

  const legalLinks = [
    { name: language === 'zh' ? '服务条款' : 'Terms of Service', url: '#' },
    { name: language === 'zh' ? '条款与条件' : 'Terms & Conditions', url: '#' },
    { name: language === 'zh' ? '隐私政策' : 'Privacy Policy', url: '#' },
    { name: language === 'zh' ? '信任与安全' : 'Trust & Safety', url: '#' },
    { name: language === 'zh' ? '媒体报道' : 'Press', url: '#' },
  ];

  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Footer Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright and Brand */}
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-sm">© Tutorloop</span>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-slate-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-slate-400 hover:text-green-400 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;