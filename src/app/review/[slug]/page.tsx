import { notFound } from "next/navigation";
import { reviews, getReviewBySlug } from "@/data/reviews";
import RatingBadge from "@/components/RatingBadge";
import RatingBar from "@/components/RatingBar";
import ProsCons from "@/components/ProsCons";
import BankingTable from "@/components/BankingTable";
import BonusCard from "@/components/BonusCard";
import TagList from "@/components/TagList";
import ReviewJsonLd from "@/components/ReviewJsonLd";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) return {};
  return {
    title: `${review.name} Review`,
    description: review.summary,
    openGraph: {
      title: `${review.name} Review — BetRx`,
      description: review.summary,
      type: "article",
    },
    alternates: {
      canonical: `https://betrx.vercel.app/review/${slug}`,
    },
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();

  return (
    <>
    <ReviewJsonLd review={review} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
        <RatingBadge rating={review.overallRating} size="lg" />
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{review.name}</h1>
          <p className="text-brand font-semibold mt-2">{review.headline}</p>
          <p className="text-sm text-gray-400 mt-3">{review.summary}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {review.services.map((s) => (
              <span key={s} className="text-xs bg-brand/10 text-brand px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-surface-light border border-white/10 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold">{review.headline}</p>
          <p className="text-sm text-gray-400">Min deposit: {review.minDeposit} &middot; Est. {review.established}</p>
        </div>
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-8 py-3 bg-brand text-black font-bold rounded-xl hover:bg-brand-light cta-glow transition-all text-sm"
        >
          Claim Bonus &rarr;
        </a>
      </div>

      {/* Quick info */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Established", value: review.established },
          { label: "Min Deposit", value: review.minDeposit },
          { label: "Countries", value: `${review.countries.length}` },
          { label: "Sports", value: `${review.sports.length}+` },
        ].map((item) => (
          <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <p className="text-lg font-bold text-brand">{item.value}</p>
            <p className="text-xs text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Ratings */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Ratings Breakdown</h2>
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6 space-y-4">
          <RatingBar label="Overall" value={review.overallRating} />
          <RatingBar label="Trustworthiness" value={review.ratings.trustworthiness} />
          <RatingBar label="Payouts" value={review.ratings.payouts} />
          <RatingBar label="Bonus Options" value={review.ratings.bonusOptions} />
          <RatingBar label="Betting Options" value={review.ratings.bettingOptions} />
          <RatingBar label="Customer Service" value={review.ratings.customerService} />
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Pros & Cons</h2>
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6">
          <ProsCons pros={review.pros} cons={review.cons} />
        </div>
      </section>

      {/* Bonuses */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Bonus Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {review.bonuses.map((bonus, i) => (
            <BonusCard key={i} bonus={bonus} />
          ))}
        </div>
      </section>

      {/* Banking */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Banking Options</h2>
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6 space-y-8">
          <BankingTable title="Deposits" methods={review.banking.deposits} />
          <BankingTable title="Withdrawals" methods={review.banking.withdrawals} />
        </div>
      </section>

      {/* Sports & Bet Types */}
      <section className="mb-10 space-y-6">
        <h2 className="text-xl font-bold text-white mb-5">Sports & Betting</h2>
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6 space-y-6">
          <TagList title="Available Sports" items={review.sports} />
          <TagList title="Bet Types" items={review.betTypes} />
        </div>
      </section>

      {/* Casino */}
      {review.casinoGames.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-5">Casino Games</h2>
          <div className="bg-surface-light border border-white/10 rounded-2xl p-6">
            <TagList title="" items={review.casinoGames} />
          </div>
        </section>
      )}

      {/* Payment Methods & Countries */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6">
          <TagList title="Payment Methods" items={review.paymentMethods} />
        </div>
        <div className="bg-surface-light border border-white/10 rounded-2xl p-6">
          <TagList title="Countries" items={review.countries} />
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-brand/10 to-brand/5 border border-brand/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to get started?</h2>
        <p className="text-gray-400 mb-5">Join {review.name} today and claim your welcome bonus.</p>
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-brand text-black font-bold rounded-xl hover:bg-brand-light cta-glow transition-all"
        >
          Visit {review.name} &rarr;
        </a>
      </div>
    </div>
    </>
  );
}
