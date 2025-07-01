
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface MembershipModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipModal = ({ isOpen, onOpenChange }: MembershipModalProps) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const plans = [
    {
      id: "monthly",
      name: "月度会员",
      price: "¥198",
      period: "/月",
      originalPrice: "¥298",
      discount: "33% OFF",
      features: [
        "无限制观看所有课程",
        "下载课程离线观看",
        "专属学习社群",
        "1对1学习指导",
        "课程完成证书"
      ]
    },
    {
      id: "yearly",
      name: "年度会员",
      price: "¥1980",
      period: "/年",
      originalPrice: "¥2376",
      discount: "17% OFF",
      popular: true,
      features: [
        "月度会员所有权益",
        "专属VIP标识",
        "优先客服支持",
        "独家会员活动",
        "课程更新优先体验"
      ]
    },
    {
      id: "lifetime",
      name: "终身会员",
      price: "¥3980",
      period: "/终身",
      originalPrice: "¥5980",
      discount: "33% OFF",
      features: [
        "所有会员权益",
        "终身免费更新",
        "专属定制课程",
        "一对一导师指导",
        "职业规划咨询"
      ]
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowPayment(true);
  };

  const handleClose = () => {
    setShowPayment(false);
    setSelectedPlan("");
    onOpenChange(false);
  };

  const PaymentDialog = () => (
    <Dialog open={showPayment} onOpenChange={(open) => {
      if (!open) {
        setShowPayment(false);
        setSelectedPlan("");
      }
    }}>
      <DialogContent className="max-w-md bg-slate-800 border-slate-700 text-white">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-lg font-bold">支付订单</DialogTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowPayment(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="text-center space-y-6">
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <h3 className="text-white font-medium mb-2">
              {plans.find(p => p.id === selectedPlan)?.name}
            </h3>
            <div className="text-2xl font-bold text-green-400">
              {plans.find(p => p.id === selectedPlan)?.price}
              <span className="text-sm text-slate-400">
                {plans.find(p => p.id === selectedPlan)?.period}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="w-32 h-32 bg-gray-200 mx-auto mb-2 flex items-center justify-center">
              <div className="text-xs text-gray-600 text-center">
                二维码
                <br />
                扫码支付
              </div>
            </div>
            <p className="text-gray-600 text-sm">请使用微信或支付宝扫码支付</p>
          </div>

          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1 border-slate-600 text-slate-300"
              onClick={() => setShowPayment(false)}
            >
              取消支付
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleClose}
            >
              支付完成
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
          <div className="p-6">
            <DialogTitle className="text-2xl font-bold mb-2 text-center">
              选择您的会员套餐
            </DialogTitle>
            <p className="text-slate-400 text-center mb-8">
              解锁全部课程内容，享受专属学习体验
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative bg-slate-700/50 border transition-all hover:border-green-500 ${
                    plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-slate-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-600 text-white">最受欢迎</Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-3xl font-bold text-green-400">
                          {plan.price}
                        </span>
                        <span className="text-slate-400">{plan.period}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mt-1">
                        <span className="text-slate-500 line-through text-sm">
                          {plan.originalPrice}
                        </span>
                        <Badge variant="secondary" className="bg-red-600 text-white text-xs">
                          {plan.discount}
                        </Badge>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 mb-6"
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      立即开通
                    </Button>

                    <div className="space-y-3 text-left">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                * 所有套餐均支持7天无理由退款 | 24小时客服支持
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PaymentDialog />
    </>
  );
};

export default MembershipModal;
