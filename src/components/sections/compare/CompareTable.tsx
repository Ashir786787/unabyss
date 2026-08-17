import type { CompareTable } from "@/data/compare-pages";

export default function CompareTable({
  table,
  leading,
}: {
  table: CompareTable;
  leading?: string;
}) {
  return (
    <div className="compare-table-block w-full min-w-0">
      <div className="compare-table-wrap v2-shine v2-shine--light compare-table-wrap--light overflow-x-auto overflow-y-hidden rounded-[22px] border border-white/16 bg-white/[0.07] backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table
          className="w-full border-collapse text-left"
          style={{ minWidth: table.minWidth }}
        >
          <thead>
            <tr className="border-b border-white/8">
              <th className="px-5 py-5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40 sm:px-8 sm:py-6">
                {leading ?? ""}
              </th>
              {table.columns.map((column) => (
                <th
                  key={column.label}
                  className={`px-5 py-5 text-[13px] font-medium uppercase tracking-[0.12em] sm:px-8 sm:py-6 ${
                    column.highlight ? "compare-col-highlight" : ""
                  }`}
                  style={{
                    color: column.highlight
                      ? "var(--gold-bright)"
                      : "rgba(255,255,255,0.55)",
                  }}
                >
                  {column.icon ? (
                    <span className="inline-flex items-center gap-2.5">
                      <img
                        src={column.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 object-contain"
                      />
                      {column.label}
                    </span>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {table.rows.map((row) => (
              <tr key={row.label} className="align-top">
                <th
                  scope="row"
                  className="px-5 py-4 text-left align-middle text-[12px] font-medium uppercase tracking-[0.1em] text-white/45 sm:px-8 sm:py-5"
                >
                  {row.icon ? (
                    <span className="inline-flex items-center gap-2.5">
                      <img
                        src={row.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 object-contain"
                      />
                      {row.label}
                    </span>
                  ) : (
                    row.label
                  )}
                </th>
                {row.cells.map((cell, index) => {
                  const highlight = table.columns[index]?.highlight;

                  return (
                    <td
                      key={cell}
                      className={`px-5 py-4 text-[15px] leading-[1.55] sm:px-8 sm:py-5 ${
                        highlight ? "compare-col-highlight" : ""
                      }`}
                      style={
                        highlight
                          ? { color: "rgba(255,255,255,0.92)", fontWeight: 400 }
                          : { color: "rgba(255,255,255,0.5)", fontWeight: 300 }
                      }
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
