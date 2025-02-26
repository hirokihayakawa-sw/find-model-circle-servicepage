import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-gray-50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* ヘッダー部分 */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 relative">
          <div className="absolute -z-10 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-center flex items-center gap-3">
            <Sparkles className="w-12 h-12 text-[#ff0c86]" />
            <span>サービス</span>
          </h2>
          <p className="text-xl text-center text-gray-600">
            直感的な操作で簡単にインフルエンサーマッチングを実現
          </p>
        </div>

        {/* デモ画像部分 */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* 左側：ツール説明 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">案件一覧</h3>
                <p className="text-lg text-gray-600">
                  案件の登録から、インフルエンサーとのやり取り、投稿の確認まで、直感的なUIで効率的な運用が可能です。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">詳細な案件設定</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Instagram、X、TikTokなど希望するSNSの種類や、
                        投稿希望日時まで細かく設定可能
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">進行状況の一括管理</p>
                      <p className="text-sm text-gray-600 mt-1">
                        案件ごとの進行状況をリアルタイムで確認。
                        応募状況や投稿予定日などを一目で把握
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">スムーズなコミュニケーション</p>
                      <p className="text-sm text-gray-600 mt-1">
                        インフルエンサーとのメッセージやり取りから
                        投稿内容の確認まで、シームレスに対応
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：スクリーンショット */}
              <div className="relative">
                <Image
                  src="/images/dashboard.png"
                  alt="Find Model Circle 案件一覧画面"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 