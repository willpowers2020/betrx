import { Bonus } from "@/lib/types";

interface BonusCardProps {
  bonus: Bonus;
}

export default function BonusCard({ bonus }: BonusCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-brand/30 transition-colors">
      <h4 className="font-semibold text-white mb-1">{bonus.title}</h4>
      <p className="text-sm text-gray-400 mb-3">{bonus.description}</p>
      <div className="flex items-center gap-3 text-xs">
        {bonus.code && (
          <span className="bg-brand/10 text-brand px-2.5 py-1 rounded-md font-mono">
            {bonus.code}
          </span>
        )}
        {bonus.rollover && (
          <span className="text-gray-500">
            Rollover: {bonus.rollover}
          </span>
        )}
      </div>
    </div>
  );
}
