import Link from "next/link";
import { reviews } from "@/data/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Casino Reviews — BetRx",
  description: "Find the best online casinos with slots, table games, live dealers, and generous bonuses. Expert reviews and ratings.",
};

const featuredGames = [
  { name: "Blackjack", category: "Table Games", players: "High" },
  { name: "Roulette", category: "Table Games", players: "High" },
  { name: "Baccarat", category: "Table Games", players: "Medium" },
  { name: "Video Poker", category: "Poker", players: "Medium" },
  { name: "Craps", category: "Table Games", players: "Medium" },
  { name: "Slots", category: "Slots", players: "Very High" },
  { name: "Live Dealer Blackjack", category: "Live Casino", players: "High" },
  { name: "Live Dealer Roulette", category: "Live Casino", players: "High" },
  { name: "Keno", category: "Specialty", players: "Low" },
  { name: "Jackpot Slots", category: "Slots", players: "Very High" },
  { name: "3D Slots", category: "Slots", players: "High" },
  { name: "Scratch Cards", category: "Specialty", players: "Low" },
];

const categories = ["All", "Table Games", "Slots", "Live Casino", "Poker", "Specialty"];

const casinoBooks = reviews.filter((r) => r.services.includes("Casino"));

export default function CasinoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-card to-surface-light border border-white/10 p-8 sm:p-12 mb-14">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="relative max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Online <span className="text-brand">Casino</span> Reviews
          </h1>
          <p className="text-gray-400 mt-3">
            Slots, table games, live dealers, and more. We review the casino side of every sportsbook so you know where to play.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="text-xs bg-brand/10 text-brand px-3 py-1.5 rounded-full">200+ Games Reviewed</span>
            <span className="text-xs bg-brand/10 text-brand px-3 py-1.5 rounded-full">Live Dealers</span>
            <span className="text-xs bg-brand/10 text-brand px-3 py-1.5 rounded-full">Crypto Friendly</span>
          </div>
        </div>
      </div>

      {/* Casino sportsbooks */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">Best Casino Sportsbooks</h2>
        <div className="space-y-4">
          {casinoBooks.map((book, rank) => (
            <div
              key={book.slug}
              className="bg-surface-light border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-brand/30 transition-colors"
            >
              <span className="text-2xl font-bold text-brand/40 w-8 text-center shrink-0">
                {rank + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">{book.name}</h3>
                  <span className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/10">
                    {book.casinoGames.length} games
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {book.casinoGames.slice(0, 6).map((g) => (
                    <span key={g} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-md">
                      {g}
                    </span>
                  ))}
                  {book.casinoGames.length > 6 && (
                    <span className="text-xs text-gray-500">+{book.casinoGames.length - 6} more</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <p className="text-2xl font-bold text-brand">{book.overallRating.toFixed(1)}</p>
                  <p className="text-[10px] text-gray-500 uppercase">Rating</p>
                </div>
                <Link
                  href={`/review/${book.slug}`}
                  className="text-sm font-semibold bg-brand text-black px-5 py-2.5 rounded-xl hover:bg-brand-light cta-glow transition-all"
                >
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game categories */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">Popular Casino Games</h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`text-sm px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                i === 0
                  ? "bg-brand text-black border-brand font-semibold"
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-brand/30"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <div
              key={game.name}
              className="bg-surface-light border border-white/10 rounded-xl p-5 hover:border-brand/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-brand text-lg">
                  {game.category === "Slots" ? "🎰" :
                   game.category === "Table Games" ? "🃏" :
                   game.category === "Live Casino" ? "🎥" :
                   game.category === "Poker" ? "♠️" : "⭐"}
                </span>
              </div>
              <h3 className="font-semibold text-white text-sm group-hover:text-brand transition-colors">
                {game.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-gray-500 uppercase">{game.category}</span>
                <span className="text-gray-600">&middot;</span>
                <span className="text-[10px] text-gray-500">Popularity: {game.players}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to look for */}
      <section className="bg-surface border border-white/10 rounded-2xl p-8 mb-16">
        <h2 className="text-xl font-bold text-white mb-6">What We Look For in a Casino</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Game Variety", desc: "Slots, tables, live dealers, and specialty games. More options means more value." },
            { title: "Software Providers", desc: "Top providers like Betsoft, RTG, and Rival deliver smoother gameplay and fairer RNGs." },
            { title: "Payout Speed", desc: "Crypto cashouts in 24-48 hours. We penalize books that hold your winnings." },
            { title: "Casino Bonuses", desc: "Free spins, match deposits, and cashback. We compare rollover requirements side by side." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-brand font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand/10 to-brand/5 border border-brand/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Looking for sports betting instead?</h2>
        <p className="text-gray-400 mb-5">Check out our sportsbook reviews for the full picture — most top casinos also offer sports.</p>
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
