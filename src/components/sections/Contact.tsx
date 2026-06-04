import { contactInfo } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <ScrollReveal
      id="contact"
      className="py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-16 px-margin-mobile md:px-gutter lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary-container">
            Get in Touch
          </h2>
          <p className="mb-12 font-body-md text-on-surface-variant">
            Ready to start your journey? Send us a message or visit our office
            in Warsaw.
          </p>

          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                  <MaterialIcon name={item.icon} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-label-md text-primary">{item.title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-shadow rounded-3xl border border-outline-variant/30 bg-white p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="font-label-md text-sm">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Anna"
                  className="w-full rounded-lg border-outline-variant p-3 transition-all focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="font-label-md text-sm">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Kowalska"
                  className="w-full rounded-lg border-outline-variant p-3 transition-all focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-label-md text-sm">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="anna@example.com"
                className="w-full rounded-lg border-outline-variant p-3 transition-all focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-label-md text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you today?"
                className="w-full rounded-lg border-outline-variant p-3 transition-all focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-secondary py-4 font-label-md text-on-secondary transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}
