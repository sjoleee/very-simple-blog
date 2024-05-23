import FramerLazyMotion from "@/components/FramerLazyMotion";
import ThemeProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { USER_INFORMATIONS } from "@/constants/data";

export const metadata: Metadata = {
  metadataBase: new URL(USER_INFORMATIONS.domain),
  title: USER_INFORMATIONS.meta.title,
  description: USER_INFORMATIONS.meta.description,
  openGraph: {
    title: USER_INFORMATIONS.meta.title,
    description: USER_INFORMATIONS.meta.description,
    type: "website",
    url: USER_INFORMATIONS.domain,
    images: `${USER_INFORMATIONS.domain}/images/share.png`,
  },
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className={`${pretendard.variable} bg-backgroundHeavy`} data-theme="light">
      <FramerLazyMotion>
        <ThemeProvider>
          <body className="relative antialiased">{children}</body>
        </ThemeProvider>
      </FramerLazyMotion>
    </html>
  );
};

export default RootLayout;
