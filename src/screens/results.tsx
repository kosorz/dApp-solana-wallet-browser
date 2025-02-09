import { SolBalance } from "@/components/balance";
import { useGetLamportsBalance as useGetLamportsBalance } from "@/hooks/useGetLamportsBalance";
import { SearchParams } from "next/dist/server/request/search-params";

type Props = {
  searchParams: Promise<SearchParams>;
};

export async function ResultsScreen({ searchParams }: Props) {
  const awaitedSearchParams = await searchParams;

  const balance = await useGetLamportsBalance(awaitedSearchParams.pk);

  return (
    <p className="text-center break-all">
      <SolBalance lamports={balance} />
    </p>
  );
}
