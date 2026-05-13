import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} — BetRx`,
      description: guide.description,
      type: "article",
    },
    alternates: {
      canonical: `https://betrx.vercel.app/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const guideIndex = guides.findIndex((g) => g.slug === slug);
  const prev = guideIndex > 0 ? guides[guideIndex - 1] : null;
  const next = guideIndex < guides.length - 1 ? guides[guideIndex + 1] : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            author: { "@type": "Organization", name: "BetRx" },
            publisher: { "@type": "Organization", name: "BetRx" },
          }),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-gray-400">{guide.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-brand/10 text-brand px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="text-xs text-gray-500">{guide.readTime} read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-400 mt-4">{guide.description}</p>
        </header>

        {/* Table of contents */}
        <nav className="bg-surface-light border border-white/10 rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">In This Guide</h2>
          <ol className="space-y-2">
            {guide.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-gray-400 hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="text-brand/50 text-xs w-5">{i + 1}.</span>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content sections */}
        <div className="space-y-10">
          {guide.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="scroll-mt-20">
              <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
              <div className="prose-custom">
                {section.content.split("\n\n").map((paragraph, j) => {
                  if (paragraph.startsWith("**") && paragraph.includes(":**")) {
                    const parts = paragraph.split(":**");
                    const label = parts[0].replace(/\*\*/g, "");
                    const rest = parts.slice(1).join(":**");
                    return (
                      <p key={j} className="text-gray-300 text-sm leading-relaxed mb-3">
                        <strong className="text-white">{label}:</strong>{rest}
                      </p>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n- ").map((item) => item.replace(/^- /, ""));
                    return (
                      <ul key={j} className="space-y-1.5 mb-3 ml-4">
                        {items.map((item, k) => (
                          <li key={k} className="text-sm text-gray-300 leading-relaxed flex items-start gap-2">
                            <span className="text-brand mt-1 shrink-0">-</span>
                            <span dangerouslySetInnerHTML={{
                              __html: item
                                .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                            }} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={j}
                      className="text-gray-300 text-sm leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                      }}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Prev/Next navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-14 pt-8 border-t border-white/10">
          {prev ? (
            <Link
              href={`/guides/${prev.slug}`}
              className="flex-1 bg-surface-light border border-white/10 rounded-xl p-4 hover:border-brand/30 transition-colors group"
            >
              <span className="text-xs text-gray-500">&larr; Previous</span>
              <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors mt-1">
                {prev.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link
              href={`/guides/${next.slug}`}
              className="flex-1 bg-surface-light border border-white/10 rounded-xl p-4 hover:border-brand/30 transition-colors group text-right"
            >
              <span className="text-xs text-gray-500">Next &rarr;</span>
              <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors mt-1">
                {next.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-brand/10 to-brand/5 border border-brand/20 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to start betting?</h2>
          <p className="text-gray-400 mb-5 text-sm">Check out our top-rated sportsbooks and find the right book for you.</p>
          <Link
            href="/sportsbooks"
            className="inline-flex items-center px-6 py-3 bg-brand text-black font-bold rounded-xl hover:bg-brand-light cta-glow transition-all text-sm"
          >
            View Sportsbook Reviews &rarr;
          </Link>
        </div>
      </article>
    </>
  );
}
