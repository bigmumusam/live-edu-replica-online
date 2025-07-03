const LearningPaths = () => {
  const learningPaths = [
    { icon: "💻", title: "编程开发", desc: "掌握前沿技术", courses: "528门课程", color: "from-blue-500 to-cyan-500" },
    { icon: "🎨", title: "设计创意", desc: "释放创造力", courses: "342门课程", color: "from-purple-500 to-pink-500" },
    { icon: "📊", title: "数据科学", desc: "洞察数据价值", courses: "256门课程", color: "from-green-500 to-teal-500" },
    { icon: "🤖", title: "人工智能", desc: "拥抱AI时代", courses: "189门课程", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-3">选择你的学习路径</h2>
        <p className="text-gray-400 text-lg">根据你的目标和兴趣，找到最适合的课程</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningPaths.map((path, index) => (
          <div key={index} className="group cursor-pointer">
            <div className={`relative bg-gradient-to-br ${path.color} p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{path.title}</h3>
              <p className="text-white/80 text-sm mb-3">{path.desc}</p>
              <p className="text-white/60 text-xs">{path.courses}</p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;