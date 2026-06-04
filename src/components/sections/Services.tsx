import { services } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Services() {
  return (
    <ScrollReveal
      id="services"
      className="py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary-container">
            Specialized Immigration Services
          </h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            Comprehensive legal support for every stage of your life in Poland.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-shadow flex flex-col justify-between rounded-2xl border border-outline-variant/30 bg-white p-6 transition-all hover:border-primary/50"
            >
              <div>
                <MaterialIcon
                  name={service.icon}
                  className="mb-4 block text-primary"
                />
                <h3 className="mb-2 font-headline-md text-headline-md text-body-md font-bold">
                  {service.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant">
                  {service.description}
                </p>
              </div>
              <a
                className="mt-4 flex items-center gap-1 font-label-md text-link-blue hover:underline"
                href="#"
              >
                Learn more{" "}
                <MaterialIcon name="arrow_forward" className="text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
