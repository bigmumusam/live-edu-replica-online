
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface MembershipModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipModal = ({ isOpen, onOpenChange }: MembershipModalProps) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      id: "free",
      title: "免费",
      price: "0",
      period: "每月",
      subtitle: "永久",
      features: [
        "最多同时参加3个俱乐部",
        "1V1 辅导老师一周2次每30分钟",
        "大学生/行业内人士讲座一年2次"
      ],
      color: "border-slate-600",
      buttonColor: "bg-slate-600 hover:bg-slate-700"
    },
    {
      id: "monthly",
      title: "收费版",
      price: "198",
      period: "每月 (包月)",
      subtitle: "包月可随时取消",
      features: [
        "同时参加俱乐部的个数没有限制",
        "1V1 辅导老师一周6次每90分钟",
        "大学生/行业内人士讲座一年不限次",
        "积分收集效率 *1.1倍",
        "赠送250积分"
      ],
      color: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
      highlighted: true
    },
    {
      id: "halfyear",
      title: "收费版",
      price: "488",
      period: "每季 (包季)",
      subtitle: "包月可随时取消",
      features: [
        "同时参加俱乐部的个数没有限制",
        "1V1 辅导老师一周6次每90分钟",
        "大学生/行业内人士讲座一年不限次",
        "积分收集效率 *1.1倍",
        "赠送250积分"
      ],
      color: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      id: "yearly",
      title: "收费版",
      price: "1288",
      period: "每年 (包年)",
      subtitle: "包季可随时取消",
      features: [
        "同时参加俱乐部的个数没有限制",
        "1V1 辅导老师一周6次每90分钟",
        "大学生/行业内人士讲座一年不限次",
        "积分收集效率 *1.2倍",
        "赠送500积分"
      ],
      color: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ];

  const handlePlanSelect = (planId: string, price: string) => {
    setSelectedPlan(price);
    setShowPayment(true);
  };

  if (showPayment) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
          <DialogHeader className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 text-slate-400 hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-center text-lg">扫码支付 {selectedPlan} 元</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 bg-white p-4 rounded-lg flex items-center justify-center">
              <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs">
                QR Code
              </div>
            </div>
            <p className="text-slate-300 text-sm">请扫码完成支付</p>
            <div className="text-center">
              <p className="text-green-400 text-sm cursor-pointer hover:underline">
                你已同意《Tourloop 付费服务协议》（含自动续费条款）》
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-6xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 text-slate-400 hover:text-white"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-center text-2xl text-green-400 mb-2">
            订阅Tourloop,解锁更多权益
          </DialogTitle>
          <p className="text-center text-slate-300">选择适合你的会员套餐</p>
        </DialogHeader>
        
        <div className="grid grid-cols-4 gap-6 mt-6">
          {plans.map((plan) => (
            <Card key={plan.id} className={`bg-slate-700/50 ${plan.color} ${plan.highlighted ? 'ring-2 ring-green-500' : ''}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.title}</h3>
                  <div className="mb-2">
                    <span className="text-green-400 text-sm">¥</span>
                    <span className="text-green-400 text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-300 text-sm ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{plan.subtitle}</p>
                </div>
                
                <div className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  className={`w-full ${plan.buttonColor} text-white`}
                  onClick={() => handlePlanSelect(plan.id, plan.price)}
                >
                  立即订阅
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipModal;
