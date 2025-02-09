import { clusterApiUrl, Connection, Cluster } from "@solana/web3.js";

const connection = new Connection(
  clusterApiUrl(process.env.NEXT_PUBLIC_CLUSTER as Cluster)
);

export function getConnection() {
  return connection;
}
