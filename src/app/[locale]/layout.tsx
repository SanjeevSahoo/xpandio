import React from "react";
import initTranslations from "@/app/localization/i18n";
import TranslationProvider from "@/app/[locale]/TranslationProvider";

const i18nNamespaces = ["common"];

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