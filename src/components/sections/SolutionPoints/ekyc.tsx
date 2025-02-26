import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const ekyc = {
  number: "03",
  title: "安心・安全な本人確認済み",
  description: "インフルエンサーの本人確認にeKYC認証を採用。政府発行の身分証明書による厳格な本人確認を実施しているため、なりすまし等のリスクを排除。企業様のコンプライアンス要件も満たした安全な取引環境を提供します。",
  icon: ShieldCheck,
  gradient: "from-green-500 to-emerald-400",
  textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400",
  align: "left",
  visualization: (
    <motion.div 
      className="relative bg-white rounded-2xl shadow-xl p-8"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-pink-50 to-transparent rounded-2xl" />
      <div className="relative space-y-4">
        {[
          "政府発行の身分証明書で本人確認",
          "なりすまし防止で安全な取引環境",
          "企業のコンプライアンスに対応",
          "信頼できるインフルエンサーのみ"
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 10 }}
          >
            <div className="w-10 h-10 bg-[#ff0c86] rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}; 