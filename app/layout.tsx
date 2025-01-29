import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="block min-w-auto max-w-auto min-w-[90vw] max-w-[90vw] min-[1000px]:min-w-[69vw] min-[1000px]:max-w-[69vw] min-[2000px]:min-w-[39vw] min-[2000px]:max-w-[39vw] p-9 my-9 mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
