import { reviews } from "@/data/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sportsbook Bonuses — BetRx",
  description: "Compare the best sportsbook bonuses, welcome offers, reload promos, and free bet deals. Updated weekly.",
};

export default function BonusesPage() {
  const allBonuses = reviews.flatMap((r) =>
    r.bonuses.map((b) => ({ ...b, sportsbook: r.name, slug: r.slug, url: r.url }))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Best Sportsbook <span className="text-brand">Bonuses</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Every active promo, welcome bonus, and reload offer from our reviewed sportsbooks — compared side by side.
        </p>
      </div>

      {/* Bonus type filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {["All Bonuses", "Welcome", "Reload", "Free Spins", "Refer a Friend"].map((f, i) => (
          <span
            key={f}
            className={`text-sm px-4 py-2 rounded-full border cursor-pointer transition-colors ${
              i === 0
                ? "bg-brand text-black border-brand font-semibold"
                : "bg-white/5 text-gray-300 border-white/10 hover:border-brand/30"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Bonus cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allBonuses.map((bonus, i) => (
          <div
            key={i}
            className="bg-surface-light border border-white/10 rounded-2xl p-6 hover:border-brand/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs text-brand font-semibold uppercase tracking-wider">
                  {bonus.sportsbook}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{bonus.title}</h3>
              </div>
              {bonus.code && (
                <span className="bg-brand/10 text-brand px-3 py-1.5 rounded-lg font-mono text-sm shrink-0">
                  {bonus.code}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 mb-4">{bonus.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                {bonus.rollover && (
                  <span>Rollover: <span className="text-gray-300">{bonus.rollover}</span></span>
                )}
              </div>
              <a
                href={bonus.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-brand text-black px-5 py-2 rounded-xl hover:bg-brand-light cta-glow transition-all"
              >
                Claim
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tips section */}
      <section className="mt-16 bg-surface border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6">Bonus Tips from BetRx</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Read the Rollover",
              desc: "A 6x rollover on a $100 bonus means you need to wager $600 before withdrawing. Lower is better.",
            },
            {
              title: "Crypto Gets More",
              desc: "Most books offer higher bonuses for crypto deposits — sometimes 50-75% more than credit card offers.",
            },
            {
              title: "Stack Your Promos",
              desc: "Use the welcome bonus first, then reload bonuses on subsequent deposits to maximize your bankroll.",
            },
          ].map((tip) => (
            <div key={tip.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-brand font-semibold text-sm mb-2">{tip.title}</h3>
              <p className="text-xs text-gray-400">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
