import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventModal from "./EventModal";

const BannerCarousel = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

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
    }
    // Handle other actions as needed
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
    </>
  );
};

export default BannerCarousel;