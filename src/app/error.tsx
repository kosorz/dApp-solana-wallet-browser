"use client";

import { Glowing } from "@/components/glowing";
import Link from "next/link";
import { LuTriangleAlert } from "react-icons/lu";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="m-auto">
      <div className="py-8 alert flex flex-col rounded-xl p-10 text-center items-center gap-7">
        <LuTriangleAlert className="h-24 w-24" />
        <Glowing className="font-bold text-5xl">Heads up!</Glowing>
        <p className="text-xl">
          There was an error while retrieving wallet data. Please check wallet
          address or try again later!
        </p>
        <div className="flex gap-4">
          <button onClick={reset} className="btn btn-outline text-xl">
            Try again
          </button>

          <Link href="/">
            <button className="btn btn-primary text-xl">Start over</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
