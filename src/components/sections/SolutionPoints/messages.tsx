import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const messages = {
  number: "02",
  title: "依頼・交渉の手間を削減",
  description: "案件を公開すると、興味を持ったインフルエンサーから応募が届きます。マッチング後に直接インフルエンサーとやりとりが可能でスピーディーな案件進行が可能です。",
  icon: MessageCircle,
  gradient: "from-purple-500 to-pink-500",
  textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500",
  align: "right",
  visualization: (
    <motion.div 
      className="relative bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl p-6 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-100/20 rounded-full blur-xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-100/30 to-cyan-100/20 rounded-full blur-xl" />
      
      <div className="flex flex-col items-center gap-4 relative z-10">
        <motion.div 
          className="bg-yellow-50 border border-yellow-100 rounded-full py-1 px-6 mb-2 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-gray-800 font-medium">Find Model Circle</span>
        </motion.div>
        
        <div className="relative flex items-center w-full max-w-md px-4 py-6">
          {/* 企業アイコン */}
          <motion.div 
            className="flex flex-col items-center w-1/4"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21M3 18H21M5 18V8L12 4L19 8V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18V13H15V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-md">
              企業
            </div>
          </motion.div>
          
          {/* 中央のスペース - 矢印用 */}
          <div className="w-2/4 flex justify-center items-center">
            {/* 双方向の矢印 - 直接やりとり */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <div className="relative">
                <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15H110" stroke="#ff0c86" strokeWidth="3"/>
                  <path d="M105 5L110 15L105 25" stroke="#ff0c86" strokeWidth="3"/>
                  <path d="M15 5L10 15L15 25" stroke="#ff0c86" strokeWidth="3"/>
                </svg>
                
                {/* 装飾的な光の効果 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-pink-400/30 rounded-full blur-md animate-pulse" />
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-4 py-1 text-xs text-white whitespace-nowrap mt-2 shadow-md">
                直接やりとり
              </div>
            </motion.div>
          </div>
          
          {/* インフルエンサーアイコン */}
          <motion.div 
            className="flex flex-col items-center w-1/4"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-2 shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-md">
              インフルエンサー
            </div>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-center text-sm text-gray-700 mt-2 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          コミュニケーションがスムーズでスピーディーな案件進行が可能です。
        </motion.p>
      </div>
    </motion.div>
  )
}; 