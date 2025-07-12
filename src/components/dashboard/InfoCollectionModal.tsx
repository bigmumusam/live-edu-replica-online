import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { showToast } from "@/components/shared/Toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface InfoCollectionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const InfoCollectionModal = ({ isOpen, onOpenChange }: InfoCollectionModalProps) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    address: "",
    subjects: [] as string[],
    studyGoals: "",
    studyTime: "",
    preferredFormat: "",
    experience: "",
    expectations: [] as string[]
  });

  const subjects = [
    { zh: "数学", en: "Mathematics" },
    { zh: "物理", en: "Physics" },
    { zh: "化学", en: "Chemistry" },
    { zh: "生物", en: "Biology" },
    { zh: "语文", en: "Chinese" },
    { zh: "英语", en: "English" },
    { zh: "历史", en: "History" },
    { zh: "地理", en: "Geography" },
    { zh: "政治", en: "Politics" },
    { zh: "计算机", en: "Computer Science" },
    { zh: "艺术", en: "Art" },
    { zh: "体育", en: "Physical Education" }
  ];

  const expectations = [
    { zh: "提高学习成绩", en: "Improve Academic Performance" },
    { zh: "培养学习兴趣", en: "Cultivate Learning Interest" },
    { zh: "准备升学考试", en: "Prepare for Entrance Exams" },
    { zh: "扩展知识面", en: "Expand Knowledge Base" },
    { zh: "提升思维能力", en: "Enhance Thinking Skills" },
    { zh: "结交学习伙伴", en: "Make Learning Friends" }
  ];

  const studyTimeOptions = [
    { zh: "1-2小时", en: "1-2 hours" },
    { zh: "2-4小时", en: "2-4 hours" },
    { zh: "4小时以上", en: "4+ hours" }
  ];

  const formatOptions = [
    { zh: "直播课程", en: "Live Classes" },
    { zh: "录播视频", en: "Recorded Videos" },
    { zh: "图文教程", en: "Text & Image Tutorials" },
    { zh: "互动讨论", en: "Interactive Discussions" }
  ];

  const experienceOptions = [
    { zh: "完全没有", en: "None" },
    { zh: "有一些", en: "Some" },
    { zh: "比较丰富", en: "Rich" }
  ];

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      subjects: checked 
        ? [...prev.subjects, subject]
        : prev.subjects.filter(s => s !== subject)
    }));
  };

  const handleExpectationChange = (expectation: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      expectations: checked 
        ? [...prev.expectations, expectation]
        : prev.expectations.filter(e => e !== expectation)
    }));
  };

  const handleNext = () => {
    showToast.success(t('infoCollection.success'));
    localStorage.setItem('infoCollected', 'true');
    onOpenChange(false);
  };

  const handleSkip = () => {
    localStorage.setItem('infoCollected', 'true');
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-white mb-2">{t('infoCollection.title')}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">{t('infoCollection.name')}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder={language === 'zh' ? "请输入您的姓名" : "Enter your name"}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">{t('infoCollection.email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder={language === 'zh' ? "请输入您的邮箱" : "Enter your email"}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-300">{t('infoCollection.phone')}</Label>
              <Input
                id="phone"
                value={formData.phone || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder={language === 'zh' ? "请输入手机号" : "Enter phone number"}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="school" className="text-slate-300">{t('infoCollection.school')}</Label>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs">🇬🇧</span>
                </div>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                  className="bg-slate-800/50 border-slate-600 text-white flex-1"
                  placeholder={language === 'zh' ? "请输入学校名称" : "Enter school name"}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade" className="text-slate-300">{t('infoCollection.grade')}</Label>
              <Input
                id="grade"
                value={formData.grade}
                onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder={language === 'zh' ? "请输入年级" : "Enter grade"}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address" className="text-slate-300">{t('infoCollection.address')}</Label>
              <Input
                id="address"
                value={formData.address || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder={language === 'zh' ? "请输入邮寄地址" : "Enter mailing address"}
              />
            </div>
          </div>

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-white mb-2">{t('infoCollection.studyPreferences')}</h3>
                <p className="text-slate-400">{t('infoCollection.studyPreferencesDesc')}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-300 mb-3 block">{t('infoCollection.subjects')}</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {subjects.map((subject) => (
                      <div key={subject.zh} className="flex items-center space-x-2">
                        <Checkbox
                          id={subject.zh}
                          checked={formData.subjects.includes(language === 'zh' ? subject.zh : subject.en)}
                          onCheckedChange={(checked) => handleSubjectChange(language === 'zh' ? subject.zh : subject.en, checked as boolean)}
                        />
                        <Label htmlFor={subject.zh} className="text-slate-300 text-sm">
                          {language === 'zh' ? subject.zh : subject.en}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">{t('infoCollection.studyTime')}</Label>
                  <RadioGroup
                    value={formData.studyTime}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, studyTime: value }))}
                  >
                    {studyTimeOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={language === 'zh' ? option.zh : option.en} id={`time${index + 1}`} />
                        <Label htmlFor={`time${index + 1}`} className="text-slate-300">
                          {language === 'zh' ? option.zh : option.en}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">{t('infoCollection.preferredFormat')}</Label>
                  <RadioGroup
                    value={formData.preferredFormat}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, preferredFormat: value }))}
                  >
                    {formatOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={language === 'zh' ? option.zh : option.en} id={`format${index + 1}`} />
                        <Label htmlFor={`format${index + 1}`} className="text-slate-300">
                          {language === 'zh' ? option.zh : option.en}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-white mb-2">{t('infoCollection.studyGoals')}</h3>
                <p className="text-slate-400">{t('infoCollection.studyGoalsDesc')}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-300 mb-3 block">{t('infoCollection.expectations')}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {expectations.map((expectation) => (
                      <div key={expectation.zh} className="flex items-center space-x-2">
                        <Checkbox
                          id={expectation.zh}
                          checked={formData.expectations.includes(language === 'zh' ? expectation.zh : expectation.en)}
                          onCheckedChange={(checked) => handleExpectationChange(language === 'zh' ? expectation.zh : expectation.en, checked as boolean)}
                        />
                        <Label htmlFor={expectation.zh} className="text-slate-300 text-sm">
                          {language === 'zh' ? expectation.zh : expectation.en}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">{t('infoCollection.experience')}</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                  >
                    {experienceOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={language === 'zh' ? option.zh : option.en} id={`exp${index + 1}`} />
                        <Label htmlFor={`exp${index + 1}`} className="text-slate-300">
                          {language === 'zh' ? option.zh : option.en}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-end pt-4 border-t border-slate-700">
          <Button 
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700 text-white px-8"
          >
            {t('infoCollection.submit')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoCollectionModal;