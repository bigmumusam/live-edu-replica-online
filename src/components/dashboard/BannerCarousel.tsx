import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EventModal from "./EventModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showToast } from "@/components/shared/Toast";

const BannerCarousel = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isLectureModalOpen, setIsLectureModalOpen] = useState(false);
  const navigate = useNavigate();

  const banners = [
    {
      id: 1,
      title: "订阅Tourloop,解锁更多权益",
      subtitle: "解锁全部课程内容，享受专属学习体验",
      buttonText: "立即订购",
      gradient: "from-green-500 to-blue-500",
      action: "membership"
    },
    {
      id: 2,
      title: "春季编程挑战赛",
      subtitle: "参与全球编程竞赛，赢取丰厚奖品",
      buttonText: "立即参加",
      gradient: "from-purple-500 to-pink-500",
      action: "event"
    },
    {
      id: 3,
      title: "精品课程推荐",
      subtitle: "高质量编程课程，助你快速提升技能",
      buttonText: "查看课程",
      gradient: "from-orange-500 to-red-500",
      action: "course"
    },
    {
      id: 4,
      title: "名师讲座：AI与未来教育",
      subtitle: "资深教育专家分享前沿教学理念",
      buttonText: "立即报名",
      gradient: "from-indigo-500 to-purple-500",
      action: "lecture"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleBannerAction = (action: string) => {
    if (action === "event") {
      setIsEventModalOpen(true);
    } else if (action === "membership") {
      navigate("/membership");
    } else if (action === "course") {
      navigate("/course/1");
    } else if (action === "lecture") {
      setIsLectureModalOpen(true);
    }
  };

  const handleLectureRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLectureModalOpen(false);
    showToast.success("报名成功！我们会尽快联系您确认详情");
  };

  return (
    <>
      <div className="relative h-64 rounded-xl overflow-hidden mb-6">
        <div className={`absolute inset-0 bg-gradient-to-r ${banners[currentBanner].gradient} flex items-center justify-between px-8`}>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">{banners[currentBanner].title}</h2>
            <p className="text-xl mb-4 opacity-90">{banners[currentBanner].subtitle}</p>
            <Button 
              className="bg-white text-slate-800 hover:bg-gray-100"
              onClick={() => handleBannerAction(banners[currentBanner].action)}
            >
              {banners[currentBanner].buttonText}
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <EventModal 
        isOpen={isEventModalOpen}
        onOpenChange={setIsEventModalOpen}
      />

      <Dialog open={isLectureModalOpen} onOpenChange={setIsLectureModalOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-green-400">讲座报名</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLectureRegistration} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-slate-300">姓名</Label>
              <Input 
                id="name" 
                required 
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="请输入您的姓名"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-300">邮箱</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="请输入您的邮箱"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-slate-300">手机号</Label>
              <Input 
                id="phone" 
                required 
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="请输入您的手机号"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-slate-300">备注信息（可选）</Label>
              <Textarea 
                id="message" 
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="请输入您的特殊需求或问题"
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsLectureModalOpen(false)}
                className="flex-1 border-slate-600 text-slate-300"
              >
                取消
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                确认报名
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BannerCarousel;