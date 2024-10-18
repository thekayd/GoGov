import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

import { AboutSection } from "./(components)/AboutSection"
import { DepartmentsSection } from "./(components)/DepartmentsSection"
import { HeroSection } from "./(components)/HeroSection"
import { InitiativesSection } from "./(components)/InitiativesSection"
import { MembersSection } from "./(components)/MembersSection"
import { NewsSection } from "./(components)/NewsSection"
import { TourismSection } from "./(components)/TourismSection"

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
  )
}
