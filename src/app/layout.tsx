import type { Metadata } from "next";
import { NextThemesProvider } from "@/_common/components/NextThemesProvider";

import "./globals.css";
import { THEME_LIST } from "@/_common/constants";
import { SessionProvider } from "next-auth/react";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            themes={[...THEME_LIST]}
          >
            {children}
          </NextThemesProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
