
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

interface BecomeTutorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BecomeTutorModal = ({ isOpen, onOpenChange }: BecomeTutorModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    subjects: "",
    availability: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tutor application:", formData);
    onOpenChange(false);
  };

  const taskRecords = [
    { id: 1, task: "完成个人资料", completed: true },
    { id: 2, task: "上传身份证明", completed: true },
    { id: 3, task: "完成技能测试", completed: false },
    { id: 4, task: "录制介绍视频", completed: false },
    { id: 5, task: "等待审核通过", completed: false }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-slate-800 border-slate-700 text-white">
        <div className="p-8">
          <DialogTitle className="text-2xl font-bold mb-6 text-center">
            成为一名在线教师
          </DialogTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧：申请表单 */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="tutor-name" className="text-base font-medium text-slate-300 mb-3 block">
                    姓名
                  </Label>
                  <Input
                    id="tutor-name"
                    placeholder="请输入您的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="tutor-email" className="text-base font-medium text-slate-300 mb-3 block">
                    邮箱
                  </Label>
                  <Input
                    id="tutor-email"
                    type="email"
                    placeholder="请输入您的邮箱"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="tutor-phone" className="text-base font-medium text-slate-300 mb-3 block">
                    联系电话
                  </Label>
                  <Input
                    id="tutor-phone"
                    placeholder="请输入您的联系电话"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="tutor-subjects" className="text-base font-medium text-slate-300 mb-3 block">
                    教学科目
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, subjects: value})}>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white h-12">
                      <SelectValue placeholder="请选择您的教学科目" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">数学</SelectItem>
                      <SelectItem value="english">英语</SelectItem>
                      <SelectItem value="science">科学</SelectItem>
                      <SelectItem value="physics">物理</SelectItem>
                      <SelectItem value="chemistry">化学</SelectItem>
                      <SelectItem value="biology">生物</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tutor-experience" className="text-base font-medium text-slate-300 mb-3 block">
                    教学经验
                  </Label>
                  <Textarea
                    id="tutor-experience"
                    placeholder="请描述您的教学经验和背景"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white min-h-[120px]"
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-base"
                >
                  提交申请
                </Button>
              </form>
            </div>

            {/* 右侧：任务记录 */}
            <div>
              <Card className="bg-slate-700/50 border-slate-600 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">申请进度</h3>
                  <div className="space-y-4">
                    {taskRecords.map((record) => (
                      <div key={record.id} className="flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50">
                        {record.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        ) : (
                          <Circle className="h-6 w-6 text-slate-400 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <span className={`text-base ${record.completed ? 'text-white' : 'text-slate-400'}`}>
                            {record.task}
                          </span>
                        </div>
                        <Badge 
                          variant={record.completed ? "default" : "secondary"}
                          className={`text-sm ${record.completed ? 'bg-green-600' : 'bg-slate-600'}`}
                        >
                          {record.completed ? "已完成" : "待完成"}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">成为讲师的好处</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>灵活的工作时间安排</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>丰厚的课程收入分成</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>专业的教学支持团队</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>完善的培训体系</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeTutorModal;
