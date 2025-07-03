import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Gift } from "lucide-react";
import { useState, useEffect } from "react";

const LimitedTimeOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      title: "数学全科通关包",
      description: "含代数、几何、微积分全部课程",
      originalPrice: "¥2999",
      discountPrice: "¥999",
      discount: "67%",
      image: "📚"
    },
    {
      id: 2,
      title: "编程训练营",
      description: "Python + JavaScript + 实战项目",
      originalPrice: "¥1999",
      discountPrice: "¥699",
      discount: "65%",
      image: "💻"
    }
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-500" />
          限时优惠
        </CardTitle>
        
        {/* 倒计时 */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-3 mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">活动倒计时</span>
            </div>
            <div className="flex items-center space-x-1 text-white font-mono">
              <span className="bg-white/20 px-2 py-1 rounded text-xs">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {offers.map((offer) => (
          <Card key={offer.id} className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-xl">
                  {offer.image}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium text-sm">{offer.title}</h4>
                    <Badge className="bg-red-600 text-xs">限时</Badge>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400 font-bold">{offer.discountPrice}</span>
                      <span className="text-slate-500 text-xs line-through">{offer.originalPrice}</span>
                      <Badge className="bg-yellow-600 text-xs">省{offer.discount}</Badge>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs px-3 py-1">
                      立即抢购
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* 新用户专享 */}
        <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Gift className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-white font-medium text-sm">新用户专享礼包</h4>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs">专享</Badge>
                </div>
                <p className="text-slate-400 text-xs mb-2">任选3门课程 + 1对1辅导 + 学习大礼包</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 font-bold">¥199</span>
                    <span className="text-slate-500 text-xs line-through">¥1999</span>
                    <Badge className="bg-yellow-600 text-xs">省90%</Badge>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs px-3 py-1">
                    新人专享
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default LimitedTimeOffers;