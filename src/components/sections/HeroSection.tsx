'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// 型定義を追加
type FeatureCircleProps = {
  title: string;
  value: number | string;
  isMobile?: boolean;
};

type ActionButtonProps = {
  text: string;
  isPrimary?: boolean;
  isMobile?: boolean;
};

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 共通のアニメーション用クラス
  const fadeInClass = `transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;
  const imageAnimClass = `transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`;

  // 共通のFeatureCircleコンポーネント - 型を適用
  const FeatureCircle = ({ title, value, isMobile = false }: FeatureCircleProps) => (
    <div className={`bg-[#22c55e] text-white rounded-full ${isMobile ? 'w-[22%] aspect-square' : 'w-24 h-24'} flex flex-col items-center justify-center ${isMobile ? '' : 'transform hover:scale-105 transition-transform'} shadow-lg`}>
      <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} mb-0.5 font-bold whitespace-nowrap`}>{title}</p>
      <div className="flex items-baseline">
        {typeof value === 'number' ? (
          <>
            <span className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold`}>{value}</span>
            <span className={`${isMobile ? 'text-[8px]' : 'text-sm'} ml-0.5`}>円</span>
          </>
        ) : (
          <span className={`${isMobile ? 'text-xs' : 'text-xl'} font-bold`}>{value}</span>
        )}
      </div>
    </div>
  );

  // 共通のButtonコンポーネント - 型を適用
  const ActionButton = ({ text, isPrimary = true, isMobile = false }: ActionButtonProps) => (
    <button 
      className={`group ${isPrimary ? 'bg-[#1a1a1a] text-white' : 'bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'} 
      ${isMobile ? 'px-4 py-2 text-sm flex-1' : 'px-6 py-3 text-sm hover:scale-105 transform'} 
      rounded-full font-bold hover:bg-opacity-90 transition-all inline-flex items-center shadow-md`}
    >
      {text}
      <ArrowRight className={`${isMobile ? 'ml-1 h-3 w-3' : 'ml-1.5 h-4 w-4'} transition-transform group-hover:translate-x-1`} />
    </button>
  );

  // モバイル版Hero
  const MobileHero = () => (
    <div className="md:hidden flex flex-col items-center justify-between h-full">
      <div className="w-full text-left px-4 pt-8 relative">
        <div className={fadeInClass}>
          <div className="relative mb-4">
            <div className="absolute -top-8 -left-2 transform -rotate-6 z-10">
              <div className="relative">
                <div className="bg-white px-3 py-1 rounded-full border-2 border-[#ff0c86] shadow-md">
                  <p className="text-xs font-bold text-[#ff0c86]">SNSで話題をつくる</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mt-4 text-center">
              <span className="text-gray-800">直接繋がる</span>
              <span className="block text-[#ff0c86]">インフルエンサーマッチング</span>
            </h1>
          </div>
          
          <p className="text-gray-600 mb-4 bg-white bg-opacity-80 p-3 rounded-lg shadow-sm text-sm text-center">
            企業とインフルエンサーを繋ぐマッチングプラットフォーム
          </p>
        </div>
      </div>
      
      <div className="w-full px-4 mt-2">
        <div className="flex justify-between w-full">
          <FeatureCircle title="初期費用" value={0} isMobile={true} />
          <FeatureCircle title="月額" value={5} isMobile={true} />
          <FeatureCircle title="フォロワー制限" value="なし" isMobile={true} />
          <FeatureCircle title="フォロワー単価" value="なし" isMobile={true} />
        </div>
      </div>
      
      <div className="flex justify-center gap-3 w-full px-4 mt-4">
        <ActionButton text="会員登録" isPrimary={true} isMobile={true} />
        <ActionButton text="資料ダウンロード" isPrimary={false} isMobile={true} />
      </div>
      
      <div className="w-full mt-6 mb-16">
        <div className={imageAnimClass}>
          <div className="relative w-full">
            <Image
              src="/images/top.png"
              alt="インフルエンサーマッチングサービスの画面イメージ"
              width={800}
              height={500}
              className="w-full h-auto"
              style={{ maxWidth: '100%' }}
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // PC版Hero
  const DesktopHero = () => (
    <div className="hidden md:flex flex-row items-center justify-between h-full">
      <div className="w-[42%] ml-4 lg:ml-12 text-left pr-4">
        <div className={fadeInClass}>
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
              <span className="text-gray-800">直接繋がる</span>
              <div className="relative">
                <span className="block text-[#ff0c86] whitespace-nowrap">インフルエンサーマッチング</span>
              </div>
            </h1>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-lg bg-white bg-opacity-80 p-4 rounded-lg shadow-sm">
            企業とインフルエンサーを繋ぐマッチングプラットフォーム
          </p>
          
          <div className="flex space-x-8 mb-6">
            <FeatureCircle title="初期費用" value={0} />
            <FeatureCircle title="月額" value={5} />
            <FeatureCircle title="フォロワー制限" value="なし" />
            <FeatureCircle title="フォロワー単価" value="なし" />
          </div>
          
          <div className="flex gap-4 ml-16 w-fit">
            <ActionButton text="会員登録" isPrimary={true} />
            <ActionButton text="資料ダウンロード" isPrimary={false} />
          </div>
        </div>
      </div>
      
      <div className="w-[58%] flex justify-center items-center">
        <div className={`relative ${imageAnimClass} w-full`}>
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
  );

  return (
    <section className="relative h-[680px] md:h-[750px] overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            <svg className="w-1/2 h-full animate-scroll-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.1)" d="M0,160 C120,200 240,240 360,240 C480,240 600,200 720,200 C840,200 960,240 1080,240 C1200,240 1320,200 1380,180 C1410,170 1425,165 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            <svg className="w-1/2 h-full animate-scroll-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.1)" d="M0,160 C120,200 240,240 360,240 C480,240 600,200 720,200 C840,200 960,240 1080,240 C1200,240 1320,200 1380,180 C1410,170 1425,165 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            <svg className="w-1/2 h-full animate-scroll-medium" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.15)" d="M0,192 C30,185 60,175 90,170 C120,165 150,160 180,150 C210,140 240,135 270,128 C360,128 450,160 540,160 C630,160 720,128 810,128 C900,128 990,160 1080,160 C1170,160 1260,128 1350,128 C1380,128 1410,144 1425,152 C1432,156 1436,158 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            <svg className="w-1/2 h-full animate-scroll-medium" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.15)" d="M0,160 C30,152 60,144 90,140 C120,136 150,132 180,130 C210,128 240,128 270,128 C360,128 450,160 540,160 C630,160 720,128 810,128 C900,128 990,160 1080,160 C1170,160 1260,128 1350,128 C1380,128 1410,144 1425,152 C1432,156 1436,158 1440,160 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <div className="absolute bottom-0 w-[200%] h-full flex">
            <svg className="w-1/2 h-full animate-scroll-fast" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.2)" d="M0,224 C60,192 120,160 180,160 C240,160 300,192 360,192 C420,192 480,160 540,160 C600,160 660,192 720,192 C780,192 840,160 900,160 C960,160 1020,192 1080,192 C1140,192 1200,160 1260,160 C1320,160 1380,192 1410,208 C1425,216 1432,220 1440,224 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
            <svg className="w-1/2 h-full animate-scroll-fast" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgba(255, 12, 134, 0.2)" d="M0,224 C60,192 120,160 180,160 C240,160 300,192 360,192 C420,192 480,160 540,160 C600,160 660,192 720,192 C780,192 840,160 900,160 C960,160 1020,192 1080,192 C1140,192 1200,160 1260,160 C1320,160 1380,192 1410,208 C1425,216 1432,220 1440,224 L1440,320 C1440,320 1410,320 1380,320 C1320,320 1260,320 1200,320 C1080,320 960,320 840,320 C720,320 600,320 480,320 C360,320 240,320 120,320 C60,320 30,320 0,320 Z"></path>
            </svg>
          </div>
        </div>
      </div>

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
        <MobileHero />
        <DesktopHero />
      </div>
    </section>
  );
};