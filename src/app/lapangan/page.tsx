"use client";

import { useLapangan } from "../../hooks/useLapangan";
import { LapanganCard } from "../../components/lapangan/LapanganCard";
import type { Lapangan } from "../../types/lapangan";

export default function LapanganPage() {
  const { lapangan } = useLapangan();

  return (
    <div>
      <h1>Daftar Lapangan</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {lapangan.map((item: Lapangan) => (
          <LapanganCard key={item.id} lapangan={item} />
        ))}
      </div>
    </div>
  );
}