'use client';

import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="h-8 relative w-40">
            <Image
              src="/images/logo.png"
              alt="Find Model Circle"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <a 
            href="/influencer" 
            className="text-sm text-gray-700 hover:text-[#ff0c86] transition-colors border-b border-dotted border-gray-400 pb-0.5"
          >
            インフルエンサーの方はこちら
          </a>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#service" className="text-gray-600 hover:text-[#ff0c86] transition-colors">サービス</a>
          <a href="#price" className="text-gray-600 hover:text-[#ff0c86] transition-colors">料金</a>
          <a href="#contact" className="text-gray-600 hover:text-[#ff0c86] transition-colors">お問い合わせ</a>
          <button className="bg-[#ff0c86] text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
            ログイン
          </button>
        </nav>
      </div>
    </header>
  );
} 