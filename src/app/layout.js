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
      <body className="bg-black/100">{children}</body>
    </html>
  )
}
