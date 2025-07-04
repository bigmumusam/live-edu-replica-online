import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

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
    <footer className="bg-slate-900 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">{t('footer.progress')}</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex justify-between">
                <span>学习进度</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Follow Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">{t('footer.follow')}</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-slate-400 hover:text-green-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">{t('footer.contact')}</h3>
            <div className="space-y-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">&copy; 2024 Online Studies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;