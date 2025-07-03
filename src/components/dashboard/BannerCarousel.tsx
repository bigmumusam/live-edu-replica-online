import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy, BookOpen, Users, Gift, Calendar, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BannerCarouselProps {
  onInfoCollection?: () => void;
  onEventRegister?: () => void;
}

const BannerCarousel = ({ onInfoCollection, onEventRegister }: BannerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const banners = [
    {
      id: 1,
      titleKey: "banner.newSemesterSale.title",
      subtitleKey: "banner.newSemesterSale.subtitle",
      descriptionKey: "banner.newSemesterSale.description",
      bgColor: "from-purple-600 to-pink-600",
      icon: <Trophy className="h-8 w-8" />,
      ctaKey: "banner.newSemesterSale.cta",
      tagKey: "banner.newSemesterSale.tag",
      action: "view"
    },
    {
      id: 2,
      titleKey: "banner.aiBootcamp.title",
      subtitleKey: "banner.aiBootcamp.subtitle",
      descriptionKey: "banner.aiBootcamp.description",
      bgColor: "from-blue-600 to-cyan-600",
      icon: <BookOpen className="h-8 w-8" />,
      ctaKey: "banner.aiBootcamp.cta",
      tagKey: "banner.aiBootcamp.tag",
      action: "trial"
    },
    {
      id: 3,
      titleKey: "banner.challenge.title",
      subtitleKey: "banner.challenge.subtitle",
      descriptionKey: "banner.challenge.description",
      bgColor: "from-green-600 to-teal-600",
      icon: <Award className="h-8 w-8" />,
      ctaKey: "banner.challenge.cta",
      tagKey: "banner.challenge.tag",
      action: "challenge"
    },
    {
      id: 4,
      titleKey: "banner.fillInfo.title",
      subtitleKey: "banner.fillInfo.subtitle",
      descriptionKey: "banner.fillInfo.description",
      bgColor: "from-orange-600 to-red-600",
      icon: <Gift className="h-8 w-8" />,
      ctaKey: "banner.fillInfo.cta",
      tagKey: "banner.fillInfo.tag",
      action: "info"
    },
    {
      id: 5,
      titleKey: "banner.lecture.title",
      subtitleKey: "banner.lecture.subtitle",
      descriptionKey: "banner.lecture.description",
      bgColor: "from-indigo-600 to-purple-600",
      icon: <Users className="h-8 w-8" />,
      ctaKey: "banner.lecture.cta",
      tagKey: "banner.lecture.tag",
      action: "lecture"
    },
    {
      id: 6,
      titleKey: "banner.contest.title",
      subtitleKey: "banner.contest.subtitle",
      descriptionKey: "banner.contest.description",
      bgColor: "from-red-600 to-orange-600",
      icon: <Calendar className="h-8 w-8" />,
      ctaKey: "banner.contest.cta",
      tagKey: "banner.contest.tag",
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
                        {t(banner.tagKey)}
                      </Badge>
                      
                      <div className="space-y-2">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                          {t(banner.titleKey)}
                        </h2>
                        <p className="text-xl font-medium text-white/90">
                          {t(banner.subtitleKey)}
                        </p>
                        <p className="text-white/80 text-lg">
                          {t(banner.descriptionKey)}
                        </p>
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button 
                          size="lg" 
                          className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
                          onClick={() => handleBannerClick(banner.action)}
                        >
                          {t(banner.ctaKey)}
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                          <Play className="mr-2 h-4 w-4" />
                          {t('banner.learnMore')}
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