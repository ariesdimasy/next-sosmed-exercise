import Navbar from "@/components/Navbar";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div style={{ height:"100vh"}}>{children}</div>
    </main>
  );
}
