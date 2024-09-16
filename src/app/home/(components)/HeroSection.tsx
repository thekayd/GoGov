import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[90vh]">
      {" "}
      {/* Changed from h-screen to h-[90vh] */}
      <Image
        src="/assets/images/ChrisLee70L1Tdai6Rmunsplash1.jpeg"
        alt="Hero"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to the
            <br />
            South African
            <br />
            Citizen Portal
          </h1>
          <p className="mb-8 text-xl">
            Discover an unparalleled journey filled with adventure
          </p>
          <Link href="/register">
            <Button>Create your go.gov account</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
