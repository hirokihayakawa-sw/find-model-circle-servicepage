import Image from 'next/image'
import { MessageSquare } from 'lucide-react'

export const ChatDemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* デモ画像部分 */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* 左側：ツール説明 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">メッセージ</h3>
                <p className="text-lg text-gray-600">
                  インフルエンサーと直接コミュニケーションを取れる専用メッセージ機能で、スムーズな案件進行を実現。
                  投稿内容の確認から修正依頼まで完結できます。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">シンプルな操作性</p>
                      <p className="text-sm text-gray-600 mt-1">
                        LINEのような使い慣れたインターフェースで、
                        スムーズなコミュニケーションが可能
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">投稿内容の確認</p>
                      <p className="text-sm text-gray-600 mt-1">
                        投稿前の内容確認や修正依頼などやり取りから承認までをメッセージで完結
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#ff0c86] text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">進捗状況の共有</p>
                      <p className="text-sm text-gray-600 mt-1">
                        案件の進行状況や投稿予定日の調整など必要な情報をリアルタイムで共有
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：スクリーンショット */}
              <div className="relative">
                <Image
                  src="/images/chat.png"
                  alt="Find Model Circle メッセージ画面"
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