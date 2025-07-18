import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { showToast } from "@/components/shared/Toast";
import { useLanguage } from "@/contexts/LanguageContext";

const MembershipPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const { t, language } = useLanguage();

  const freeFeatures = [
    language === 'zh' ? "最多同时参加3个俱乐部" : "Join up to 3 clubs simultaneously",
    language === 'zh' ? "1V1 辅导老师一周次约30分钟" : "1V1 tutor sessions once a week for 30 minutes",
    language === 'zh' ? "大学生/行业内人士讲座一年2次" : "University student/industry professional lectures 2 times per year"
  ];

  const plans = [
    {
      id: "monthly",
      name: language === 'zh' ? "收费版" : "Paid Version",
      price: "198",
      period: language === 'zh' ? "每月" : "Monthly",
      originalPrice: language === 'zh' ? "包月" : "Monthly Plan",
      features: [
        language === 'zh' ? "同时参加俱乐部的个数没有限制" : "No limit on number of clubs to join",
        language === 'zh' ? "1V1 辅导老师一周6次约90分钟" : "1V1 tutor sessions 6 times per week for 90 minutes",
        language === 'zh' ? "大学生/行业内人士讲座一年不限次" : "University student/industry professional lectures unlimited times per year",
        language === 'zh' ? "积分收集效率 +1.1倍" : "Points collection efficiency +1.1x",
        language === 'zh' ? "附赠250积分" : "Bonus 250 points"
      ]
    },
    {
      id: "quarterly",
      name: language === 'zh' ? "收费版" : "Paid Version",
      price: "488",
      period: language === 'zh' ? "每季" : "Quarterly",
      originalPrice: language === 'zh' ? "包季" : "Quarterly Plan",
      popular: true,
      features: [
        language === 'zh' ? "同时参加俱乐部的个数没有限制" : "No limit on number of clubs to join",
        language === 'zh' ? "1V1 辅导老师一周6次约90分钟" : "1V1 tutor sessions 6 times per week for 90 minutes",
        language === 'zh' ? "大学生/行业内人士讲座一年不限次" : "University student/industry professional lectures unlimited times per year",
        language === 'zh' ? "积分收集效率 +1.1倍" : "Points collection efficiency +1.1x",
        language === 'zh' ? "附赠250积分" : "Bonus 250 points"
      ]
    },
    {
      id: "yearly",
      name: language === 'zh' ? "收费版" : "Paid Version",
      price: "1288",
      period: language === 'zh' ? "每年" : "Yearly",
      originalPrice: language === 'zh' ? "包年" : "Yearly Plan",
      features: [
        language === 'zh' ? "同时参加俱乐部的个数没有限制" : "No limit on number of clubs to join",
        language === 'zh' ? "1V1 辅导老师一周6次约90分钟" : "1V1 tutor sessions 6 times per week for 90 minutes",
        language === 'zh' ? "大学生/行业内人士讲座一年不限次" : "University student/industry professional lectures unlimited times per year",
        language === 'zh' ? "积分收集效率 +1.2倍" : "Points collection efficiency +1.2x",
        language === 'zh' ? "附赠500积分" : "Bonus 500 points"
      ]
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setSelectedPlan("");
    showToast.success(t('membership.successMessage'));
  };

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header title={t('membership.title')} />
        
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                {t('membership.subtitle')}
              </h1>
            </div>

            {/* Free Plan */}
            <div className="mb-8">
              <Card className="bg-slate-800/50 border-slate-700 max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{t('membership.free')}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-400">¥0</span>
                    <span className="text-slate-400 ml-2">{t('membership.forever')}</span>
                  </div>
                  <div className="space-y-3 text-left mb-6">
                    {freeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                    disabled
                  >
                    {t('membership.currentPlan')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Paid Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative bg-slate-800/50 border transition-all hover:border-green-500 ${
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
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-lg text-slate-400">¥</span>
                        <span className="text-4xl font-bold text-green-400">
                          {plan.price}
                        </span>
                        <span className="text-slate-400">{plan.period} ({plan.originalPrice})</span>
                      </div>
                      <div className="text-slate-500 text-sm mt-1">
                        {t('membership.canCancel')}
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
          </div>
        </main>
      </div>

      {/* Payment Modal */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md bg-slate-800 border-slate-700 text-white">
          <DialogTitle className="sr-only">支付订单</DialogTitle>
          <DialogDescription className="sr-only">请确认支付信息。</DialogDescription>
          <div className="text-center space-y-6">
            <h3 className="text-lg font-bold">{t('membership.paymentTitle')}</h3>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h4 className="text-white font-medium mb-2">
                {plans.find(p => p.id === selectedPlan)?.name}
              </h4>
              <div className="text-2xl font-bold text-green-400">
                ¥{plans.find(p => p.id === selectedPlan)?.price}
                <span className="text-sm text-slate-400 ml-1">
                  {plans.find(p => p.id === selectedPlan)?.period}
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-2 flex items-center justify-center">
                <div className="text-xs text-gray-600 text-center">
                  {t('membership.qrCode')}
                  <br />
                  {t('membership.scanToPay')}
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
                onClick={handlePaymentComplete}
              >
                {t('membership.paymentComplete')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MembershipPage;