import { whyChooseUs } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyChooseUs() {
  return (
    <ScrollReveal className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:grid-cols-2 md:px-gutter lg:grid-cols-4">
        {whyChooseUs.map((item) => (
          <div key={item.title} className="p-6">
            <MaterialIcon name={item.icon} className="mb-4 text-4xl text-primary" />
            <h3 className="mb-2 font-headline-md text-headline-md text-body-md font-bold">
              {item.title}
            </h3>
            <p className="font-body-md text-on-surface-variant">{item.description}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
