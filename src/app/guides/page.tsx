import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Betting Guides — BetRx",
  description: "Learn how to bet smarter with our guides on parlays, bankroll management, odds reading, live betting, and more.",
};

const guides = [
  {
    category: "Getting Started",
    items: [
      {
        title: "How Online Sportsbooks Work",
        desc: "A complete beginner's guide to signing up, depositing, placing your first bet, and cashing out winnings.",
        readTime: "8 min",
        slug: "how-sportsbooks-work",
      },
      {
        title: "Understanding Betting Odds",
        desc: "American, decimal, and fractional odds explained. Learn to read lines and calculate implied probability.",
        readTime: "6 min",
        slug: "understanding-odds",
      },
      {
        title: "How We Rate Sportsbooks",
        desc: "Our methodology: the five categories we score, how we weight them, and what earns a top rating.",
        readTime: "5 min",
        slug: "how-we-rate",
      },
    ],
  },
  {
    category: "Bet Types",
    items: [
      {
        title: "Straight Bets & Moneylines",
        desc: "The simplest bet in the book. Pick a winner, collect your payout. When to use moneyline vs. spread.",
        readTime: "5 min",
        slug: "straight-bets",
      },
      {
        title: "Parlays & Teasers",
        desc: "Combine multiple bets for bigger payouts. How parlays compound risk and when teasers give you an edge.",
        readTime: "7 min",
        slug: "parlays-teasers",
      },
      {
        title: "Props & Futures",
        desc: "Bet on player stats, game events, and season-long outcomes. Where the value hides for sharp bettors.",
        readTime: "6 min",
        slug: "props-futures",
      },
      {
        title: "Live In-Game Betting",
        desc: "Real-time odds that shift with every play. Strategy tips for betting during the action.",
        readTime: "7 min",
        slug: "live-betting",
      },
    ],
  },
  {
    category: "Strategy",
    items: [
      {
        title: "Bankroll Management 101",
        desc: "The #1 skill that separates winners from losers. Unit sizing, stop-losses, and protecting your roll.",
        readTime: "8 min",
        slug: "bankroll-management",
      },
      {
        title: "Line Shopping Across Books",
        desc: "Why having accounts at multiple sportsbooks puts money in your pocket on every single bet.",
        readTime: "5 min",
        slug: "line-shopping",
      },
      {
        title: "Reading & Beating the Closing Line",
        desc: "The closing line is the sharpest number. Learn what it means and how to consistently beat it.",
        readTime: "9 min",
        slug: "closing-line",
      },
    ],
  },
  {
    category: "Banking & Security",
    items: [
      {
        title: "Crypto Deposits & Withdrawals",
        desc: "Bitcoin, Ethereum, and USDT for sports betting. How to get faster payouts and bigger bonuses.",
        readTime: "6 min",
        slug: "crypto-banking",
      },
      {
        title: "Staying Safe Online",
        desc: "How to spot rogue books, protect your accounts with 2FA, and keep your betting funds secure.",
        readTime: "5 min",
        slug: "online-safety",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Betting <span className="text-brand">Guides</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          From your first bet to advanced strategy. Everything you need to bet smarter, manage risk, and find value.
        </p>
      </div>

      {/* Guide sections */}
      <div className="space-y-14">
        {guides.map((section) => (
          <section key={section.category}>
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-brand rounded-full" />
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="bg-surface-light border border-white/10 rounded-2xl p-6 hover:border-brand/30 transition-colors group block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-brand/70 font-semibold">
                      {section.category}
                    </span>
                    <span className="text-gray-600">&middot;</span>
                    <span className="text-[10px] text-gray-500">{guide.readTime} read</span>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-brand transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{guide.desc}</p>
                  <span className="text-sm text-brand font-semibold">
                    Read guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 bg-gradient-to-r from-brand/10 to-brand/5 border border-brand/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to put it into practice?</h2>
        <p className="text-gray-400 mb-5">Check out our top-rated sportsbooks and start betting smarter today.</p>
        <Link
          href="/sportsbooks"
          className="inline-flex items-center px-8 py-3 bg-brand text-black font-bold rounded-xl hover:bg-brand-light cta-glow transition-all"
        >
          View Sportsbook Reviews &rarr;
        </Link>
      </section>
    </div>
  );
}
