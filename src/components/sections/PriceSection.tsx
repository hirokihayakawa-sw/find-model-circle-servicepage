import { FC } from 'react';
import { Coins } from 'lucide-react';

type PlanType = {
  name: string;
  price: string;
  description: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  buttonText: string;
  isPopular?: boolean;
};

export const PriceSection: FC = () => {
  const plans: PlanType[] = [
    {
      name: "ライトプラン",
      price: "¥20,000",
      description: "お試し利用に最適",
      features: [
        { included: true, text: "月3件まで案件掲載可能" },
        { included: true, text: "インフルエンサーへの案件が出し放題" },
        { included: false, text: "複数ブランド管理" },
      ],
      buttonText: "会員登録"
    },
    {
      name: "スタンダードプラン",
      price: "¥50,000",
      description: "案件掲載し放題",
      features: [
        { included: true, text: "案件掲載無制限" },
        { included: true, text: "インフルエンサーへの案件が出し放題" },
        { included: true, text: "複数ブランド管理（3ブランドまで）" },
      ],
      buttonText: "会員登録",
      isPopular: true
    },
    {
      name: "カスタムプラン",
      price: "要相談",
      description: "大規模展開向け",
      features: [
        { included: true, text: "案件掲載無制限" },
        { included: true, text: "インフルエンサーへの案件が出し放題" },
        { included: true, text: "複数ブランド管理（無制限）" },
        { included: true, text: "カスタムサポート" },
      ],
      buttonText: "お問い合わせ"
    }
  ];

  return (
    <section id="price" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Coins className="w-10 h-10 text-[#ff0c86]" />
          <h2 className="text-3xl font-bold text-center">料金プラン</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                plan.isPopular ? "bg-pink-50 transform scale-105 border-2 border-[#ff0c86]" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#ff0c86] text-white text-sm px-4 py-1 rounded-full">人気</span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.isPopular ? "text-[#ff0c86]" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "要相談" && <span className="text-gray-600">/月</span>}
                </div>
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center gap-2 text-sm ${!feature.included ? "text-gray-400" : ""}`}>
                    <span className={feature.included ? "text-green-500" : ""}>
                      {feature.included ? "✓" : "×"}
                    </span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full ${
                  plan.isPopular
                    ? "bg-[#ff0c86] text-white hover:bg-pink-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                } px-6 py-3 rounded-full font-bold transition-colors`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};