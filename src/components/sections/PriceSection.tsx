import { FC } from 'react';
import { Coins } from 'lucide-react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
};

export const PriceSection: FC = () => {
  const plans: Plan[] = [
    {
      name: "月額プラン",
      price: "50,000",
      features: [
        { text: "インフルエンサーへの案件が出し放題", included: true },
        { text: "発行元は3ブランドまで設定可能", included: true },
        { text: "基本的なマッチング機能の利用", included: true },
        { text: "ブランド数の拡張", included: false },
        { text: "優先的なマッチング機能", included: false }
      ],
      buttonText: "会員登録",
      isPopular: true
    },
    {
      name: "カスタムプラン",
      price: "要相談",
      features: [
        { text: "月額プランの全機能を利用可能", included: true },
        { text: "ブランド数無制限で設定可能", included: true },
        { text: "優先的なマッチング機能の利用", included: true },
        { text: "実績あるインフルエンサーとの優先マッチング", included: true },
        { text: "企業様に合わせたカスタマイズプラン", included: true }
      ],
      buttonText: "お問い合わせ"
    }
  ];

  const PlanCard: FC<{ plan: Plan }> = ({ plan }) => (
    <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
      plan.isPopular ? "border-2 border-[#ff0c86] relative transform hover:-translate-y-1" : ""
    }`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#ff0c86] text-white text-sm px-4 py-1 rounded-full">おすすめ</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          {plan.price === "要相談" ? (
            <span className="text-3xl font-bold">{plan.price}</span>
          ) : (
            <>
              <span className="text-5xl font-bold">{plan.price}</span>
              <span className="text-2xl">円</span>
              <span className="text-gray-600 text-sm">(税別)</span>
            </>
          )}
        </div>
      </div>
      <ul className="space-y-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`text-lg mt-0.5 ${
              feature.included 
                ? (plan.isPopular ? "text-[#ff0c86]" : "text-gray-800")
                : "text-gray-400"
            }`}>
              {feature.included ? "✓" : "-"}
            </span>
            <span className={!feature.included ? "text-gray-400" : ""}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button className={`w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 mt-8 ${
        plan.isPopular
          ? "bg-[#ff0c86] text-white hover:bg-pink-600 hover:shadow-lg"
          : "bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg"
      }`}>
        {plan.buttonText}
      </button>
    </div>
  );

  return (
    <section id="price" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Coins className="w-10 h-10 text-[#ff0c86]" />
          <h2 className="text-3xl font-bold">料金プラン</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};