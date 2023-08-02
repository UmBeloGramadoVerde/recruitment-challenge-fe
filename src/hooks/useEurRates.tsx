import { EurRates } from "@/types/transactions";
import { useEffect, useState } from "react";

export function useEurRates() {
  const [eurRates, setEurRates] = useState<EurRates>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/eur-rates`)
      .then((response) => response.json())
      .then((data) => {
        setEurRates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching euro rates:", error);
        setLoading(false);
      });
  }, []);

  return {eurRates, loading};
}
