import '../globals.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import Nav from './components/nav';
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
          gtag('config', 'G-BCLJH1PZCH', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script
          id="voiceflow"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '64b95116ae97270007bcdbc4' },
                    url: 'https://general-runtime.voiceflow.com/',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
                var timer = setInterval(function() {
                   let element = document.getElementsByClassName('vfrc-launcher')
                   if (element.length > 0) {
                    element[0].click();
                    clearInterval(timer);
                   }
                }, 100);
            })(document, 'script');
          `,
          }}
        />
      </head>
      <body className={`${poppins.className} h-screen`}>
        <div>
          <main className="flex-grow">
            <Nav />
            <div className="opacity-20" style={{ opacity: 0.2 }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
