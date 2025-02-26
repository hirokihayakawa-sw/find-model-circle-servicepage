import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import { price } from './SolutionPoints/price';
import { messages } from './SolutionPoints/messages';
import { ekyc } from './SolutionPoints/ekyc';

export const SolutionSection = () => {
  const points = [
    price,
    messages,
    ekyc
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <ArrowRightCircle className="w-10 h-10 text-[#ff0c86]" />
          <h2 className="text-3xl font-bold">Find Model Circle 3つのポイント</h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                point.align === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={point.align === 'right' ? 'md:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`font-bold ${point.textGradient}`}>
                    Point <span className="text-3xl">{point.number}</span>
                  </div>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${point.gradient} flex items-center justify-center`}>
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
              
              <div className={point.align === 'right' ? 'md:col-start-1' : 'md:col-start-2'}>
                {point.visualization}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};