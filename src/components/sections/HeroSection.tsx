'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[670px] overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100">
      {/* 波形の背景 - アニメーション付き */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 z-0">
        {/* 波形のスクロールコンテナ - 一番下の波 */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            {/* 最初の波 */}
            <svg className="w-1/2 h-full animate-scroll-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.1)" d="M0,160 C120,200 240,240 360,240 C480,240 600,200 720,200 C840,200 960,240 1080,240 C1200,240 1320,200 1380,180 C1410,170 1425,165 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            {/* 繰り返し用の波 */}
            <svg className="w-1/2 h-full animate-scroll-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.1)" d="M0,160 C120,200 240,240 360,240 C480,240 600,200 720,200 C840,200 960,240 1080,240 C1200,240 1320,200 1380,180 C1410,170 1425,165 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
        
        {/* 波形のスクロールコンテナ - 中間の波 */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            {/* 最初の波 */}
            <svg className="w-1/2 h-full animate-scroll-medium" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.15)" d="M0,192 C30,185 60,175 90,170 C120,165 150,160 180,150 C210,140 240,135 270,128 C360,128 450,160 540,160 C630,160 720,128 810,128 C900,128 990,160 1080,160 C1170,160 1260,128 1350,128 C1380,128 1410,144 1425,152 C1432,156 1436,158 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            {/* 繰り返し用の波 - 左端を調整 */}
            <svg className="w-1/2 h-full animate-scroll-medium" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.15)" d="M0,160 C30,152 60,144 90,140 C120,136 150,132 180,130 C210,128 240,128 270,128 C360,128 450,160 540,160 C630,160 720,128 810,128 C900,128 990,160 1080,160 C1170,160 1260,128 1350,128 C1380,128 1410,144 1425,152 C1432,156 1436,158 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
        
        {/* 波形のスクロールコンテナ - 一番上の波 */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            {/* 最初の波 */}
            <svg className="w-1/2 h-full animate-scroll-fast" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.2)" d="M0,224 C60,192 120,160 180,160 C240,160 300,192 360,192 C420,192 480,160 540,160 C600,160 660,192 720,192 C780,192 840,160 900,160 C960,160 1020,192 1080,192 C1140,192 1200,160 1260,160 C1320,160 1380,192 1410,208 C1425,216 1432,220 1440,224 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            {/* 繰り返し用の波 */}
            <svg className="w-1/2 h-full animate-scroll-fast" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.2)" d="M0,224 C60,192 120,160 180,160 C240,160 300,192 360,192 C420,192 480,160 540,160 C600,160 660,192 720,192 C780,192 840,160 900,160 C960,160 1020,192 1080,192 C1140,192 1200,160 1260,160 C1320,160 1380,192 1410,208 C1425,216 1432,220 1440,224 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 上部の装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
        <div className="absolute top-0 w-[200%] h-full flex">
          <svg className="w-1/2 h-full animate-scroll-slow-reverse" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255, 12, 134, 0.08)" d="M0,96 C60,128 120,160 180,160 C240,160 300,128 360,128 C420,128 480,160 540,160 C600,160 660,128 720,128 C780,128 840,160 900,160 C960,160 1020,128 1080,128 C1140,128 1200,160 1260,160 C1320,160 1380,128 1410,112 C1425,104 1432,100 1440,96 L1440,0 C1440,0 1410,0 1380,0 C1320,0 1260,0 1200,0 C1080,0 960,0 840,0 C720,0 600,0 480,0 C360,0 240,0 120,0 C60,0 30,0 0,0 Z"></path>
          </svg>
          <svg className="w-1/2 h-full animate-scroll-slow-reverse" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255, 12, 134, 0.08)" d="M0,96 C60,128 120,160 180,160 C240,160 300,128 360,128 C420,128 480,160 540,160 C600,160 660,128 720,128 C780,128 840,160 900,160 C960,160 1020,128 1080,128 C1140,128 1200,160 1260,160 C1320,160 1380,128 1410,112 C1425,104 1432,100 1440,96 L1440,0 C1440,0 1410,0 1380,0 C1320,0 1260,0 1200,0 C1080,0 960,0 840,0 C720,0 600,0 480,0 C360,0 240,0 120,0 C60,0 30,0 0,0 Z"></path>
          </svg>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* 左側のテキストコンテンツ */}
          <div className="w-full md:w-[42%] md:ml-4 lg:ml-12 text-left md:pr-4 pt-16 md:pt-0">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* メインの見出し */}
              <div className="relative mb-6">
                <div className="absolute -top-14 -left-12 transform -rotate-6">
                  <div className="relative">
                    <div className="bg-white px-4 py-2 rounded-full border-2 border-[#ff0c86] shadow-md">
                      <p className="text-sm font-bold text-[#ff0c86]">SNSで話題をつくる</p>
                    </div>
                    <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white border-r-2 border-b-2 border-[#ff0c86] transform rotate-45"></div>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                    <span className="block mb-1">直接繋がる</span>
                    <div className="relative">
                        <span className="text-[#ff0c86] whitespace-nowrap">インフルエンサーマッチング</span>
                        {/* <span className="block h-1 bg-[#ff0c86] mt-3 w-full" style={{ width: '100%' }}></span> */}
                    </div>
                    </h1>
              </div>
              
              {/* 説明文 */}
              <p className="text-gray-600 mb-6 max-w-lg bg-white bg-opacity-80 p-4 rounded-lg shadow-sm">
                企業とインフルエンサーを繋ぐマッチングプラットフォーム
              </p>
              
              {/* 料金表示 */}
              <div className="flex space-x-8 mb-6">
                <div className="relative bg-[#22c55e] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                  <p className="text-xs mb-0.5 font-bold">初期費用</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">0</span>
                    <span className="text-sm ml-0.5">円</span>
                  </div>
                </div>
                <div className="relative bg-[#22c55e] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                  <p className="text-xs mb-0.5 font-bold">月額</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">5</span>
                    <span className="text-sm ml-0.5">万円</span>
                  </div>
                </div>
                <div className="relative bg-[#22c55e] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                  <p className="text-xs mb-0.5 font-bold whitespace-nowrap">フォロワー制限</p>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold">なし</span>
                  </div>
                </div>
                <div className="relative bg-[#22c55e] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                  <p className="text-xs mb-0.5 font-bold whitespace-nowrap">フォロワー単価</p>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold">なし</span>
                  </div>
                </div>
              </div>
              
              {/* ボタン */}
              <div className="flex gap-4 ml-16 w-fit">
                <button className="group bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all inline-flex items-center text-sm hover:scale-105 transform shadow-md">
                  会員登録
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="group bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 rounded-full font-bold hover:bg-[#1a1a1a] hover:text-white transition-all inline-flex items-center text-sm hover:scale-105 transform shadow-md">
                  資料ダウンロード
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* 右側の画像 */}
          <div className="w-full md:w-[58%] flex justify-center items-center mt-10 md:mt-0">
            <div className={`relative transform transition-all duration-1000 w-full ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
                <div className="relative w-full mx-auto">
                    <div className="relative" style={{ 
                        transform: 'scale(1.5) translateX(28%)', 
                        transformOrigin: 'center right', 
                        margin: '5% 0' 
                    }}>
                        <Image
                        src="/images/top.png"
                        alt="インフルエンサーマッチングサービスの画面イメージ"
                        width={2000}
                        height={1000}
                        className="w-full h-auto"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        priority
                        unoptimized={true}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}; 
