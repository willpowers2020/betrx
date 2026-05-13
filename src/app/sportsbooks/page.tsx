import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sportsbook Reviews — BetRx",
  description: "Browse all sportsbook reviews with detailed ratings, bonus breakdowns, and banking information.",
};

export default function SportsbooksPage() {
  const sorted = [...reviews].sort((a, b) => b.overallRating - a.overallRating);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Sportsbook Reviews</h1>
        <p className="text-gray-400 mt-2">
          Every book reviewed, rated, and ranked. Click any card for the full breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-gray-500 py-20">No reviews yet. Check back soon.</p>
      )}
    </div>
  );
}
