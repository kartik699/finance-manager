import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Finance",
    description:
        "Introducing the ultimate Finance Manager Web Application! Seamlessly record and categorize your transactions across multiple accounts with ease. Unlock powerful insights with interactive charts that visualize your spending and income patterns. Our user-friendly interface makes budget management and financial tracking a breeze. Take control of your finances and make smarter decisions today!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <GoogleOneTap cancelOnTapOutside />
                    <QueryProvider>
                        <SheetProvider />
                        <Toaster />
                        {children}
                    </QueryProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
