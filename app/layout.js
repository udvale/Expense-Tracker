import {Exo_2} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "@/components/ui/sonner";

const exo = Exo_2({subsets: ["latin"]});

export const metadata = {
  title: "Expense Tracker",
  description: ".",
};

export default function RootLayout({children}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={exo.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
