import { useEffect, useState } from "react";
import { getLapangan } from "../services/lapangan.service";
import type { Lapangan } from "../types/lapangan";

export const useLapangan = () => {
  const [lapangan, setLapangan] = useState<Lapangan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLapangan();
      setLapangan(data);
    };

    fetchData();
  }, []);

  return { lapangan };
};