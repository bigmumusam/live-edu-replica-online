import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LoginPage from "@/pages/LoginPage";

interface CTASectionProps {
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
}

const CTASection = ({ isLoginOpen, setIsLoginOpen }: CTASectionProps) => {
  const loginTriggerRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 space-y-8">
          <h2 className="text-4xl font-bold text-white">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isLoginOpen} onOpenChange={(v) => {
              setIsLoginOpen(v);
              if (!v) setTimeout(() => loginTriggerRef.current?.focus(), 0);
            }}>
              <DialogTrigger asChild>
                <Button ref={loginTriggerRef} size="lg" className="bg-white text-green-600 hover:bg-slate-100 text-lg px-8 py-4">
                  {t('home.cta.register')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-transparent border-0">
                <DialogTitle className="sr-only">登录</DialogTitle>
                <DialogDescription className="sr-only">请输入登录信息。</DialogDescription>
                <LoginPage idPrefix="login-dialog-cta" />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              {t('home.cta.learnMore')}
            </Button>
          </div>
          
          <p className="text-sm text-green-100">
            {t('home.cta.gift')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;