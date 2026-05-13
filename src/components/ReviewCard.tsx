import Link from "next/link";
import RatingBadge from "./RatingBadge";
import { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-surface-light border border-white/10 rounded-2xl p-6 hover:border-brand/30 glow-brand transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
            {review.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">Est. {review.established}</p>
        </div>
        <RatingBadge rating={review.overallRating} size="lg" />
      </div>

      <p className="text-brand font-semibold text-sm mb-3">{review.headline}</p>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{review.summary}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {review.services.map((s) => (
          <span key={s} className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-full border border-white/10">
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/review/${review.slug}`}
          className="flex-1 text-center text-sm font-semibold bg-brand/10 text-brand py-2.5 rounded-xl hover:bg-brand/20 transition-colors"
        >
          Read Review
        </Link>
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm font-semibold bg-brand text-black py-2.5 rounded-xl hover:bg-brand-light cta-glow transition-all"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
