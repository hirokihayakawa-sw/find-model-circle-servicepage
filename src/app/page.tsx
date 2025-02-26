'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { AboutSection } from '@/components/sections/AboutSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { StepSection } from '@/components/sections/StepSection'
import { PriceSection } from '@/components/sections/PriceSection';
import { CTASection } from '@/components/sections/CTASection';
import { DemoSection } from '@/components/sections/DemoSection'
import { ChatDemoSection } from '@/components/sections/ChatDemoSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* 見出し */}
        <HeroSection />
        {/* サービス説明 */}
        <AboutSection />
        {/* 課題解決 */}
        <SolutionSection />
        {/* デモセクション */}
        <DemoSection />
        {/* チャットデモセクション */}
        <ChatDemoSection />
        {/* 利用ステップ */}
        <StepSection />
        {/* 料金 */}
        <PriceSection />
        {/* CTA */}
        <CTASection />
        {/* お問い合わせ */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}