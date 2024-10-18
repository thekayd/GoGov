import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">About South Africa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <p className="mb-4">South Africa is the southernmost country on the African continent, known for its varied topography, natural beauty, and cultural diversity. It shares borders with Botswana, Lesotho, Mozambique, Namibia, Swaziland, and Zimbabwe.</p>
            <Button>Read More</Button>
          </div>
          <div>
            <Image src="/assets/images/Image1.png" alt="South Africa Map" width={400} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}