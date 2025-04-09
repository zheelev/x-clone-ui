import "./globals.css";
import LeftBar from "@/app/componets/LeftBar";
import RightBar from "@/app/componets/RightBar";
import QueryProvider from "@/providers/QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}