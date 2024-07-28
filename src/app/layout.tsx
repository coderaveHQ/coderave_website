import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoderaveHQ",
  description: "Digital Agency based in Germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-900 tracking-tight text-neutral-900 dark:text-neutral-50 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div id="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
