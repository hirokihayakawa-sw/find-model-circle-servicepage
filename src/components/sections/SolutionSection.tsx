import { Lightbulb, Users, MessageCircle, DollarSign, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export const SolutionSection = () => {
  const solutions = [
    {
      icon: DollarSign,
      title: "コストを大幅に削減",
      description: "月額5万円の定額制で案件掲載し放題。直接取引とギフティング対応で、従来の課題だった高額な費用構造を解決します。",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: MessageCircle,
      title: "スピーディな案件進行",
      description: "インフルエンサーと直接メッセージでやり取りが可能。リアルタイムでの調整により、スピーディで柔軟な案件進行を実現します。",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "自由な選定と直接取引",
      description: "応募してきたインフルエンサーの中から自由に選定可能。プロフィールや実績を確認し、最適な人材とマッチングできます。",
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      icon: UserCheck,
      title: "安心・透明なマッチング",
      description: "全インフルエンサーがeKYC本人確認済み。直接取引による透明性の確保と、取引条件の明確化で安心してご利用いただけます。",
      gradient: "from-green-500 to-emerald-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3">
            <Lightbulb className="w-12 h-12 text-[#ff0c86]" />
            <h2 className="text-4xl font-bold">こんな課題を解決</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Find Model Circleは、インフルエンサーマーケティングにおける
            <br />
            従来の課題を解決し、より効率的なマッチングを実現します
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${solution.gradient} rounded-full blur-lg opacity-25 group-hover:opacity-75 transition-opacity duration-500`} />
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 relative`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <solution.icon className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff0c86] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}