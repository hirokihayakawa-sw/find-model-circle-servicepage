import Image from 'next/image'
import { Sparkles, Users, MessageCircle, Gift, Building2 } from 'lucide-react'

const snsIcons = [
  { id: 'instagram', icon: 'sns_ico_ig.webp', width: 60, height: 60 },
  { id: 'x', icon: 'sns_ico_x.webp', width: 60, height: 60 },
  { id: 'tiktok', icon: 'sns_ico_tk.webp', width: 60, height: 60 },
  { id: 'youtube', icon: 'sns_ico_yt.webp', width: 188, height: 43 }
] as const;

// 共通のSVGグラデーション定義
const GradientDefs = () => (
  <defs>
    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ff0c86" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#7928ca" stopOpacity="0.3" />
    </linearGradient>
  </defs>
);

// 共通のネットワークノード生成関数と装飾ドット生成関数を統合・簡略化
const createNetworkElements = (
  count: number, 
  radius: number, 
  options: { nodeSize: number, iconSize: number, dotRadius: number, dotSize: string }
) => {
  const colors = [
    'bg-gradient-to-r from-blue-500 to-cyan-400',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-green-500 to-emerald-400',
    'bg-gradient-to-r from-purple-500 to-indigo-500'
  ];
  
  // ノードとドットを一度に生成
  return {
    nodes: [...Array(count)].map((_, i) => {
      const angle = i * (360 / count);
      return (
        <div
          key={i}
          className="absolute z-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
          style={{
            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            transformOrigin: 'center center'
          }}
        >
          <div className={`w-${options.nodeSize} h-${options.nodeSize} rounded-full flex items-center justify-center ${colors[i % colors.length]} shadow-md group-hover:shadow-xl transition-shadow`}>
            <Users className={`w-${options.iconSize} h-${options.iconSize} text-white transform group-hover:scale-110 transition-transform`} />
          </div>
        </div>
      );
    }),
    
    dots: [...Array(count + 4)].map((_, i) => {
      const angle = i * (360 / (count + 4));
      return (
        <div
          key={`dot-${i}`}
          className={`absolute ${options.dotSize} rounded-full bg-pink-200 animate-pulse`}
          style={{
            transform: `rotate(${angle}deg) translateX(${options.dotRadius}px)`,
            transformOrigin: 'center center'
          }}
        />
      );
    }),
    
    lines: [...Array(count)].map((_, i) => {
      const angle = i * (360 / count);
      const x1 = Math.cos((angle * Math.PI) / 180) * radius + 200;
      const y1 = Math.sin((angle * Math.PI) / 180) * radius + 200;
      return (
        <line
          key={`line-${i}`}
          x1={x1}
          y1={y1}
          x2="200"
          y2="200"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          strokeDasharray="4"
          className="animate-pulse"
        />
      );
    })
  };
};

