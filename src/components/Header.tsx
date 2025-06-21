
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
}

const Header = ({ title = "首页", showSearch = true }: HeaderProps) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <div className="text-sm text-slate-400">
            个人中心/ 我的课程 / 课程详情
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="请搜索"
                className="pl-10 w-64 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:text-white hover:bg-slate-700/50"
          >
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
