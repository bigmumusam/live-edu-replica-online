import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Video, MessageCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";

const LiveStreamPage = () => {
  const [currentParticipants] = useState(15);

  const participants = [
    { id: 1, name: "Willium", avatar: "bg-blue-500" },
    { id: 2, name: "Amel", avatar: "bg-green-500" },
    { id: 3, name: "You", avatar: "bg-purple-500" },
    { id: 4, name: "Robbert", avatar: "bg-orange-500" },
  ];

  const learningPoints = [
    "Setting up the environment",
    "Advanced HTML Practices", 
    "Build a portfolio website",
    "Responsive Designs",
    "Understand HTML Programming",
    "Code HTML",
    "Start building beautiful websites"
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="行业知识直播 8:00-10:00" />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Video Section */}
            <div className="lg:col-span-3">
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <div className="relative h-96 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                  {/* Video placeholder with instructor */}
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Video className="h-16 w-16" />
                    </div>
                    <h3 className="text-xl font-bold">Nicholas Strattenberg</h3>
                    <p className="text-white/80">正在直播中...</p>
                  </div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">● LIVE</Badge>
                  </div>
                  
                  {/* Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                      🎤
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                      📹
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      📞
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                      💬
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                      🖥️
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Course Description */}
              <Card className="bg-slate-800/50 border-slate-700 mt-6">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold text-lg mb-4">讲座简介</h3>
                  <p className="text-slate-300 mb-6">
                    Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. 
                    Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt 
                    turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque 
                    luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, 
                    consequat ac magna quis, facilisis vehicula neque.
                  </p>
                  
                  <h4 className="text-white font-semibold mb-3">你将学习到:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {learningPoints.map((point, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Section */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-slate-700 h-96">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">Chat</h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs">All Chat</Button>
                      <Button size="sm" variant="outline" className="text-xs">Group Chat</Button>
                      <Button size="sm" className="text-xs bg-blue-600">Participants</Button>
                    </div>
                  </div>
                  
                  {/* Participants count */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-white text-sm">在线人数: {currentParticipants}</span>
                  </div>
                  
                  {/* Participants grid */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {Array(12).fill(0).map((_, index) => {
                      const participant = participants[index % participants.length];
                      return (
                        <div key={index} className="text-center">
                          <div className={`w-10 h-10 ${participant.avatar} rounded-full mx-auto mb-1 flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">
                              {participant.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-white text-xs">{participant.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Chat messages area */}
                  <div className="flex-1 bg-slate-700/30 rounded p-2 mb-3">
                    <div className="text-slate-400 text-sm text-center">
                      聊天消息将在这里显示...
                    </div>
                  </div>
                  
                  {/* Message input */}
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="输入消息..."
                      className="flex-1 bg-slate-700 border-slate-600 rounded px-3 py-1 text-white text-sm"
                    />
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LiveStreamPage;