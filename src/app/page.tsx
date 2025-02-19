'use client';

import { ArrowRight, Users, Gift, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-image');
    const heroTexts = document.querySelectorAll('.hero-text');
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translateZ(-10px) scale(2) translateY(${yPos}px)`;
      });
      
      heroTexts.forEach(el => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translateZ(50px) translateY(${yPos}px)`;
      });
    };

    // Add scroll event listener with requestAnimationFrame for performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    handleScroll(); // Initial call

    // Cleanup
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="h-8 relative w-40">
            <Image
              src="/images/logo.png"
              alt="Find Model Circle"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
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
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Find Model Circle Hero"
            fill
            className="object-cover transform scale-105 transition-transform duration-1000 hover:scale-110"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-6xl font-bold mb-8 animate-fade-in hero-text transform hover:translate-y-[-5px] transition-transform duration-300">
                <span className="block mb-4">インフルエンサーを、</span>
                <span className="block">もっと身近に</span>
              </h1>
              <div className="space-y-6 mb-12 animate-fade-in delay-200">
                <p className="text-2xl hero-text">
                  企業とインフルエンサーを繋ぐマッチングサービス
                </p>
                <div className="flex justify-center gap-8 text-xl">
                  <p className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="font-bold mr-2">初期費用</span>
                    <span className="text-3xl font-bold">0</span>円
                  </p>
                  <p className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="font-bold mr-2">月額</span>
                    <span className="text-3xl font-bold">50,000</span>円
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4 animate-fade-in delay-300">
                <button className="bg-white/90 backdrop-blur-sm text-[#ff0c86] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 hover:shadow-lg inline-flex items-center text-lg">
                  無料で始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105 inline-flex items-center text-lg">
                  資料ダウンロード
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">対応SNS</h2>
          <div className="flex justify-center gap-12">
            <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
              <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
              <span className="text-xl">Instagram</span>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
              <Image src="/images/x.jpg" alt="X" width={32} height={32} />
              <span className="text-xl">X (Twitter)</span>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
              <Image src="/images/tiktok.png" alt="TikTok" width={32} height={32} />
              <span className="text-xl">TikTok</span>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
              <Image src="/images/youtube.png" alt="YouTube" width={32} height={32} />
              <span className="text-xl">YouTube</span>
            </div>
          </div>
        </div>
      </section>

      {/* FMCとは Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FMCとは</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-2xl mb-8">
                企業とインフルエンサーを繋ぐマッチングサービス
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Users className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">本人確認済みの安心設計</h3>
                  <p className="text-gray-600">
                    インフルエンサーは本人確認(eKYC)認証済みで、安心できるユーザーのみが利用可能
                  </p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <MessageCircle className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">LINEのような使いやすさ</h3>
                  <p className="text-gray-600">
                    インフルエンサーと直接やり取りができて、気軽にコミュニケーションが取れます
                  </p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Gift className="h-16 w-16 text-[#ff0c86] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">柔軟な案件対応</h3>
                  <p className="text-gray-600">
                    掲載案件数の上限なし、ギフティングのみでの依頼も可能！企業様の要望に柔軟に対応します
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <p className="text-xl font-bold text-[#ff0c86] mb-4">月額たったの50,000円で</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-bold mb-2">案件掲載し放題</h4>
                  <p className="text-gray-600">掲載案件数の上限なし</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-bold mb-2">直接コミュニケーション</h4>
                  <p className="text-gray-600">LINEのような使いやすさで気軽にやり取り</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 課題解決 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">こんな課題を解決</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-pink-50 rounded-lg p-8 shadow-md hover-lift animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0 animate-slide-in">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 animate-fade-in delay-200">インフルエンサー施策が初めての方へ</h3>
                  <p className="text-gray-600 leading-relaxed animate-fade-in delay-300">
                    専任担当者が企画から実施までサポートいたしますので、初めての方でも安心してご利用いただけます。
                    インフルエンサーマーケティングの経験がなくても、丁寧にガイドいたします。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">効果的なPR実現をお考えの方へ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    本人確認済みのインフルエンサーと直接やり取りができ、高品質なPRを実現できます。
                    商品・サービスに最適なインフルエンサーとのマッチングで、効果的なプロモーションを実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 利用ステップ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">利用ステップ</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-24 right-24 h-0.5 bg-[#ff0c86]/20"></div>
              
              <div className="text-center group animate-fade-in">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">1</div>
                <h3 className="text-lg font-bold mb-2 animate-fade-in delay-200">会員登録</h3>
                <p className="text-gray-600 animate-fade-in delay-300">簡単な情報入力で完了</p>
              </div>
              <div className="text-center group animate-fade-in delay-200">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">2</div>
                <h3 className="text-lg font-bold mb-2 animate-fade-in delay-300">案件登録</h3>
                <p className="text-gray-600 animate-fade-in delay-400">PRしたい商品・サービスを登録</p>
              </div>
              <div className="text-center group animate-fade-in delay-300">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">3</div>
                <h3 className="text-lg font-bold mb-2 animate-fade-in delay-400">案件公開</h3>
                <p className="text-gray-600 animate-fade-in delay-400">インフルエンサーに公開</p>
              </div>
              <div className="text-center group animate-fade-in delay-400">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">4</div>
                <h3 className="text-lg font-bold mb-2 animate-fade-in delay-400">直接やりとり</h3>
                <p className="text-gray-600 animate-fade-in delay-400">応募されたIFと商談</p>
              </div>
              <div className="text-center group animate-fade-in delay-400">
                <div className="w-16 h-16 bg-[#ff0c86] rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">5</div>
                <h3 className="text-lg font-bold mb-2 animate-fade-in delay-400">投稿確認・承認</h3>
                <p className="text-gray-600 animate-fade-in delay-400">投稿内容を確認し完了</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">企業向けプラン</h3>
                <div className="inline-flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-[#ff0c86]">¥50,000</span>
                  <span className="text-xl text-gray-600">/月</span>
                </div>
                <p className="text-lg text-gray-600">案件掲載し放題</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">本人確認済みの安心設計</h4>
                      <p className="text-gray-600 text-sm">インフルエンサーは本人確認(eKYC)認証済みで、安心できるユーザーのみが利用可能</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">LINEのような使いやすさ</h4>
                      <p className="text-gray-600 text-sm">インフルエンサーと直接やり取りができて、気軽にコミュニケーションが取れます</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">柔軟な案件対応</h4>
                      <p className="text-gray-600 text-sm">掲載案件数の上限なし、ギフティングのみでの依頼も可能！企業様の要望に柔軟に対応します</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#ff0c86] text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center text-lg group">
                    無料で始める
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#ff0c86] to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐ始めましょう</h2>
          <p className="text-xl mb-12">
            Find Model Circleで、あなたも魅力的な商品・サービスを体験
          </p>
          <button className="bg-white text-[#ff0c86] px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors inline-flex items-center text-lg">
            無料会員登録
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
          <p className="text-center text-xl mb-12">
            Find Model Circleに関するご質問・ご相談はこちらから
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg hover-lift">
              <form className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    会社名<span className="text-[#ff0c86] ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent transition-shadow"
                    placeholder="会社名"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    お名前<span className="text-[#ff0c86] ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent transition-shadow"
                    placeholder="お名前"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    メールアドレス<span className="text-[#ff0c86] ml-1">必須</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent transition-shadow"
                    placeholder="メールアドレス"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    電話番号<span className="text-[#ff0c86] ml-1">必須</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent transition-shadow"
                    placeholder="電話番号"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    お問い合わせ内容<span className="text-[#ff0c86] ml-1">必須</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-[#ff0c86] focus:ring-[#ff0c86]" name="interest" value="見積もり依頼" />
                      <span>見積もり依頼</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-[#ff0c86] focus:ring-[#ff0c86]" name="interest" value="インフルエンサーリスト請求" />
                      <span>インフルエンサーリスト請求</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-[#ff0c86] focus:ring-[#ff0c86]" name="interest" value="サービス内容について" />
                      <span>サービス内容について</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-[#ff0c86] focus:ring-[#ff0c86]" name="interest" value="その他" />
                      <span>その他</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">詳細</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent transition-shadow h-32"
                    placeholder="お問い合わせ内容&#10;※その他を選択された方はご相談内容のご入力をお願いいたします。"
                  ></textarea>
                </div>
                <div>
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 mt-1 text-[#ff0c86] focus:ring-[#ff0c86]" />
                    <div>
                      <p className="font-medium">無料メルマガに登録する（不要の場合すぐ登録解除できます）</p>
                      <p className="text-sm text-gray-600">インスタラボ更新情報／SNSマーケティング情報／特別セミナー告知／インフルエンサー紹介など、旬の情報がまとめて届くメルマガです。</p>
                    </div>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff0c86] text-white px-8 py-4 rounded-full font-semibold button-hover flex items-center justify-center text-lg group"
                >
                  送信する
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="h-12 relative w-48">
            <Image
              src="/images/logo.png"
              alt="Find Model Circle"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#service" className="text-gray-600 hover:text-[#ff0c86] transition-colors">サービス・料金</a>
            <a href="#register" className="text-gray-600 hover:text-[#ff0c86] transition-colors">会員登録</a>
            <a href="#login" className="text-gray-600 hover:text-[#ff0c86] transition-colors">ログイン</a>
            <a href="#company" className="text-gray-600 hover:text-[#ff0c86] transition-colors">運営会社</a>
            <a href="#terms" className="text-gray-600 hover:text-[#ff0c86] transition-colors">利用規約</a>
            <a href="#about" className="text-gray-600 hover:text-[#ff0c86] transition-colors">会社概要</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2025 Find Model Circle. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
