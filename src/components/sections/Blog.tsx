import Image from "next/image";
import { blogArticles } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Blog() {
  return (
    <ScrollReveal
      id="blog"
      className="bg-tertiary-container/5 py-section-padding-mobile md:py-section-padding-desktop"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary-container">
              Legal Insights
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Stay updated with the latest changes in Polish immigration law.
            </p>
          </div>
          <a
            className="hidden items-center gap-1 font-label-md text-link-blue hover:underline md:flex"
            href="#"
          >
            Read all articles →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.title}
              className="card-shadow group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white"
            >
              <div className="relative aspect-video overflow-hidden bg-primary/20">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="font-caption text-secondary">{article.date}</span>
                <h3 className="mt-2 mb-4 font-headline-md text-headline-md text-body-md font-bold transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mb-6 line-clamp-3 font-body-md text-sm text-on-surface-variant">
                  {article.excerpt}
                </p>
                <a
                  className="font-label-md text-link-blue hover:underline"
                  href="#"
                >
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a className="font-label-md text-link-blue hover:underline" href="#">
            Read all articles →
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
