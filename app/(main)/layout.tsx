import Navbar from '@/components/Navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-[#1E3A5F] text-white/60 text-sm text-center py-6 mt-16">
        © {new Date().getFullYear()} Vancouver Pet Services · Trusted pet care in Vancouver, BC
      </footer>
    </>
  )
}
