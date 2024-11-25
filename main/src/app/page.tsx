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
    <main className="flex w-full flex-col items-center justify-center">
      <HeroSection
        imageUrl="/assets/cape-town-bay.jpg"
        title="Discover South Africa"
        subheading={"Discover an unparalleled journey filled with adventure."}
      />
      <div className="flex w-full flex-col items-center justify-center gap-16 py-10 ">
        <AboutSection />
        <DepartmentsSection />
        <MembersSection />
        <TourismSection />
        <NewsSection />
        <InitiativesSection />
      </div>
    </main>
  )
}
