import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LoginPageProps {
  idPrefix?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ idPrefix = "login" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    mobile: "",
    password: ""
  });
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simple validation - check if all fields are filled
    if (formData.role.trim() && formData.mobile.trim() && formData.password.trim()) {
      console.log("All fields filled, navigating to dashboard");
      navigate("/dashboard");
    } else {
      console.log("Some fields are empty");
      alert("请填写所有字段");
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-between">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold text-white mb-8">
              {t('login.title')}
            </h1>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center">
                      <div className="text-2xl">👩‍💻</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                          <div className="text-white text-2xl">👨‍🏫</div>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-blue-200 rounded mb-2"></div>
                          <div className="h-3 bg-blue-100 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏠</span>
                </div>
                <span className="text-white font-semibold">Online - Studies</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-role`} className="text-slate-300">{t('login.role')}</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder={t('login.selectRole')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">{t('login.student')}</SelectItem>
                      <SelectItem value="parent">{t('login.parent')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-mobile`} className="text-slate-300">{t('login.mobile')}</Label>
                  <Input
                    id={`${idPrefix}-mobile`}
                    placeholder={t('login.mobilePlaceholder')}
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-verifyCode`} className="text-slate-300">{t('login.verifyCode')}</Label>
                  <div className="relative">
                    <Input
                      id={`${idPrefix}-verifyCode`}
                      type={showPassword ? "text" : "password"}
                      placeholder={t('login.verifyCodePlaceholder')}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-600/50"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 transition-colors"
                >
                  {t('login.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
