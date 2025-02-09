"use server";

import { Connection, PublicKey } from "@solana/web3.js";

export async function getLamportsBalance({
  pk,
  connection,
}: {
  pk?: string | string[];
  connection: Connection;
}) {
  if (!pk) {
    throw new Error("PK is required");
  }

  const publicKey = new PublicKey(pk);

  return await connection.getBalance(publicKey);
}
