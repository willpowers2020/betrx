export interface Review {
  slug: string;
  name: string;
  logo: string;
  url: string;
  overallRating: number;
  ratings: {
    trustworthiness: number;
    payouts: number;
    bonusOptions: number;
    bettingOptions: number;
    customerService: number;
  };
  headline: string;
  summary: string;
  pros: string[];
  cons: string[];
  bonuses: Bonus[];
  banking: {
    deposits: BankingMethod[];
    withdrawals: BankingMethod[];
  };
  sports: string[];
  betTypes: string[];
  casinoGames: string[];
  paymentMethods: string[];
  countries: string[];
  services: string[];
  established: string;
  minDeposit: string;
  featured: boolean;
}

export interface Bonus {
  title: string;
  description: string;
  code?: string;
  rollover?: string;
}

export interface BankingMethod {
  method: string;
  fee: string;
  min: string;
  max: string;
  time: string;
}
