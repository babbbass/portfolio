import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { Anek_Telugu } from "next/font/google"
import "./globals.css"

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
})

export const metadata: Metadata = {
  title: "Sebastien Savan - Developer NextJs",
  description: "Online Creator make your insights come to life.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          anekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  )
}
