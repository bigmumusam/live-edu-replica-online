import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface PersonalInfoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const PersonalInfoModal = ({ isOpen, onOpenChange }: PersonalInfoModalProps) => {
  const { t } = useLanguage();

  const userInfo = {
    name: "小明",
    email: "xiaoming@example.com",
    phone: "+86 138 0013 8000",
    school: "清华大学",
    grade: "大三",
    address: "北京市海淀区清华园"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {t('profile.title')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">小明</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.name')}:</span>
              <span className="text-white">{userInfo.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.email')}:</span>
              <span className="text-white">{userInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.phone')}:</span>
              <span className="text-white">{userInfo.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.school')}:</span>
              <span className="text-white">{userInfo.school}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.grade')}:</span>
              <span className="text-white">{userInfo.grade}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('profile.address')}:</span>
              <span className="text-white">{userInfo.address}</span>
            </div>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button 
              variant="outline" 
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
              onClick={() => onOpenChange(false)}
            >
              {t('profile.close')}
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => {/* Handle edit profile */}}
            >
              {t('profile.edit')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonalInfoModal;