import Image from "next/image";
import { credentials } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const aboutImage = "/images/anna-about.png";

export function About() {
  return (
    <ScrollReveal
      id="about"
      className="bg-tertiary-container/5 py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-16 px-margin-mobile md:flex-row md:px-gutter">
        <div className="relative w-full flex-1">
          <div className="blue-overlay relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={aboutImage}
              alt="A portrait of Anna Trylińska sitting in her bright, minimalist law office in Warsaw. She is looking at a legal document with a focused yet empathetic expression. The light streaming through the large windows highlights the crisp lines of the modern furniture and the sophisticated blue-tinted atmosphere of the space. Her professional demeanor is captured in a high-key, bright light mode aesthetic."
              fill
              className="object-cover opacity-90 mix-blend-overlay grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary-container">
            About Anna Trylińska
          </h2>
          <p className="mb-6 font-body-md leading-relaxed text-on-surface-variant">
            With a Master&apos;s degree in Human Rights, I have dedicated my
            career to navigating the complexities of immigration law. My academic
            journey through the University of Wrocław and the Louvain Academy has
            provided a deep theoretical foundation for my practical expertise.
          </p>
          <p className="mb-8 font-body-md leading-relaxed text-on-surface-variant">
            I am honored to have been recognized as a US State Department
            Scholar, a distinction that reflects my commitment to international
            legal standards and humanitarian values.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="card-shadow flex flex-col items-center rounded-xl bg-white p-4 text-center"
              >
                <MaterialIcon
                  name={item.icon}
                  className="mb-2 text-2xl text-secondary"
                />
                <span className="font-label-md text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
