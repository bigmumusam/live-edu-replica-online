const PlatformStats = () => {
  const stats = [
    { number: "50,000+", label: "活跃学员", icon: "👥" },
    { number: "1,000+", label: "精品课程", icon: "📚" },
    { number: "98%", label: "完成率", icon: "🎯" },
    { number: "24/7", label: "在线支持", icon: "🛟" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-slate-800/30 rounded-xl p-6 hover:bg-slate-700/30 transition-colors">
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PlatformStats;