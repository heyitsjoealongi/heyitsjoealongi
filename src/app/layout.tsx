import Footer from "./components/menu/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://heyitsjoealongi.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://heyitsjoealongi.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://heyitsjoealongi.com/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="max-w-xl mt-[9vh] mx-9 lg:mx-auto">
        <main className="flex flex-col flex-auto min-w-0 mt-6 px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
