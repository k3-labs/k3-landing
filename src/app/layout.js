import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'K3 Labs - Blockchain. Made. Simple',
  description: 'Blockchain made simple'
}

export default function RootLayout({ children }) {
  return (
    <html
      className={`scrollbar-thin scrollbar-track-gray scrollbar-thumb-gray-darkGray text-white  bg-black dark`}
      lang="en"
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3S16287MYY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3S16287MYY');
            `}
        </Script>
      </head>
      <body className="bg-black/100">{children}</body>
    </html>
  )
}
