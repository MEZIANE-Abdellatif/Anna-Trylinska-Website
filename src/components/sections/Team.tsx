import Image from "next/image";
import { teamMembers } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Team() {
  return (
    <ScrollReveal
      id="team"
      className="py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary-container">
            Meet the Team
          </h2>
          <p className="mx-auto mt-2 max-w-2xl font-body-md text-on-surface-variant">
            Our multilingual team brings decades of combined experience to your
            service, fluent in Polish, English, Ukrainian, and Russian.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-shadow flex flex-col items-center rounded-3xl border border-outline-variant/30 bg-white p-8 text-center"
            >
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-secondary-container">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-headline-md text-headline-md">{member.name}</h3>
              <p className="mb-4 font-label-md text-primary">{member.role}</p>
              <p className="font-body-md text-on-surface-variant">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
