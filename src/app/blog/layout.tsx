import Navbar from "@/components/Navbar";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div >{children}</div>
    </main>
  );
}
