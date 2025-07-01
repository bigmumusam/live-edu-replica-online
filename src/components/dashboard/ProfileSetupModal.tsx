
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface ProfileSetupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileSetupModal = ({ isOpen, onOpenChange }: ProfileSetupModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    address: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-slate-800 border-slate-700 text-white">
        <div className="p-6">
          <DialogTitle className="text-lg font-medium mb-2 text-center">
            为了更好的体验tourloop，请完善您在平台的个人信息
          </DialogTitle>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-slate-300">
                姓名
              </Label>
              <Input
                id="name"
                placeholder="Randy Walsh"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                邮箱
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="randywalsh@agency.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-slate-300">
                手机号
              </Label>
              <Input
                id="phone"
                placeholder="请输入"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="school" className="text-sm font-medium text-slate-300">
                学校
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, school: value})}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white mt-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">🇬🇧</span>
                    <SelectValue placeholder="London United Kingdom" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="london-uk">London United Kingdom</SelectItem>
                  <SelectItem value="beijing-cn">Beijing China</SelectItem>
                  <SelectItem value="new-york-us">New York USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="grade" className="text-sm font-medium text-slate-300">
                年级
              </Label>
              <Input
                id="grade"
                placeholder="RandyWalsh_76"
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-sm font-medium text-slate-300">
                邮寄地址
              </Label>
              <Input
                id="address"
                placeholder="RandyWalsh_76"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="bg-slate-700/50 border-slate-600 text-white mt-1"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white mt-6"
            >
              确认提交
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;
