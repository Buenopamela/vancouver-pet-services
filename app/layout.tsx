import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vancouver Pet Services — Find Trusted Pet Care in Vancouver',
  description: 'Compare dog walkers, groomers & pet sitters near you in Vancouver, BC.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
