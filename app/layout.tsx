import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>heyitsjoealongi</title>
      <meta name="title" content="heyitsjoealongi" />
      <meta
        name="description"
        content="Leading end-to-end application development throughout the agile lifecycle."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://heyitsjoealongi.com/" />
      <meta property="og:title" content="heyitsjoealongi" />
      <meta
        property="og:description"
        content="Leading end-to-end application development throughout the agile lifecycle."
      />
      <meta
        property="og:image"
        content="https://heyitsjoealongi.com/heyitsjoealongi.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://heyitsjoealongi.com/" />
      <meta property="twitter:title" content="heyitsjoealongi" />
      <meta
        property="twitter:description"
        content="Leading end-to-end application development throughout the agile lifecycle."
      />
      <meta
        property="twitter:image"
        content="https://heyitsjoealongi.com/heyitsjoealongi.png"
      />
      <body className="max-w-xl mt-[9vh] mx-9 lg:mx-auto">
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
