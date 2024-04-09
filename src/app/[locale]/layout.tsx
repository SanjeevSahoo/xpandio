import React from "react";
import initTranslations from "@/app/localization/i18n";
import TranslationProvider from "@/app/[locale]/TranslationProvider";
import i18nConfig from "../localization/i18nConfig";

const i18nNamespaces = ["common"];

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
    </TranslationProvider>
  );
}
