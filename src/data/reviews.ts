import { Review } from "@/lib/types";

export const reviews: Review[] = [
  {
    slug: "betanything",
    name: "BetAnything",
    logo: "/images/betanything-logo.svg",
    url: "https://betanything.com",
    overallRating: 9.5,
    ratings: {
      trustworthiness: 9.5,
      payouts: 9.0,
      bonusOptions: 9.5,
      bettingOptions: 9.8,
      customerService: 9.2,
    },
    headline: "150% Cash Bonus Up to $500",
    summary:
      "BetAnything is a top-tier sportsbook offering a massive betting menu, quick crypto payouts, and a full casino experience. With over a decade in the industry, they've built a reputation for reliability and financial stability.",
    pros: [
      "Fast crypto payouts (24-48 hours)",
      "24/7 customer service via live chat & phone",
      "Strong financial stability and long track record",
      "Extensive betting menu across 20+ sports",
      "Full casino with 200+ games",
      "Lottery betting available",
    ],
    cons: [
      "Higher fees on check withdrawals",
      "No dedicated mobile app (mobile web only)",
      "Limited esports options",
    ],
    bonuses: [
      {
        title: "Welcome Bonus",
        description: "150% cash bonus up to $500 on your first deposit",
        code: "WELCOME150",
        rollover: "6x",
      },
      {
        title: "Crypto Reload",
        description: "75% reload bonus up to $300 on every crypto deposit",
        code: "CRYPTO75",
        rollover: "4x",
      },
      {
        title: "Casino Free Spins",
        description: "50 free spins on selected slots with any $50+ deposit",
        rollover: "10x",
      },
      {
        title: "Refer a Friend",
        description: "Get $100 for every friend who deposits $100+",
      },
    ],
    banking: {
      deposits: [
        { method: "Bitcoin", fee: "Free", min: "$20", max: "$100,000", time: "Instant" },
        { method: "Ethereum", fee: "Free", min: "$20", max: "$100,000", time: "Instant" },
        { method: "Litecoin", fee: "Free", min: "$20", max: "$100,000", time: "Instant" },
        { method: "Credit Card", fee: "Free", min: "$25", max: "$2,500", time: "Instant" },
        { method: "Debit Card", fee: "Free", min: "$25", max: "$2,500", time: "Instant" },
        { method: "Bank Wire", fee: "Free", min: "$500", max: "$25,000", time: "1-3 days" },
        { method: "Person to Person", fee: "Free", min: "$100", max: "$600", time: "1 hour" },
      ],
      withdrawals: [
        { method: "Bitcoin", fee: "Free", min: "$20", max: "$25,000", time: "24-48 hours" },
        { method: "Ethereum", fee: "Free", min: "$20", max: "$25,000", time: "24-48 hours" },
        { method: "Bank Wire", fee: "$45", min: "$500", max: "$25,000", time: "5-7 days" },
        { method: "Check", fee: "$50", min: "$500", max: "$3,000", time: "10-15 days" },
      ],
    },
    sports: [
      "Football (NFL/NCAAF)", "Basketball (NBA/NCAAB)", "Baseball (MLB)",
      "Hockey (NHL)", "Soccer", "Tennis", "Golf", "Boxing", "MMA/UFC",
      "NASCAR", "Horse Racing", "Cricket", "Rugby", "Darts", "Snooker",
      "Table Tennis", "Volleyball", "Handball", "Cycling", "F1",
    ],
    betTypes: [
      "Straight Bets", "Parlays", "Teasers", "Pleasers", "Totals",
      "Moneylines", "Futures", "Props", "Live In-Game", "Round Robins",
    ],
    casinoGames: [
      "Blackjack", "Roulette", "Baccarat", "Craps", "Video Poker",
      "Slots (200+)", "Live Dealer Games", "Keno", "Scratch Cards",
      "Jackpot Slots", "3D Slots", "Table Games",
    ],
    paymentMethods: [
      "Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "USDT",
      "Visa", "Mastercard", "Bank Wire", "Person to Person", "Check",
    ],
    countries: ["United States", "Canada", "Mexico", "Brazil", "UK", "Australia"],
    services: ["Sportsbook", "Casino", "Live Casino", "Lottery", "Racebook"],
    established: "2012",
    minDeposit: "$20",
    featured: true,
  },
];

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((r) => r.slug === slug);
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((r) => r.featured);
}
