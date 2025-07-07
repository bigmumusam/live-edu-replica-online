import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const LimitedTimeOffers = () => {
  const { t } = useLanguage();
  const offers = [
    {
      id: 1,
      title: "Python数据分析特训",
      instructor: "李博士",
      rating: 4.9,
      students: "2,156",
      discountPrice: "¥699",
      originalPrice: "¥1999",
      discount: "65%",
      timeLeft: "23:45:30",
      emoji: "🐍",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "机器学习实战营",
      instructor: "张教授",
      rating: 4.8,
      students: "1,678",
      discountPrice: "¥899",
      originalPrice: "¥2299",
      discount: "61%", 
      timeLeft: "18:22:15",
      emoji: "🤖",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Web全栈开发",
      instructor: "王工程师",
      rating: 4.7,
      students: "3,245",
      discountPrice: "¥1199",
      originalPrice: "¥2999",
      discount: "60%",
      timeLeft: "15:30:45",
      emoji: "💻",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <Clock className="mr-2 h-5 w-5 text-red-500" />
            {t('dashboard.limitedOffers.title')}
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
            {t('button.viewDetails')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {offers.map((offer) => (
              <CarouselItem key={offer.id} className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="bg-slate-700/30 border-slate-600 hover:border-red-500 transition-colors group cursor-pointer h-full">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${offer.gradient} rounded-xl flex items-center justify-center text-xl mx-auto`}>
                        {offer.emoji}
                      </div>
                      
                      <div className="text-center space-y-2">
                        <h4 className="text-white font-medium text-sm leading-tight group-hover:text-red-400 transition-colors">
                          {offer.title}
                        </h4>
                        <p className="text-slate-400 text-xs">{offer.instructor}</p>
                        
                        <div className="flex items-center justify-center space-x-4 text-xs text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{offer.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{offer.students}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-red-400 font-bold text-sm">{offer.discountPrice}</span>
                            <span className="text-slate-500 text-xs line-through">{offer.originalPrice}</span>
                          </div>
                          
                          <div className="flex items-center justify-center space-x-1 text-xs text-red-400">
                            <Clock className="h-3 w-3" />
                            <span>{offer.timeLeft}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Badge className="bg-red-600 text-xs">
                            -{offer.discount} 限时特惠
                          </Badge>
                          <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-xs">
                            立即抢购
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default LimitedTimeOffers;