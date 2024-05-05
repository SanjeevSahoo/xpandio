import type { Metadata } from "next";
import { NextThemesProvider } from "@/_common/components/NextThemesProvider";

import "@/app/globals.css";
import { THEME_LIST } from "@/_common/constants";

export const metadata: Metadata = {
  title: "Xpandio App",
  description: "A Portal for accessing various next gen apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          themes={[...THEME_LIST]}
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
