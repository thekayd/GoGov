"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./(components)/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { MembersSection } from "@/components/MembersSection";
import { TourismSection } from "@/components/TourismSection";
import { NewsSection } from "@/components/NewsSection";
import { InitiativesSection } from "@/components/InitiativesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DepartmentsSection />
        <MembersSection />
        <TourismSection />
        <NewsSection />
        <InitiativesSection />
      </main>
      <Footer />
    </div>
  );
}
