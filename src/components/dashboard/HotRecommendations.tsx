import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, TrendingUp } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const HotRecommendations = () => {
  const { t } = useLanguage();
  const recommendations = [
    {
      id: 1,
      title: "Python数据分析入门",
      instructor: "张教授",
      rating: 4.9,
      students: "12,456",
      duration: "8周",
      price: "¥899",
      originalPrice: "¥1299",
      tags: ["热门", "新课"],
      image: "🐍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "高等数学核心概念",
      instructor: "李博士",
      rating: 4.8,
      students: "8,234",
      duration: "12周",
      price: "¥1199",
      originalPrice: "¥1599",
      tags: ["精品", "认证"],
      image: "📐",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "机器学习实战项目",
      instructor: "王工程师",
      rating: 4.9,
      students: "5,678",
      duration: "10周",
      price: "¥1499",
      originalPrice: "¥1999",
      tags: ["实战", "高级"],
      image: "🤖",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
            {t('dashboard.hotRecommendations.title')}
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
            {t('button.viewDetails')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {recommendations.map((course) => (
              <CarouselItem key={course.id} className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="bg-slate-700/30 border-slate-600 hover:border-green-500 transition-colors group cursor-pointer h-full">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-xl mx-auto`}>
                        {course.image}
                      </div>
                      
                      <div className="text-center space-y-2">
                        <h4 className="text-white font-medium text-sm leading-tight group-hover:text-green-400 transition-colors">
                          {course.title}
                        </h4>
                        <p className="text-slate-400 text-xs">{course.instructor}</p>
                        
                        <div className="flex items-center justify-center space-x-4 text-xs text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{course.students}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-green-400 font-bold text-sm">{course.price}</span>
                          <span className="text-slate-500 text-xs line-through">{course.originalPrice}</span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-1">
                          {course.tags.map((tag, index) => (
                            <Badge 
                              key={index} 
                              className={`text-xs ${
                                tag === "热门" ? "bg-red-600" : 
                                tag === "新课" ? "bg-blue-600" :
                                tag === "精品" ? "bg-purple-600" :
                                tag === "认证" ? "bg-green-600" :
                                tag === "实战" ? "bg-orange-600" :
                                "bg-gray-600"
                              }`}
                            >
                              {tag}
                            </Badge>
                          ))}
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

export default HotRecommendations;