
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white relative overflow-hidden">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4 flex-1">
            <h2 className="text-3xl font-bold">探索代数 2 学习实验室</h2>
            <p className="text-lg opacity-90">概念难懂？依靠同伴辅导来提升学习进度</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
              立即开始
            </Button>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/4be6a4ab-2cbe-48f8-9bbb-68870a714213.png" 
              alt="学习插图" 
              className="w-48 h-32 object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
