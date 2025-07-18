
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarProps {
  className?: string;
  onMembershipClick?: () => void;
}

const Sidebar = ({ className, onMembershipClick }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const menuItems = [
    { icon: Home, label: t('sidebar.home'), path: "/dashboard" },
    { icon: BookOpen, label: t('sidebar.courses'), path: "/courses" },
    { icon: MessageSquare, label: t('sidebar.forum'), path: "/forum" },
    { icon: User, label: t('sidebar.personal'), path: "/personal" },
  ];

  const handleMembershipClick = () => {
    navigate("/membership");
  };

  return (
    <div className={cn("sidebar-gradient w-64 min-h-screen p-4", className)}>
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">🏠</span>
        </div>
        <span className="text-white font-semibold">Online - Studies</span>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={location.pathname === item.path ? "default" : "ghost"}
            onClick={() => navigate(item.path)}
            className={cn(
              "w-full justify-start text-left h-12 px-4",
              location.pathname === item.path
                ? "bg-green-600 text-white hover:bg-green-700"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span className="flex-1">{item.label}</span>
          </Button>
        ))}
      </div>

      {/* 开会员按钮 */}
      <div className="mt-8 px-2">
        <Button
          variant="outline"
          className="w-full border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
          onClick={handleMembershipClick}
        >
          <span className="mr-2">👑</span>
          {t('sidebar.upgrade')}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
