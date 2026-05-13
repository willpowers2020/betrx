interface TagListProps {
  title: string;
  items: string[];
}

export default function TagList({ title, items }: TagListProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
