import AdBoard from "./components/adBoard";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-[100svh]">
      <AdBoard />
      {children}
    </main>
  );
}
