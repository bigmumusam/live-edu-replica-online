
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
      <div className="relative p-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          开启你的学习之旅
          <span className="block text-3xl font-normal text-blue-300 mt-2">与50,000+学习者一起成长</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          探索世界级课程，掌握前沿技能，打造属于你的职业生涯
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all">
            开始学习
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
            免费试听
          </Button>
        </div>
        <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>1000+ 门课程</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>专业认证</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>终身学习</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
