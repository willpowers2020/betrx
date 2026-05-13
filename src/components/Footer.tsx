import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-white">
              Bet<span className="text-brand">Rx</span>
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Honest, in-depth sportsbook reviews to help you find the right
              book for your action.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Reviews
            </h3>
            <ul className="space-y-2">
              <li><Link href="/sportsbooks" className="text-sm text-gray-400 hover:text-brand transition-colors">All Sportsbooks</Link></li>
              <li><Link href="/sportsbooks" className="text-sm text-gray-400 hover:text-brand transition-colors">Top Rated</Link></li>
              <li><Link href="/sportsbooks" className="text-sm text-gray-400 hover:text-brand transition-colors">Best Bonuses</Link></li>
              <li><Link href="/sportsbooks" className="text-sm text-gray-400 hover:text-brand transition-colors">Fastest Payouts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-sm text-gray-400 hover:text-brand transition-colors">Betting Guides</Link></li>
              <li><Link href="/guides" className="text-sm text-gray-400 hover:text-brand transition-colors">How We Rate</Link></li>
              <li><Link href="/guides" className="text-sm text-gray-400 hover:text-brand transition-colors">Responsible Gambling</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-brand transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-gray-400 hover:text-brand transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BetRx. All rights reserved. Gambling involves risk. Please bet responsibly.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600 border border-gray-700 px-2 py-1 rounded">18+</span>
            <span className="text-xs text-gray-600 border border-gray-700 px-2 py-1 rounded">Gamble Responsibly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
