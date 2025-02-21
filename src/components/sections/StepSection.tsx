import { ArrowRight, ListChecks } from 'lucide-react'

export const StepSection = () => {
    const steps = [
      {
        number: 1,
        title: "会員登録",
        // description: "メールアドレスと基本情報を入力するだけで、すぐに利用開始できます。クレジットカード情報は後からでもOK。",
        subText: "所要時間：約5分"
      },
      {
        number: 2,
        title: "案件の詳細登録",
        // description: "商品・サービスの情報、希望する投稿内容、予算などを登録。テンプレートに沿って入力するだけで簡単に作成できます。",
        subText: "募集条件や報酬も設定可能"
      },
      {
        number: 3,
        title: "インフルエンサーへ公開",
        // description: "登録した案件を公開すると、条件に合うインフルエンサーが閲覧可能に。興味を持ったインフルエンサーから応募が届きます。",
        subText: "最短即日から応募が届く可能性"
      },
      {
        number: 4,
        title: "インフルエンサーと直接やりとり",
        // description: "応募のあったインフルエンサーのプロフィールを確認し、メッセージで直接コミュニケーション。",
        subText: "スムーズな案件進行が可能に"
      },
      {
        number: 5,
        title: "投稿内容の確認と完了",
        // description: "インフルエンサーが作成した投稿内容を確認し、必要に応じて修正依頼も可能。承認後、実際の投稿へと進みます。",
        subText: "投稿後のレポートも確認可能"
      }
    ]
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 mb-16">
            <div className="flex items-center justify-center gap-3">
              <ListChecks className="w-10 h-10 text-[#ff0c86]" />
              <h2 className="text-3xl font-bold text-center">利用ステップ</h2>
            </div>
          </div>
  
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 relative">
                  {/* Step number */}
                  <div className="text-[#ff0c86] font-bold text-sm mb-2">
                    STEP {step.number}
                  </div>
                  {/* Card */}
                  <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {step.description}
                    </p>
                    <div className="text-xs text-[#ff0c86] font-medium">
                      {step.subText}
                    </div>
                  </div>
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <div className="bg-[#8BC34A] rounded-full p-1.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }