import { howItWorksSteps } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HowItWorks() {
  return (
    <ScrollReveal className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto mb-16 max-w-container-max px-margin-mobile text-center md:px-gutter">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-primary-container">
          How It Works
        </h2>
        <p className="mx-auto max-w-xl font-body-md text-on-surface-variant">
          Three simple steps to legal residency and peace of mind.
        </p>
      </div>

      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile md:grid-cols-3 md:px-gutter">
        {howItWorksSteps.map((step) => (
          <div key={step.title} className="group text-center">
            <div className="card-shadow mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-transform group-hover:scale-105">
              <MaterialIcon name={step.icon} className="text-3xl text-secondary" />
            </div>
            <h3 className="mb-2 font-headline-md text-headline-md">{step.title}</h3>
            <p className="font-body-md text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
