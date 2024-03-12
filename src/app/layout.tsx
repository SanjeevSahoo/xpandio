import type { Metadata } from "next";
import { ThemeProvider } from "@/_common/components/theme-provider";

import "./globals.css";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          themes={[...THEME_LIST]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
