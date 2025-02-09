import Form from "next/form";

type Props = {
  searchParams: Promise<{ pk: string }>;
};

export async function SearchScreen({ searchParams }: Props) {
  const { pk } = await searchParams;

  return (
    <main className="flex flex-col gap-1">
      <Form
        action={"/results"}
        className="grid grid-cols-4 w-full gap-x-2 gap-y-0"
      >
        <label className="label col-span-3 font-extrabold">Address</label>
        <input
          required
          defaultValue={pk}
          pattern="^[1-9A-HJ-NP-Za-km-z]{32,44}$"
          className="input input-bordered col-span-3"
          name="pk"
        />
        <button className="btn text-xl btn-secondary col-span-1" type="submit">
          Submit
        </button>
      </Form>
      <p className="italic">Check balance of a given wallet</p>
    </main>
  );
}
