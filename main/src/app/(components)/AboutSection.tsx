import Image from "next/image"

import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

export function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
      <Typography variant={"h2"}>Who we are</Typography>
      <div className="grid grid-cols-1 gap-8 pt-3 md:grid-cols-2">
        <div className="space-y-4">
          <Typography variant={"p"}>
            South Africa is the southernmost country on the African continent,
            known for its varied topography, natural beauty, and cultural
            diversity. It shares borders with Botswana, Lesotho, Mozambique,
            Namibia, Swaziland, and Zimbabwe.
          </Typography>
          <Button>Read More</Button>
        </div>
        <div>
          <Image
            src="/assets/images/Image1.png"
            alt="South Africa Map"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
