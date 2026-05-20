import type { Lapangan } from "../../types/lapangan";

export function LapanganCard({ lapangan }: { lapangan: Lapangan }) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            {lapangan.nama_lapangan}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {lapangan.jenis_olahraga}
          </p>
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          {lapangan.status ? "Tersedia" : "Tidak tersedia"}
        </span>
      </div>

      <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {lapangan.deskripsi}
      </p>

      <div className="flex items-center justify-between gap-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
        <span>Harga per jam</span>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          Rp {lapangan.harga_per_jam.toLocaleString("id-ID")}
        </span>
      </div>
    </article>
  );
}
