interface RatingBarProps {
  label: string;
  value: number;
  max?: number;
}

export default function RatingBar({ label, value, max = 10 }: RatingBarProps) {
  const pct = (value / max) * 100;

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-300 w-40 shrink-0">{label}</span>
      <div className="flex-1 rating-bar-bg rounded-full h-3 overflow-hidden">
        <div className="rating-bar-fill h-full rounded-full" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-semibold text-brand w-10 text-right">{value.toFixed(1)}</span>
    </div>
  );
}