// NetworkIllustrationコンポーネントを統合
const NetworkIllustration = () => {
  // モバイル用とデスクトップ用の設定
  const mobileElements = createNetworkElements(8, 100, {
    nodeSize: 8, 
    iconSize: 4, 
    dotRadius: 130, 
    dotSize: "w-1.5 h-1.5"
  });
  
  const desktopElements = createNetworkElements(8, 144, {
    nodeSize: 12, 
    iconSize: 6, 
    dotRadius: 192, 
    dotSize: "w-2 h-2"
  });

  return (
    <>
      {/* モバイル版 */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden md:hidden">
        <div className="absolute w-48 h-48 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow opacity-70"></div>
        <div className="absolute w-64 h-64 border border-gray-100 rounded-full"></div>
        <div className="absolute w-[300px] h-[300px] border border-pink-100 rounded-full animate-pulse-slow"></div>

        <svg className="absolute w-full h-full" viewBox="0 0 400 400" 
          style={{ pointerEvents: 'none', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%' }}>
          {mobileElements.lines}
          <circle cx="200" cy="200" r="100" fill="none" stroke="#f9a8d4" strokeWidth="1" strokeDasharray="5,5" className="opacity-40" />
          <GradientDefs />
        </svg>

        <div className="absolute z-20 w-12 h-12 bg-gradient-to-r from-[#ff0c86] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 bg-[#ff0c86] rounded-full animate-ping-slow opacity-75"></div>
          <Building2 className="w-6 h-6 text-white relative z-10" />
        </div>
        
        {mobileElements.nodes}
        {mobileElements.dots}
      </div>

      {/* デスクトップ版 */}
      <div className="relative w-full h-[400px] flex items-center justify-center hidden md:flex">
        <div className="absolute w-72 h-72 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow opacity-70"></div>
        <div className="absolute w-96 h-96 border border-gray-100 rounded-full"></div>
        <div className="absolute w-[450px] h-[450px] border border-pink-100 rounded-full animate-pulse-slow"></div>

        <svg className="absolute w-full h-full" viewBox="0 0 400 400" 
          style={{ pointerEvents: 'none', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          {desktopElements.lines}
          <circle cx="200" cy="200" r="144" fill="none" stroke="#f9a8d4" strokeWidth="1" strokeDasharray="5,5" className="opacity-40" />
          <GradientDefs />
        </svg>

        <div className="absolute z-20 w-16 h-16 bg-gradient-to-r from-[#ff0c86] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 bg-[#ff0c86] rounded-full animate-ping-slow opacity-75"></div>
          <Building2 className="w-8 h-8 text-white relative z-10" />
        </div>
        
        {desktopElements.nodes}
        {desktopElements.dots}
      </div>
    </>
  );
};

// 特徴ポイントコンポーネント
const FeaturePoint = ({ number, text }: { number: number, text: string }) => (
  <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-white p-3 rounded-xl">
    <div className="w-8 h-8 rounded-full bg-[#ff0c86] flex items-center justify-center">
      <span className="text-white font-bold">{number}</span>
    </div>
    <p className="text-lg font-medium text-gray-800">{text}</p>
  </div>
);

// SNSアイコンセクション
const SnsIconsSection = () => (
  <div className="relative pt-6">
    <p className="text-lg font-medium text-gray-700 mb-4 flex items-center">
      <span className="w-2 h-8 bg-[#ff0c86] rounded-full mr-3"></span>
      対応SNS
    </p>
    <div className="flex gap-8 items-center">
      {snsIcons.map(({ id, icon, width, height }) => (
        <div key={id} className="flex items-center hover:scale-105 transition-transform">
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
);

// メインコンポーネント
export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center gap-3 mb-16">
          <div className="absolute -z-10 w-64 h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
          <Sparkles className="w-10 h-10 text-[#ff0c86] animate-pulse" />
          <h2 className="md:text-4xl font-bold text-center hidden md:block">Find Model Circleとは？</h2>
          <h2 className="text-2xl font-bold text-center flex items-center md:hidden">
            Find Model Circleとは？
          </h2>
        </div>

        {/* 説明文とネットワーク図を横並びに */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="relative p-8 md:p-12 rounded-3xl bg-white shadow-xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-3xl"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              {/* 左側：説明文 */}
              <div className="relative">
                <div className="absolute -z-10 left-0 top-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl"></div>
                <div className="space-y-8">
                  {/* メインコピー */}
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff0c86] to-[#ff8c00] leading-relaxed">
                    企業とインフルエンサーをつなぐ<br />マッチングプラットフォーム
                  </h3>
                  
                  {/* サブコピーと説明文 */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <FeaturePoint number={1} text="月額5万円で案件出し放題" />
                      <FeaturePoint number={2} text="インフルエンサーと何人とつながっても定額" />
                      <FeaturePoint number={3} text="直接メッセージでやりとり可能" />
                    </div>
                    
                    <p className="text-lg leading-relaxed text-gray-700 pl-4 border-l-4 border-[#ff0c86]">
                      本人確認済みのインフルエンサーが商品を体験し、SNS投稿で口コミ拡散。
                      <br />
                      シンプルな仕組みで、<span className="font-bold text-[#ff0c86]">ブランド価値向上・認知拡大</span>を目指します。
                    </p>
                  </div>
                  
                  {/* SNSアイコン部分 */}
                  <SnsIconsSection />
                </div>
              </div>

              {/* 右側：ネットワーク図 */}
              <div className="relative">
                <NetworkIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}