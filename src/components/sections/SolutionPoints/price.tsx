import { motion } from 'framer-motion';
import { DollarSign, Check } from 'lucide-react';

export const price = {
  number: "01",
  title: "何人採用しても、月額定額制",
  description: "従来のインフルエンサーマーケティングでは、フォロワー数に応じて費用が増加する従量制が一般的でした。Find Model Circleは月額5万円の定額制で、採用人数の制限がないため、事業規模に合わせて柔軟に展開できます。",
  icon: DollarSign,
  gradient: "from-blue-500 to-cyan-400",
  textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400",
  align: "left",
  visualization: (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* 左側: 一般的な他社の料金体系 */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-100"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* モダンな背景装飾 */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white z-0"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-100 rounded-full z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
          
          <div className="relative z-10">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">一般的な料金体系</h3>
              <p className="text-gray-500 text-xs mt-0.5">フォロワー数に基づく従量課金</p>
            </div>
            
            <div className="px-6 py-6 text-center">
              <div className="text-5xl font-bold text-gray-800 mb-1 tracking-tight">
                50<span className="text-2xl">万円〜</span>
              </div>
              <p className="text-xs text-red-500 mt-1">※フォロワー数に応じて増加</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-t-2xl">
              <h4 className="text-sm font-medium text-center mb-3">料金計算例</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">フォロワー単価: 2円</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">採用数: 10人</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">フォロワー数: 2.5万人</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* 右側: Find Model Circle */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative border-2 border-[#ff0c86] scale-105 z-10"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 12, 134, 0.25)", transition: { duration: 0.2 } }}
        >
          {/* お得バッジ */}
          <div className="absolute -top-1 -right-1 bg-[#ff0c86] text-white text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg shadow-md z-20">
            おすすめ
          </div>
          
          {/* モダンな背景装飾 */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 to-white z-0"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-100 rounded-full z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-100 rounded-full z-0"></div>
          
          <div className="relative z-10">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-[#ff0c86]">Find model Circle</h3>
              <p className="text-gray-500 text-xs mt-0.5">定額制の柔軟なプラン</p>
            </div>
            
            <div className="px-6 py-6 text-center">
              <div className="text-5xl font-bold text-[#ff0c86] mb-1 tracking-tight relative inline-block">
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-200 rounded-full blur-sm"></div>
                5<span className="text-2xl">万円/月</span>
              </div>
              <p className="text-xs text-green-600 font-medium mt-1">※採用人数に関わらず定額</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-t-2xl">
              <h4 className="text-sm font-medium text-center mb-3">主な特徴</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#ff0c86] rounded-full p-0.5 mr-2 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700"><span className="font-medium">フォロワー単価: なし</span></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ff0c86] rounded-full p-0.5 mr-2 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700"><span className="font-medium">採用数: 無制限</span></span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ff0c86] rounded-full p-0.5 mr-2 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700"><span className="font-medium">フォロワー数: 上限なし</span></span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm text-gray-700 max-w-2xl mx-auto bg-white py-3 px-6 rounded-full shadow-sm border border-gray-100">
          どれだけインフルエンサーとマッチしても<span className="font-bold">定額で済む</span>ため<br />
          従来のフォロワー数や採用人数による<span className="font-bold text-[#ff0c86]">高額化を避けられます</span>
        </p>
      </motion.div>
    </motion.div>
  )
};