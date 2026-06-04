import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Footer() {
  return (
    <footer className="bg-secondary py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-gutter">
        <div className="col-span-1">
          <div className="mb-6 font-headline-md text-headline-md font-bold text-on-secondary">
            Anna Trylińska
          </div>
          <p className="mb-6 font-body-md text-sm leading-relaxed text-on-secondary/80">
            Providing high-end immigration legal services in Warsaw, Poland.
            Empowering individuals and businesses through expert representation.
          </p>
          <div className="flex gap-4">
            <a
              className="text-on-secondary transition-colors hover:text-white"
              href="#"
              aria-label="Website"
            >
              <MaterialIcon name="public" />
            </a>
            <a
              className="text-on-secondary transition-colors hover:text-white"
              href="#"
              aria-label="Chat"
            >
              <MaterialIcon name="chat" />
            </a>
            <a
              className="text-on-secondary transition-colors hover:text-white"
              href="#"
              aria-label="Email"
            >
              <MaterialIcon name="alternate_email" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-label-md font-bold text-on-secondary">
            Services
          </h4>
          <ul className="space-y-3 font-body-md text-on-secondary/80">
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Work Residence
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Family Reunification
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                EU Blue Card
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Citizenship
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-label-md font-bold text-on-secondary">
            Company
          </h4>
          <ul className="space-y-3 font-body-md text-on-secondary/80">
            <li>
              <a className="transition-colors hover:text-white" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#team">
                The Team
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#blog">
                Legal Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-label-md font-bold text-on-secondary">
            Legal
          </h4>
          <ul className="space-y-3 font-body-md text-on-secondary/80">
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Cookies
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#">
                Legal Notice
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-container-max flex-col items-center justify-between gap-4 border-t border-white/10 px-margin-mobile pt-8 md:flex-row md:px-gutter">
        <div className="font-body-md text-sm text-on-secondary/60">
          © 2026 Anna Trylińska Immigration Law Poland. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="font-label-md text-xs text-on-secondary/80">
            Available for Consultations
          </span>
        </div>
      </div>
    </footer>
  );
}
