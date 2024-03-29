import type { Metadata } from "next";
import { NextThemesProvider } from "@/_common/components/NextThemesProvider";

import "@/app/globals.css";
import { THEME_LIST } from "@/_common/constants";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import i18nConfig from "@/app/localization/i18nConfig";
import initTranslations from "./localization/i18n";
import TranslationProvider from "./[locale]/TranslationProvider";

export const metadata: Metadata = {
  title: "Xpandio App",
  description: "A Portal for accessing various next gen apps",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense>
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
        </Suspense>
      </body>
    </html>
  );
}
