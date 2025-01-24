import Navbar from "@/components/Navbar";

export default function ProductAddLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div style={{ marginTop:"0"}}>{children}</div>
    </main>
  );
}
