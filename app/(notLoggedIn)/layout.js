import '../globals.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Nav from '@/components/nav';
import { siteConfig } from '@/config/siteConfig';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    // icon: '/favicon/favicon.ico', //@Tyler change this
    // shortcut: '/favicon/favicon-16x16.png', //@Tyler change this
    // apple: '/favicon/apple-touch-icon.png', //@Tyler change this
  },
  // manifest: `/favicon/site.webmanifest`, //@Tyler change this
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    // images: [`${siteConfig.url}/images/og.jpg`], //@Tyler change this
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/images/og.jpg`], //@Tyler change this
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BCLJH1PZCH"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-xxxxxxx', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </head>
      <body className={`${poppins.className} h-screen`}>
        <Nav />
        <main className="flex-grow px-4 md:px-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
