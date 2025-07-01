
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const ProfileSetupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    address: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile setup submitted:", formData);
    // 保存用户信息后跳转到首页
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="个人信息编辑" showSearch={false} />
        
        <main className="p-6 flex items-center justify-center">
          <Card className="w-full max-w-2xl bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">
                为了更好的体验tourloop，请完善您在平台的个人信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">姓名</Label>
                  <Input
                    id="name"
                    placeholder="Randy Walsh"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">邮箱</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="randywalsh@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">手机号</Label>
                  <Input
                    id="phone"
                    placeholder="请输入"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-slate-300">学校</Label>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs">🇬🇧</span>
                    </div>
                    <Input
                      id="school"
                      placeholder="London United Kingdom"
                      value={formData.school}
                      onChange={(e) => setFormData({...formData, school: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 flex-1"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-slate-300">年级</Label>
                  <Input
                    id="grade"
                    placeholder="RandyWalsh_76"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-slate-300">邮寄地址</Label>
                  <Input
                    id="address"
                    placeholder="RandyWalsh_76"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 transition-colors"
                >
                  确认提交
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ProfileSetupPage;
