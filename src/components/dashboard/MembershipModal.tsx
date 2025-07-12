
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface MembershipModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipModal = ({ isOpen, onOpenChange }: MembershipModalProps) => {
  const { t, language } = useLanguage();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const plans = [
    {
      id: "monthly",
      name: language === 'zh' ? "月度会员" : "Monthly Membership",
      price: "¥198",
      period: language === 'zh' ? "/月" : "/month",
      originalPrice: "¥298",
      discount: "33% OFF",
      features: [
        language === 'zh' ? "无限制观看所有课程" : "Unlimited access to all courses",
        language === 'zh' ? "下载课程离线观看" : "Download courses for offline viewing",
        language === 'zh' ? "专属学习社群" : "Exclusive learning community",
        language === 'zh' ? "1对1学习指导" : "1-on-1 learning guidance",
        language === 'zh' ? "课程完成证书" : "Course completion certificates"
      ]
    },
    {
      id: "yearly",
      name: language === 'zh' ? "年度会员" : "Annual Membership",
      price: "¥1980",
      period: language === 'zh' ? "/年" : "/year",
      originalPrice: "¥2376",
      discount: "17% OFF",
      popular: true,
      features: [
        language === 'zh' ? "月度会员所有权益" : "All monthly membership benefits",
        language === 'zh' ? "专属VIP标识" : "Exclusive VIP badge",
        language === 'zh' ? "优先客服支持" : "Priority customer support",
        language === 'zh' ? "独家会员活动" : "Exclusive member events",
        language === 'zh' ? "课程更新优先体验" : "Priority access to course updates"
      ]
    },
    {
      id: "lifetime",
      name: language === 'zh' ? "终身会员" : "Lifetime Membership",
      price: "¥3980",
      period: language === 'zh' ? "/终身" : "/lifetime",
      originalPrice: "¥5980",
      discount: "33% OFF",
      features: [
        language === 'zh' ? "所有会员权益" : "All membership benefits",
        language === 'zh' ? "终身免费更新" : "Lifetime free updates",
        language === 'zh' ? "专属定制课程" : "Exclusive customized courses",
        language === 'zh' ? "一对一导师指导" : "One-on-one mentor guidance",
        language === 'zh' ? "职业规划咨询" : "Career planning consultation"
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
          <DialogTitle className="text-lg font-bold">{t('membership.paymentTitle')}</DialogTitle>
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
                 {language === 'zh' ? '二维码' : 'QR Code'}
                 <br />
                 {language === 'zh' ? '扫码支付' : 'Scan to Pay'}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{t('membership.paymentDesc')}</p>
          </div>

          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1 border-slate-600 text-slate-300"
              onClick={() => setShowPayment(false)}
            >
               {t('membership.cancelPayment')}
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleClose}
            >
               {t('membership.paymentComplete')}
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
              {t('membership.title')}
            </DialogTitle>
            <p className="text-slate-400 text-center mb-8">
              {t('membership.subtitle')}
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
                      <Badge className="bg-green-600 text-white">{t('membership.recommended')}</Badge>
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
                      {t('membership.orderNow')}
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
