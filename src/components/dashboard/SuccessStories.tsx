const SuccessStories = () => {
  const successStories = [
    { name: "李明", role: "全栈工程师", company: "字节跳动", avatar: "👨‍💻", story: "从零基础到大厂工程师", growth: "+300% 薪资增长" },
    { name: "王小雅", role: "UI设计师", company: "腾讯", avatar: "👩‍🎨", story: "设计思维的完美转变", growth: "6个月转行成功" },
    { name: "张浩", role: "数据科学家", company: "阿里巴巴", avatar: "👨‍🔬", story: "AI让我重新定义可能", growth: "获得业界认可" }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/20">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-3">学员成功故事</h3>
        <p className="text-gray-300">看看他们是如何通过学习改变职业生涯的</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successStories.map((success, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{success.avatar}</div>
              <div>
                <h4 className="text-white font-semibold">{success.name}</h4>
                <p className="text-gray-400 text-sm">{success.role} @ {success.company}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">"{success.story}"</p>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-2">
              <span className="text-green-400 text-xs font-semibold">{success.growth}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;