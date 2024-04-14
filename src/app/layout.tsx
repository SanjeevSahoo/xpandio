import type { Metadata } from "next";
import { NextThemesProvider } from "@/_common/components/NextThemesProvider";

import "@/app/globals.css";
import { THEME_LIST } from "@/_common/constants";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Xpandio App",
  description: "A Portal for accessing various next gen apps",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Suspense>
          <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            themes={[...THEME_LIST]}
          >
            {children}
          </NextThemesProvider>
        </Suspense>
      </body>
    </html>
  );
}
