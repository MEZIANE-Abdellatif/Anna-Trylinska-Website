import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const heroImage = "/images/anna-hero.png";

export function Hero() {
  return (
    <ScrollReveal className="mx-auto flex max-w-container-max flex-col items-center gap-12 px-margin-mobile py-section-padding-mobile md:flex-row md:px-gutter md:py-section-padding-desktop">
      <div className="flex-1 space-y-8">
        <h1 className="font-headline-xl text-headline-xl-mobile leading-tight text-primary-container md:text-headline-xl">
          Your Legal Guide to Life in Poland
        </h1>
        <p className="max-w-lg font-body-lg text-body-lg text-on-surface-variant">
          Expert immigration assistance tailored to your personal and
          professional journey. We simplify complex procedures so you can focus
          on building your future.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="card-shadow rounded-xl bg-secondary px-8 py-4 font-label-md text-on-secondary transition-all hover:brightness-110"
          >
            Book a Consultation
          </button>
          <button
            type="button"
            className="rounded-xl border-2 border-primary px-8 py-4 font-label-md text-primary transition-all hover:bg-primary/5"
          >
            See Our Services
          </button>
        </div>
      </div>

      <div className="relative w-full flex-1">
        <div className="blue-overlay relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={heroImage}
            alt="A professional portrait of a confident female lawyer in a modern Warsaw office setting. She is wearing a sharp charcoal suit and smiling warmly toward the camera. The background is softly blurred, showing hints of contemporary architecture and warm interior lighting. The overall color palette is dominated by professional blues and clean whites, reflecting a corporate yet approachable brand identity."
            fill
            className="object-cover opacity-90 mix-blend-overlay grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div className="card-shadow absolute -bottom-6 -left-6 hidden rounded-xl border border-outline-variant/30 bg-white p-6 md:block">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-secondary" />
            <span className="font-label-md text-primary">
              Certified Expert in Polish Law
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
