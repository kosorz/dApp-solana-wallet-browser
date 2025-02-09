import { getConnection } from "@/providers/connectionProvider";
import { getLamportsBalance } from "@/solana/get-lamports-balance";

export async function useGetLamportsBalance(pk?: string | string[]) {
  const connection = getConnection();

  return await getLamportsBalance({
    pk,
    connection,
  });
}
