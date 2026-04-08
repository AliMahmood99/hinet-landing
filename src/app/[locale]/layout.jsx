import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Plus_Jakarta_Sans, Lexend } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${lexend.variable} font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors position="top-center" dir={locale === "ar" ? "rtl" : "ltr"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
