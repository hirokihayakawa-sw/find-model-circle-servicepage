import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

export const CTASection: FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#ff0c86] to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-3xl font-bold mb-6">始めましょう</h2> */}
        <p className="text-xl mb-12">
          Find Model Circleで、インフルエンサーをもっと身近に！
        </p>
        <button className="bg-white text-[#ff0c86] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-flex items-center text-lg">
          会員登録
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};