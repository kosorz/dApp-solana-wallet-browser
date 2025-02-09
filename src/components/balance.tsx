import numeral from "numeral";
import { Glowing } from "./glowing";
const LAMPORTS_PER_SOL = 1e9;
const TWO_DIGITS_BALANCE_THRESHOLD = 100;

export const SolBalance = ({ lamports }: { lamports: number }) => {
  const balance = lamports / LAMPORTS_PER_SOL;

  return (
    <Glowing className="text-5xl lg:text-7xl font-extrabold">
      {numeral(balance).format(
        balance > TWO_DIGITS_BALANCE_THRESHOLD ? "0,0.[00]" : "0,0.[000000000]"
      )}{" "}
      SOL
    </Glowing>
  );
};
