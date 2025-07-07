import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'TikTok', icon: Twitter, url: '#' }, // Using Twitter icon as placeholder for TikTok
    { name: 'TechCrunch', icon: Youtube, url: '#' }, // Using Youtube icon as placeholder for TechCrunch
  ];

  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.progress.new')}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'zh' 
                  ? '追踪您的学习进度，设定目标，见证每一步成长。我们提供详细的学习分析和个性化建议。'
                  : 'Track your learning progress, set goals, and witness every step of growth. We provide detailed learning analytics and personalized recommendations.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.contact.new')}</h4>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400">{t('footer.email')}</p>
                <p className="text-green-400">tutorloop@gmail.com</p>
                <p className="text-slate-400">
                  {language === 'zh' ? '学习支持' : 'Learning Support'}
                </p>
                <p className="text-green-400">support@tutorloop.com</p>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-white font-semibold text-lg">Tutorloop</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              {language === 'zh' 
                ? '专注于个性化在线学习体验，连接全球学习者与优质教育资源，让学习变得更加高效和有趣。'
                : 'Focused on personalized online learning experiences, connecting global learners with quality educational resources to make learning more efficient and enjoyable.'
              }
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                {t('footer.conditions')}
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                {t('footer.safety')}
              </a>
            </div>
          </div>

          {/* Bottom Section with Social Media Icons */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col items-center space-y-4">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                © 2024 Tutorloop. All rights reserved.
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-slate-400 hover:text-green-400 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={24} />
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