interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-success mb-3">Pros</h3>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-success mt-0.5 shrink-0">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-danger mb-3">Cons</h3>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-danger mt-0.5 shrink-0">&minus;</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
