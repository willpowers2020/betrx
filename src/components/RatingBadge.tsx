interface RatingBadgeProps {
  rating: number;
  size?: "sm" | "lg";
}

export default function RatingBadge({ rating, size = "sm" }: RatingBadgeProps) {
  const color =
    rating >= 9 ? "text-brand border-brand" :
    rating >= 7 ? "text-gold border-gold" :
    "text-danger border-danger";

  if (size === "lg") {
    return (
      <div className={`inline-flex flex-col items-center justify-center w-20 h-20 rounded-xl border-2 ${color} bg-white/5`}>
        <span className="text-2xl font-bold">{rating.toFixed(1)}</span>
        <span className="text-[10px] uppercase tracking-wider opacity-70">/ 10</span>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${color} bg-white/5 text-sm font-bold`}>
      {rating.toFixed(1)}
    </span>
  );
}
