'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ナビゲーションリンクの配列
  const navLinks = [
    { href: '#service', label: 'サービス' },
    { href: '#price', label: '料金' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* ハンバーガーメニューボタン（左側に配置） */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* ロゴエリア */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="h-8 relative w-32 md:w-40">
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
            className="text-xs md:text-sm text-gray-700 hover:text-[#ff0c86] transition-colors border-b border-dotted border-gray-400 pb-0.5 hidden sm:inline-block"
          >
            インフルエンサーの方はこちら
          </a>
        </div>

        {/* 右側のスペーサー（モバイル時） */}
        <div className="flex-grow md:hidden"></div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-600 hover:text-[#ff0c86] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-[#ff0c86] text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
            ログイン
          </button>
        </nav>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="/influencer" 
              className="text-sm text-gray-700 hover:text-[#ff0c86] transition-colors border-b border-dotted border-gray-400 pb-0.5 sm:hidden"
            >
              インフルエンサーの方はこちら
            </a>
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-600 hover:text-[#ff0c86] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#ff0c86] text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors w-full">
              ログイン
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 