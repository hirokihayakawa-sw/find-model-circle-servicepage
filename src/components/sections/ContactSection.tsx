'use client';

import { ArrowRight, FileText, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 左側の説明文 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Find Model Circleへのご相談</h2>
              <p className="mb-4">
                Find Model Circleへご関心いただき誠にありがとうございます。
              </p>
              <p className="mb-4">
                Find Model Circleでは、<br />
                <span className="font-bold">
                  ・概算見積もりを出してほしい<br />
                  ・サービスの詳細をもっと知りたい<br />
                </span>
              </p>
              <p className="mb-8">
                という企業の皆様のご要望に合わせ、迅速にご対応いたしますので<br />
                ぜひ、お気軽にお問合せください。<br />
                お問い合わせ頂きました後、通常、1営業日以内に折り返しご連絡差し上げます。
              </p>

              {/* 資料請求と電話番号のセクション */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <FileText className="w-20 h-8 text-[#ff0c86]" />
                    <div>
                      <h4 className="font-bold mb-1">サービス資料請求</h4>
                      <p className="text-sm text-gray-600">サービス内容や料金体系について詳しくお伺いいたします</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-10 h-8 text-[#ff0c86]" />
                    <div>
                      <h4 className="font-bold mb-1">050-1867-1179</h4>
                      <p className="text-sm text-gray-600 whitespace-nowrap">（平日10:00〜19:00）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ここへ挿入してほしい */}
              <p className="text-sm text-gray-500">
                ※弊社はInstagram運営元ではないため、Instagramの使い方やトラブルなど個人的なお問い合わせにはご返信できません。
                Instagramの機能やトラブルに関する質問は
                <a href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#ff0c86] hover:underline">
                  Instagram
                </a>
                へお問合せください。
              </p>
            </div>

            {/* 右側のフォーム */}
            <div>
              <form className="space-y-6">
                {[
                  { label: '会社名', type: 'text' },
                  { label: 'お名前', type: 'text' },
                  { label: 'メールアドレス', type: 'email' },
                  { label: '電話番号', type: 'tel' },
                ].map(({ label, type }) => (
                  <div key={label}>
                    <label className="block text-sm font-bold mb-2">
                      {label}<span className="ml-1 text-xs text-white bg-[#ff0c86] px-2 py-0.5 rounded">必須</span>
                    </label>
                    <input
                      type={type}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent"
                      placeholder={label}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold mb-2">
                    お問い合わせ内容<span className="ml-1 text-xs text-white bg-[#ff0c86] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <div className="space-y-2">
                    {['見積もり依頼', 'サービス内容について', 'その他'].map((item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="interest[]"
                          value={item}
                          className="w-4 h-4 text-[#ff0c86] focus:ring-[#ff0c86]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">詳細</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c86] focus:border-transparent h-32"
                    placeholder="お問い合わせ内容&#10;※その他を選択された方はご相談内容のご入力をお願いいたします。"
                  ></textarea>
                </div>

                <div className="text-center">
                <button className="group bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] inline-flex items-center text-lg">
                  送信する
                  <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                  <div className="mt-4">
                    <a href="/privacy" target="_blank" className="text-sm text-gray-500 hover:text-[#ff0c86]">
                      プライバシーポリシー
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};