import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import { reviews, getFeaturedReviews } from "@/data/reviews";

export default function Home() {
  const featured = getFeaturedReviews();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Prescription for{" "}
              <span className="text-brand">Better Bets</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-xl">
              In-depth sportsbook reviews, honest ratings, and expert analysis.
              We diagnose the books so you can place your bets with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sportsbooks"
                className="inline-flex items-center px-6 py-3 bg-brand text-black font-semibold rounded-xl hover:bg-brand-light cta-glow transition-all"
              >
                View All Reviews
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center px-6 py-3 bg-white/5 text-gray-300 border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Betting Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-brand">{reviews.length}+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Books Reviewed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">5</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Rating Categories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Independent</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">2025</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Sportsbooks</h2>
            <p className="text-sm text-gray-400 mt-1">Our top-rated picks for this month</p>
          </div>
          <Link
            href="/sportsbooks"
            className="text-sm text-brand hover:text-brand-light transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      {/* How we rate */}
      <section className="bg-surface border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            How We Rate Sportsbooks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: "Trustworthiness", desc: "Licensing, reputation, and track record" },
              { label: "Payouts", desc: "Speed, fees, and withdrawal options" },
              { label: "Bonus Options", desc: "Welcome bonuses, reloads, and rollover terms" },
              { label: "Betting Options", desc: "Sports coverage, bet types, and live betting" },
              { label: "Customer Service", desc: "Support channels, response time, and quality" },
            ].map((cat) => (
              <div key={cat.label} className="text-center p-5 bg-white/5 rounded-xl border border-white/10">
                <h3 className="font-semibold text-brand text-sm mb-2">{cat.label}</h3>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
