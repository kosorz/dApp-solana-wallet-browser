import numeral from "numeral";
import { Glowing } from "./glowing";
const LAMPORTS_PER_SOL = 1e9;

export const SolBalance = ({ lamports }: { lamports: number }) => {
  const balance = lamports / LAMPORTS_PER_SOL;

  return (
    <Glowing className="text-5xl lg:text-7xl font-extrabold">
      {numeral(balance).format("0,0.[000000000]")} SOL
    </Glowing>
  );
};
