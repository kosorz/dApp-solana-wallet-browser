export default function Layout({
  children,
  search,
}: Readonly<{
  children: React.ReactNode;
  search: React.ReactNode;
}>) {
  return (
    <>
      {search}
      <main className="m-auto my-10">{children}</main>
    </>
  );
}
