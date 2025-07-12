import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { showToast } from "../shared/Toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventModal = ({ isOpen, onOpenChange }: EventModalProps) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skill: "",
    experience: "",
    reason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast.success(t('event.success'));
    onOpenChange(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      skill: "",
      experience: "",
      reason: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-slate-800 border-slate-700 text-white">
        <DialogTitle className="text-xl font-bold text-center">
          {language === 'zh' ? '春季编程挑战赛报名' : 'Spring Programming Challenge Registration'}
        </DialogTitle>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">{t('event.name')}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white">{t('event.email')}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-white">{t('event.phone')}</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="skill" className="text-white">{t('event.skill')}</Label>
            <Select value={formData.skill} onValueChange={(value) => setFormData(prev => ({ ...prev, skill: value }))}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder={language === 'zh' ? "选择您的主要技能" : "Select your main skill"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="other">{language === 'zh' ? "其他" : "Other"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="experience" className="text-white">{t('event.experience')}</Label>
            <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder={language === 'zh' ? "选择您的经验水平" : "Select your experience level"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">{language === 'zh' ? "初学者 (0-1年)" : "Beginner (0-1 year)"}</SelectItem>
                <SelectItem value="intermediate">{language === 'zh' ? "中级 (1-3年)" : "Intermediate (1-3 years)"}</SelectItem>
                <SelectItem value="advanced">{language === 'zh' ? "高级 (3-5年)" : "Advanced (3-5 years)"}</SelectItem>
                <SelectItem value="expert">{language === 'zh' ? "专家 (5年以上)" : "Expert (5+ years)"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="reason" className="text-white">{t('event.reason')}</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder={language === 'zh' ? "请简述您参加比赛的理由和期望..." : "Please briefly describe your reasons for participating and expectations..."}
              rows={3}
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              className="flex-1 border-slate-600 text-slate-300"
              onClick={() => onOpenChange(false)}
            >
              {t('event.cancel')}
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              {t('event.confirm')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;