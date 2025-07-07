import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    school: "",
    grade: "",
    age: "",
    phone: "",
    address: ""
  });
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    
    // Simple validation - check if all fields are filled
    if (Object.values(formData).every(field => field.trim())) {
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
              {t('register.subtitle')}
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

        {/* Right side - Registration Form */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏠</span>
                </div>
                <span className="text-white font-semibold">Online - Studies</span>
              </div>
              <h2 className="text-xl font-bold text-white">{t('register.title')}</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">{t('register.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('register.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-slate-300">{t('register.school')}</Label>
                  <Input
                    id="school"
                    placeholder={t('register.schoolPlaceholder')}
                    value={formData.school}
                    onChange={(e) => setFormData({...formData, school: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-slate-300">{t('register.grade')}</Label>
                    <Input
                      id="grade"
                      placeholder={t('register.gradePlaceholder')}
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-slate-300">{t('register.age')}</Label>
                    <Input
                      id="age"
                      placeholder={t('register.agePlaceholder')}
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">{t('register.phone')}</Label>
                  <Input
                    id="phone"
                    placeholder={t('register.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-slate-300">{t('register.address')}</Label>
                  <Input
                    id="address"
                    placeholder={t('register.addressPlaceholder')}
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
                  {t('register.submit')}
                </Button>
              </form>
              
              <div className="text-center">
                <Button
                  variant="link"
                  onClick={() => navigate("/login")}
                  className="text-green-400 hover:text-green-300"
                >
                  {t('register.login')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;