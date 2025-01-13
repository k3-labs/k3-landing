import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'K3 Labs - Blockchain. Made. Simple',
  description: 'Blockchain made simple'
}

export default function RootLayout({ children }) {
  return (
    <html
      className={`scrollbar-thin scrollbar-track-[#F5F5F5] scrollbar-thumb-gray text-black `}
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
      <body className="bg-white overflow-x-hidden">{children}</body>
    </html>
  )
}
