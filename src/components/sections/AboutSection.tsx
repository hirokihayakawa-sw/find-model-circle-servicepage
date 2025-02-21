import Image from 'next/image'
import { Sparkles, Users, MessageCircle, Gift, Building2 } from 'lucide-react'

const snsIcons = [
  { id: 'instagram', icon: 'sns_ico_ig.webp', width: 60, height: 60 },
  { id: 'x', icon: 'sns_ico_x.webp', width: 60, height: 60 },
  { id: 'tiktok', icon: 'sns_ico_tk.webp', width: 60, height: 60 },
  { id: 'youtube', icon: 'sns_ico_yt.webp', width: 188, height: 43 }
] as const;

const NetworkIllustration = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* 装飾的な円と点 */}
      <div className="absolute w-72 h-72 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow"></div>
      <div className="absolute w-96 h-96 border border-gray-100 rounded-full"></div>

      {/* 接続線 */}
      <svg 
        className="absolute w-full h-full" 
        viewBox="0 0 400 400" 
        style={{ 
          pointerEvents: 'none',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = i * 45;
          // 中心点を200,200として計算
          const x1 = Math.cos((angle * Math.PI) / 180) * 144 + 200;
          const y1 = Math.sin((angle * Math.PI) / 180) * 144 + 200;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2="200"
              y2="200"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="4"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* 中央のノード */}
      <div className="absolute z-20 w-16 h-16 bg-[#ff0c86] rounded-full flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 bg-[#ff0c86] rounded-full animate-ping-slow opacity-75"></div>
        <Building2 className="w-8 h-8 text-white relative z-10" />
      </div>
      
      {/* サテライトノード - ホバーとパルスエフェクト追加 */}
      {[...Array(8)].map((_, i) => {
        const angle = i * 45;
        return (
          <div
            key={i}
            className={`absolute z-10 rounded-full transition-all duration-300
              hover:scale-110 hover:shadow-lg group`}
            style={{
              transform: `rotate(${angle}deg) translateX(144px) rotate(-${angle}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center
              ${['bg-blue-500', 'bg-yellow-400', 'bg-green-500', 'bg-orange-500'][i % 4]}
              animate-pulse shadow-md group-hover:shadow-xl transition-shadow`}
            >
              <Users className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" />
            </div>
          </div>
        );
      })}
      
      {/* 背景の装飾 */}
      {[...Array(12)].map((_, i) => {
        const angle = i * 30;
        return (
          <div
            key={`dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-gray-200 animate-pulse"
            style={{
              transform: `rotate(${angle}deg) translateX(192px)`,
              transformOrigin: 'center center'
            }}
          />
        );
      })}
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center gap-3 mb-16">
          <Sparkles className="w-10 h-10 text-[#ff0c86] animate-pulse" />
          <h2 className="text-4xl font-bold text-center">Find Model Circleとは？</h2>
          <div className="absolute -z-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* 説明文とネットワーク図を横並びに */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="relative p-8 rounded-3xl bg-white shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左側：説明文 */}
              <div className="relative">
                <div className="absolute -z-10 left-0 top-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl"></div>
                <div className="space-y-8">
                  {/* メインコピー */}
                  <h3 className="text-3xl font-bold text-[#ff0c86] leading-relaxed">
                    企業とインフルエンサーをつなぐ
                    <br />
                    マッチングプラットフォーム
                  </h3>
                  
                  {/* サブコピーと説明文 */}
                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed text-gray-700">
                      案件を無制限に掲載可能でインフルエンサーとの
                      <br />
                      メッセージのやり取りも直接行えるため
                      <br />
                      <span className="font-medium text-[#ff0c86]">
                        スピーディーで柔軟な案件進行
                      </span>
                      が実現できます。
                    </p>
                  </div>
                  
                  {/* SNSアイコン部分 */}
                  <div className="relative pt-6">
                    <p className="text-lg font-medium text-gray-600 mb-4">対応SNS</p>
                    <div className="flex gap-8">
                      {snsIcons.map(({ id, icon, width, height }) => (
                        <div key={id} className="flex items-center">
                          <Image 
                            src={`/images/${icon}`} 
                            alt={id} 
                            width={width} 
                            height={height} 
                            className="object-contain" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：ネットワーク図 */}
              <div className="relative">
                <NetworkIllustration />
              </div>
            </div>
          </div>
        </div>

        {/* 3カラム特徴部分 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <Users className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">本人確認済みの<br />インフルエンサー</h3>
              <p className="text-gray-600">
                インフルエンサーは本人確認認証済みで、安心できるユーザーのみが利用可能
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <MessageCircle className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">インフルエンサーと<br />直接やりとり</h3>
              <p className="text-gray-600">
                インフルエンサーと直接やり取りができて、気軽にコミュニケーションが取れます
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <Gift className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">柔軟な案件対応</h3>
              <p className="text-gray-600">
                掲載案件数の上限なし、ギフティングのみでの依頼も可能！企業様の要望に柔軟に対応します
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}