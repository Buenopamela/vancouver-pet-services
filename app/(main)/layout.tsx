import Navbar from '@/components/Navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#F9F6F1', minHeight: '100vh' }}>
      <Navbar />
      <main>{children}</main>
      <footer style={{ background: '#fff', borderTop: '1px solid #E7E5E4', padding: '28px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#A8A29E', margin: 0 }}>
          © {new Date().getFullYear()} Vancouver Pet Services · vancouverpetservices.ca
        </p>
      </footer>
    </div>
  )
}
