import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showToast } from "@/components/shared/Toast";

interface EditProfileModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditProfileModal = ({ isOpen, onOpenChange }: EditProfileModalProps) => {
  const [formData, setFormData] = useState({
    displayName: "陈俊杰",
    bio: "Fike it until you make it, fighting~",
    school: "清华大学附属中学",
    grade: "高三",
    major: "理科实验班",
    location: "北京市海淀区",
    email: "chenjunjie@example.com",
    phone: "138****8888",
    interests: "数学, 物理, 编程",
  });

  const handleSave = () => {
    showToast.success("个人信息已更新");
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">编辑个人信息</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          {/* 基本信息 */}
          <div className="space-y-4">
            <h3 className="text-white font-medium border-b border-slate-700 pb-2">基本信息</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="displayName" className="text-slate-300">姓名</Label>
                <Input
                  id="displayName"
                  value={formData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">邮箱</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-300">电话</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-slate-300">所在地</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-slate-300">个人签名</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="bg-slate-800/50 border-slate-600 text-white"
                rows={3}
              />
            </div>
          </div>

          {/* 教育信息 */}
          <div className="space-y-4">
            <h3 className="text-white font-medium border-b border-slate-700 pb-2">教育信息</h3>
            
            <div className="space-y-2">
              <Label htmlFor="school" className="text-slate-300">学校</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => handleInputChange('school', e.target.value)}
                className="bg-slate-800/50 border-slate-600 text-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-slate-300">年级</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => handleInputChange('grade', value)}
                >
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                    <SelectValue />
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
                <Label htmlFor="major" className="text-slate-300">专业/班级</Label>
                <Input
                  id="major"
                  value={formData.major}
                  onChange={(e) => handleInputChange('major', e.target.value)}
                  className="bg-slate-800/50 border-slate-600 text-white"
                />
              </div>
            </div>
          </div>

          {/* 兴趣爱好 */}
          <div className="space-y-4">
            <h3 className="text-white font-medium border-b border-slate-700 pb-2">兴趣爱好</h3>
            
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-slate-300">学科兴趣 (用逗号分隔)</Label>
              <Input
                id="interests"
                value={formData.interests}
                onChange={(e) => handleInputChange('interests', e.target.value)}
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder="例如：数学, 物理, 化学"
              />
            </div>
          </div>

          {/* 证书信息 */}
          <div className="space-y-4">
            <h3 className="text-white font-medium border-b border-slate-700 pb-2">证书信息</h3>
            
            <div className="space-y-2">
              <Label htmlFor="certificates" className="text-slate-300">获得证书</Label>
              <Input
                id="certificates"
                value="承荣证书"
                className="bg-slate-800/50 border-slate-600 text-white"
                placeholder="请输入您获得的证书"
              />
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-slate-700">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="border-slate-600 text-slate-300 hover:text-white"
          >
            取消
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            保存修改
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;