import { Button } from "@/components/ui/button";

const BottomCTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>
      <div className="relative">
        <h3 className="text-3xl font-bold text-white mb-4">准备好开始你的学习之旅了吗？</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          加入我们的学习社区，获得个性化学习路径和专业指导
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full">
            立即开始免费试学
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
            了解更多详情
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;