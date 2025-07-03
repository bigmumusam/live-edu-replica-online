import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy, BookOpen, Users, Gift, Calendar, Award } from "lucide-react";
import { useEffect, useState } from "react";

interface BannerCarouselProps {
  onInfoCollection?: () => void;
  onEventRegister?: () => void;
}

const BannerCarousel = ({ onInfoCollection, onEventRegister }: BannerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      id: 1,
      title: "新学期特惠季",
      subtitle: "所有课程享受8折优惠",
      description: "为新学期做好准备，精选课程助你快速提升技能",
      bgColor: "from-purple-600 to-pink-600",
      icon: <Trophy className="h-8 w-8" />,
      cta: "立即查看",
      tag: "限时优惠",
      action: "view"
    },
    {
      id: 2,
      title: "AI编程训练营",
      subtitle: "零基础入门人工智能",
      description: "跟随业界专家，掌握AI核心技术和实战项目",
      bgColor: "from-blue-600 to-cyan-600",
      icon: <BookOpen className="h-8 w-8" />,
      cta: "免费试学",
      tag: "热门课程",
      action: "trial"
    },
    {
      id: 3,
      title: "学习成就挑战",
      subtitle: "30天学习打卡活动",
      description: "坚持学习30天，赢取丰厚奖品和证书",
      bgColor: "from-green-600 to-teal-600",
      icon: <Award className="h-8 w-8" />,
      cta: "参加挑战",
      tag: "活动进行中",
      action: "challenge"
    },
    {
      id: 4,
      title: "填写资料领奖励",
      subtitle: "完善个人信息获得积分",
      description: "填写完整的学习资料，立即获得200积分奖励",
      bgColor: "from-orange-600 to-red-600",
      icon: <Gift className="h-8 w-8" />,
      cta: "立即填写",
      tag: "奖励活动",
      action: "info"
    },
    {
      id: 5,
      title: "春季编程大讲座",
      subtitle: "顶级专家分享最新技术",
      description: "邀请业界顶尖专家，分享前沿技术和实战经验",
      bgColor: "from-indigo-600 to-purple-600",
      icon: <Users className="h-8 w-8" />,
      cta: "立即报名",
      tag: "专家讲座",
      action: "lecture"
    },
    {
      id: 6,
      title: "春季编程挑战赛",
      subtitle: "展现你的编程实力",
      description: "参与编程竞赛，与全国高手同台竞技，赢取丰厚奖品",
      bgColor: "from-red-600 to-orange-600",
      icon: <Calendar className="h-8 w-8" />,
      cta: "报名参赛",
      tag: "竞赛活动",
      action: "event"
    }
  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleBannerClick = (action: string) => {
    if (action === "info" && onInfoCollection) {
      onInfoCollection();
    } else if ((action === "lecture" || action === "event" || action === "challenge") && onEventRegister) {
      onEventRegister();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-6">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="flex-none w-full">
              <Card className={`bg-gradient-to-r ${banner.bgColor} border-0 text-white overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <Badge className="bg-white/20 text-white border-white/30 w-fit">
                        {banner.tag}
                      </Badge>
                      
                      <div className="space-y-2">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                          {banner.title}
                        </h2>
                        <p className="text-xl font-medium text-white/90">
                          {banner.subtitle}
                        </p>
                        <p className="text-white/80 text-lg">
                          {banner.description}
                        </p>
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button 
                          size="lg" 
                          className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
                          onClick={() => handleBannerClick(banner.action)}
                        >
                          {banner.cta}
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                          <Play className="mr-2 h-4 w-4" />
                          了解详情
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {banner.icon}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* 轮播指示器 */}
      <div className="flex justify-center space-x-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;