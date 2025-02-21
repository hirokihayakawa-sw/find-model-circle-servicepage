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
    <section className="relative h-[800px] overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-background.jpg"
          alt="背景画像"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-black pt-32">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-16 text-black">
              <span className="relative inline-block transform transition-all duration-700">
                インフルエンサーを
                <span className="text-[#ff0c86]">もっと身近に</span>
                <span className="absolute bottom-[-5px] left-0 w-full h-[8px] bg-[#ff0c86] transform transition-all duration-500 hover:h-[12px]"></span>
              </span>
              <span className="block mt-8 text-2xl md:text-3xl font-normal tracking-wider opacity-90">
                企業とインフルエンサーを繋ぐマッチングサービス
              </span>
            </h1>

            <div className="space-y-8 mb-24">
              <div className="flex justify-center gap-20 text-xl">
                <div className="bg-[#ff0c86] text-white rounded-full w-40 h-40 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,12,134,0.3)]">
                  <p className="text-base mb-2">初期費用</p>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">0</span>
                    <span className="text-xl ml-2">円</span>
                  </div>
                </div>
                <div className="bg-[#ff0c86] text-white rounded-full w-40 h-40 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,12,134,0.3)]">
                  <p className="text-base mb-2">月額</p>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">5</span>
                    <span className="text-xl ml-2">万円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center gap-8 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group bg-[#1a1a1a] text-white px-12 py-5 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] inline-flex items-center text-xl">
              お問い合わせ
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-12 py-5 rounded-full font-bold hover:bg-[#1a1a1a] hover:text-white transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center text-xl">
              まずは資料ダウンロード
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 