import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { showToast } from "@/components/shared/Toast";

interface InfoCollectionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const InfoCollectionModal = ({ isOpen, onOpenChange }: InfoCollectionModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    school: "",
    subjects: [] as string[],
    studyGoals: "",
    studyTime: "",
    preferredFormat: "",
    experience: "",
    expectations: [] as string[]
  });

  const subjects = [
    "数学", "物理", "化学", "生物", "语文", "英语", 
    "历史", "地理", "政治", "计算机", "艺术", "体育"
  ];

  const expectations = [
    "提高学习成绩", "培养学习兴趣", "准备升学考试", 
    "扩展知识面", "提升思维能力", "结交学习伙伴"
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
    if (step < 3) {
      setStep(step + 1);
    } else {
      // 提交表单
      showToast.success("信息收集完成，欢迎加入学习平台！");
      localStorage.setItem('infoCollected', 'true');
      onOpenChange(false);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('infoCollected', 'true');
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">
            欢迎来到学习平台 ({step}/3)
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-white mb-2">基本信息</h3>
                <p className="text-slate-400">让我们了解一下您的基本情况</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">姓名</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-slate-800/50 border-slate-600 text-white"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-slate-300">年龄</Label>
                  <Input
                    id="age"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    className="bg-slate-800/50 border-slate-600 text-white"
                    placeholder="请输入您的年龄"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-slate-300">年级</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}
                >
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                    <SelectValue placeholder="请选择您的年级" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="初一">初一</SelectItem>
                    <SelectItem value="初二">初二</SelectItem>
                    <SelectItem value="初三">初三</SelectItem>
                    <SelectItem value="高一">高一</SelectItem>
                    <SelectItem value="高二">高二</SelectItem>
                    <SelectItem value="高三">高三</SelectItem>
                    <SelectItem value="大一">大一</SelectItem>
                    <SelectItem value="大二">大二</SelectItem>
                    <SelectItem value="大三">大三</SelectItem>
                    <SelectItem value="大四">大四</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="school" className="text-slate-300">学校</Label>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                  className="bg-slate-800/50 border-slate-600 text-white"
                  placeholder="请输入您的学校名称"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-white mb-2">学习偏好</h3>
                <p className="text-slate-400">告诉我们您的学习兴趣和习惯</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-300 mb-3 block">感兴趣的学科 (可多选)</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {subjects.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                          id={subject}
                          checked={formData.subjects.includes(subject)}
                          onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                        />
                        <Label htmlFor={subject} className="text-slate-300 text-sm">
                          {subject}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">每天可用于学习的时间</Label>
                  <RadioGroup
                    value={formData.studyTime}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, studyTime: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-2小时" id="time1" />
                      <Label htmlFor="time1" className="text-slate-300">1-2小时</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-4小时" id="time2" />
                      <Label htmlFor="time2" className="text-slate-300">2-4小时</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4小时以上" id="time3" />
                      <Label htmlFor="time3" className="text-slate-300">4小时以上</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">偏好的学习方式</Label>
                  <RadioGroup
                    value={formData.preferredFormat}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, preferredFormat: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="直播课程" id="format1" />
                      <Label htmlFor="format1" className="text-slate-300">直播课程</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="录播视频" id="format2" />
                      <Label htmlFor="format2" className="text-slate-300">录播视频</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="图文教程" id="format3" />
                      <Label htmlFor="format3" className="text-slate-300">图文教程</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="互动讨论" id="format4" />
                      <Label htmlFor="format4" className="text-slate-300">互动讨论</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-white mb-2">学习目标</h3>
                <p className="text-slate-400">最后，告诉我们您的学习期望</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-300 mb-3 block">您希望通过平台获得什么 (可多选)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {expectations.map((expectation) => (
                      <div key={expectation} className="flex items-center space-x-2">
                        <Checkbox
                          id={expectation}
                          checked={formData.expectations.includes(expectation)}
                          onCheckedChange={(checked) => handleExpectationChange(expectation, checked as boolean)}
                        />
                        <Label htmlFor={expectation} className="text-slate-300 text-sm">
                          {expectation}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-slate-300">在线学习经验</Label>
                  <RadioGroup
                    value={formData.experience}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="完全没有" id="exp1" />
                      <Label htmlFor="exp1" className="text-slate-300">完全没有</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="有一些" id="exp2" />
                      <Label htmlFor="exp2" className="text-slate-300">有一些</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="比较丰富" id="exp3" />
                      <Label htmlFor="exp3" className="text-slate-300">比较丰富</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-between pt-4 border-t border-slate-700">
          <Button 
            variant="ghost" 
            onClick={handleSkip}
            className="text-slate-400 hover:text-white"
          >
            跳过
          </Button>
          
          <div className="flex space-x-3">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={() => setStep(step - 1)}
                className="border-slate-600 text-slate-300 hover:text-white"
              >
                上一步
              </Button>
            )}
            <Button 
              onClick={handleNext}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {step === 3 ? "完成" : "下一步"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoCollectionModal;