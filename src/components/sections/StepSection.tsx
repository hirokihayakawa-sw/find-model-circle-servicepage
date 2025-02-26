import { ArrowRightCircle, UserPlus, ClipboardList, Share2, MessageCircle, CheckCircle } from 'lucide-react'

type Step = {
  number: string;
  title: string;
  subText: string;
  icon: any;
  isHighlight?: boolean;
};

const StepCard = ({ step, index, totalSteps }: { step: Step; index: number; totalSteps: number }) => (
  <div className="relative flex-1 group">
    {/* Background Gradient */}
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br 
      ${step.isHighlight 
        ? 'from-pink-100 via-white to-pink-50' 
        : 'from-gray-50 via-white to-gray-50'} 
      -z-10 transform transition-transform duration-300 group-hover:scale-105`}
    />
    
    {/* Content Container */}
    <div className="p-6 flex flex-col items-center">
      <span className="text-7xl font-black bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
        {step.number}
      </span>
      
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4
        ${step.isHighlight ? 'bg-pink-500' : 'bg-gray-700'} 
        transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
        <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-bold mb-2 whitespace-nowrap">{step.title}</h3>
      <p className={`text-sm ${step.isHighlight ? 'text-pink-500 font-bold' : 'text-gray-600'}`}>
        {step.subText}
      </p>
    </div>

    {/* Connecting Arrow */}
    {index < totalSteps - 1 && (
      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
        <div className="w-6 h-6 rotate-45 border-t-2 border-r-2 border-gray-200" />
      </div>
    )}
  </div>
);

export const StepSection = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "会員登録",
      subText: "誰でも簡単登録",
      icon: UserPlus
    },
    {
      number: "02",
      title: "案件登録",
      subText: "シンプルな項目で簡単登録",
      icon: ClipboardList
    },
    {
      number: "03",
      title: "インフルエンサーへ公開",
      subText: "最短即日でマッチング開始",
      icon: Share2,
      isHighlight: true
    },
    {
      number: "04",
      title: "メッセージ",
      subText: "直接やりとり",
      icon: MessageCircle
    },
    {
      number: "05",
      title: "投稿完了",
      subText: "投稿確認もお手軽で簡単",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <ArrowRightCircle className="w-10 h-10 text-pink-500" />
          <h2 className="text-3xl font-bold">ご利用の流れ</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} totalSteps={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
};