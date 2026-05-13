import { BankingMethod } from "@/lib/types";

interface BankingTableProps {
  title: string;
  methods: BankingMethod[];
}

export default function BankingTable({ title, methods }: BankingTableProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 pr-4 text-gray-400 font-medium">Method</th>
              <th className="text-left py-2 pr-4 text-gray-400 font-medium">Fee</th>
              <th className="text-left py-2 pr-4 text-gray-400 font-medium">Min</th>
              <th className="text-left py-2 pr-4 text-gray-400 font-medium">Max</th>
              <th className="text-left py-2 text-gray-400 font-medium">Speed</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-2.5 pr-4 text-gray-200">{m.method}</td>
                <td className="py-2.5 pr-4">
                  <span className={m.fee === "Free" ? "text-success" : "text-gray-300"}>
                    {m.fee}
                  </span>
                </td>
                <td className="py-2.5 pr-4 text-gray-300">{m.min}</td>
                <td className="py-2.5 pr-4 text-gray-300">{m.max}</td>
                <td className="py-2.5 text-gray-300">{m.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
