import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import StateProviderClient from "@/lib/state-provider-client";

export const metadata: Metadata = {
  title: "Imagine ta ville",
  description:
    "Construis ta ville du futur et découvre son impact écologique !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-pastel-gradient font-sans text-text flex flex-col relative overflow-x-hidden">
        {/* Fond GIF animé sans overlay ni blur */}
        <div
          className="fixed inset-0 -z-10 w-full h-full"
          aria-hidden="true"
          style={{
            backgroundImage: 'url("/background.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <StateProviderClient>
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24">
            {children}
          </main>
        </StateProviderClient>
      </body>
    </html>
  );
}
