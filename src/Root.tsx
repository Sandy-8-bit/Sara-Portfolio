import Header from "../src/components/header";
import BackToTop from "../src/components/back-to-top";
import GridBackground from "../src/components/grid-background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden mx-auto lg:px-28">
          {children}
        </main>
        <BackToTop />
      </body>
    </html>
  );
}
