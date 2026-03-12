import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </>
  );
}
