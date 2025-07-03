import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Trophy, BookOpen, Users } from "lucide-react";

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      title: "新学期特惠季",
      subtitle: "所有课程享受8折优惠",
      description: "为新学期做好准备，精选课程助你快速提升",
      bgColor: "from-purple-600 to-pink-600",
      icon: <Trophy className="h-8 w-8" />,
      cta: "立即查看",
      tag: "限时优惠"
    },
    {
      id: 2,
      title: "AI编程训练营",
      subtitle: "零基础入门人工智能",
      description: "跟随业界专家，掌握AI核心技术和实战项目",
      bgColor: "from-blue-600 to-cyan-600",
      icon: <BookOpen className="h-8 w-8" />,
      cta: "免费试学",
      tag: "热门课程"
    },
    {
      id: 3,
      title: "学习成就挑战",
      subtitle: "30天学习打卡活动",
      description: "坚持学习30天，赢取丰厚奖品和证书",
      bgColor: "from-green-600 to-teal-600",
      icon: <Users className="h-8 w-8" />,
      cta: "参加挑战",
      tag: "活动进行中"
    }
  ];

  return (
    <div className="mb-6">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
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
                        <Button size="lg" className="bg-white/20 hover:bg-white/30 border-white/30 text-white">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;