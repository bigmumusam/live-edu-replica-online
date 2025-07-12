import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AdminLanguageProvider, useAdminLanguage } from "@/contexts/AdminLanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, User, Lock, ArrowLeft } from "lucide-react";

const AdminLoginContent = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language, setLanguage } = useAdminLanguage();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "admin123") {
        toast({
          title: t('login.success'),
          description: t('login.success'),
        });
        navigate("/admin");
      } else {
        toast({
          title: t('login.error'),
          description: t('login.wrongCredentials'),
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Animated Dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-10">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-32 bg-gray-800/50 border-cyan-500/30 text-cyan-400 backdrop-blur-sm">
            <Globe className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-cyan-500/30">
            <SelectItem value="zh" className="text-cyan-400">中文</SelectItem>
            <SelectItem value="en" className="text-cyan-400">English</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t('login.backToSite')}
      </Button>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          <Card className="bg-gray-900/80 backdrop-blur-xl border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <CardContent className="p-8">
              {/* Logo Section */}
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                  <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">{t('login.title')}</h1>
                <p className="text-cyan-400 text-sm">{t('login.subtitle')}</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                    <Input
                      type="text"
                      placeholder={t('login.username')}
                      value={credentials.username}
                      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      className="pl-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                    <Input
                      type="password"
                      placeholder={t('login.password')}
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="pl-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 shadow-lg shadow-cyan-500/25 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? t('login.logging') : t('login.submit')}
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-3 bg-gray-800/30 rounded-lg border border-cyan-500/20">
                <p className="text-xs text-cyan-400 text-center mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-300 text-center">Username: admin | Password: admin123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const AdminLoginPage = () => {
  return (
    <AdminLanguageProvider>
      <AdminLoginContent />
    </AdminLanguageProvider>
  );
};

export default AdminLoginPage;