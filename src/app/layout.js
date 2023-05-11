import './globals.css'

// charset and viewport meta tags are added by default 
//favicon is also added automatically
export const metadata = {
  title: 'Nextjs 13 Google clone',
  description: 'Google Clone project using nextjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}