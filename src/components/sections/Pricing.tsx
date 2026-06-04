import { pricingPlans } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function PricingButton({
  variant,
  children,
}: {
  variant: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}) {
  const base =
    "w-full rounded-xl py-3 font-label-md transition-all hover:brightness-110";

  if (variant === "primary") {
    return (
      <button type="button" className={`${base} bg-primary text-on-primary`}>
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type="button"
        className={`${base} bg-secondary text-on-secondary`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`${base} border-2 border-primary text-primary hover:bg-primary/5`}
    >
      {children}
    </button>
  );
}

export function Pricing() {
  return (
    <ScrollReveal
      id="pricing"
      className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-primary-container">
            Transparent Pricing — No Surprises
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            We provide clear fee structures and instalment plans to make legal
            support accessible. Note: All prices are subject to 23% VAT.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`card-shadow relative flex flex-col overflow-hidden rounded-2xl border bg-white p-8 ${
                plan.popular
                  ? "border-primary/40"
                  : "border-outline-variant/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-bl-lg bg-secondary px-3 py-1 text-[10px] font-bold text-white">
                  POPULAR
                </div>
              )}
              <h3 className="mb-2 font-label-md uppercase text-secondary">
                {plan.name}
              </h3>
              <div className="mb-4 text-3xl font-bold">{plan.price}</div>
              <ul className="mb-8 flex-grow space-y-3 font-body-md text-on-surface-variant">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <MaterialIcon
                      name="check_circle"
                      className="text-sm text-secondary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <PricingButton variant={plan.buttonVariant}>
                {plan.buttonText}
              </PricingButton>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="card-shadow rounded-xl bg-secondary px-8 py-4 font-label-md text-on-secondary transition-all hover:brightness-110"
          >
            Book a consultation for a detailed quote
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}
