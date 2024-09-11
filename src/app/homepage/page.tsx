"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from '@/components/AboutSection';
import { DepartmentsSection } from '@/components/DepartmentsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DepartmentsSection />
      </main>
      <Footer />
    </div>
  );
}