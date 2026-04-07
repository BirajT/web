import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { useAuth } from '../context/AuthContext'
import { getAllOrdersApi } from '../api/order.api'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER'
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)
  const [qrData, setQrData] = useState('')
  const settingsRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const handleQR = async () => {
    setSettingsOpen(false)
    try {
      const res = await getAllOrdersApi()
      const orders = res.data.data
      if (!orders.length) {
        setQrData(`User: ${user.first_name} ${user.last_name}\nEmail: ${user.email}\nNo orders yet.`)
      } else {
        const total = orders.reduce((s, o) => s + (o.totalPrice || 0), 0)
        const lines = orders.map(o =>
          `• ${o.menu?.name || 'N/A'} x${o.quantity} = Rs.${o.totalPrice} [${o.status}]`
        ).join('\n')
        setQrData(`User: ${user.first_name} ${user.last_name}\nEmail: ${user.email}\n\nOrders:\n${lines}\n\nTotal: Rs.${total}`)
      }
    } catch {
      setQrData(`User: ${user.first_name} ${user.last_name}\nEmail: ${user.email}`)
    }
    setQrOpen(true)
  }

  return (
    <>
      <nav style={styles.nav}>
        <Link to={user ? '/dashboard' : '/'} style={styles.brand}>🍽 Canteen</Link>

        <div style={styles.links}>
          {user && !isAdmin && <Link to="/orders" style={styles.link}>Orders</Link>}

          {user ? (
            <div style={styles.userArea}>
              <div ref={settingsRef} style={styles.settingsWrap}>
                <button style={styles.settingsBtn} onClick={() => setSettingsOpen(o => !o)}>
                  ⚙ Settings
                </button>
                {settingsOpen && (
                  <div style={styles.dropdown}>
                    <Link to="/change-password" style={styles.dropItem} onClick={() => setSettingsOpen(false)}>
                      🔑 Change Password
                    </Link>
                    {!isAdmin && (
                      <button style={styles.dropItem2} onClick={handleQR}>
                        📱 QR Code
                      </button>
                    )}
                    <button style={styles.dropItemLogout} onClick={handleLogout}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
              <Link to="/dashboard" style={styles.avatar}>
                {user.first_name?.[0]}{user.last_name?.[0]}
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/register" style={styles.registerBtn}>Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* QR Modal */}
      {qrOpen && (
        <div style={styles.overlay} onClick={() => setQrOpen(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>📱 My QR Code</h3>
            <p style={styles.modalSub}>{user.first_name} {user.last_name}</p>
            <div style={styles.qrWrap}>
              <QRCodeSVG
                value={qrData}
                size={300}
                bgColor="#ffffff"
                fgColor="#1a1a2e"
                level="M"
              />
            </div>
            <p style={styles.modalHint}>Scan to view your order summary</p>
            <button style={styles.closeBtn} onClick={() => setQrOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 28px', background: '#1a1a2e', color: '#fff', position: 'sticky', top: 0, zIndex: 100 },
  brand: { color: '#e94560', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' },
  links: { display: 'flex', gap: '18px', alignItems: 'center' },
  link: { color: '#ccc', textDecoration: 'none', fontSize: '14px' },
  highlight: { color: '#34a853', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', border: '1px solid #34a853', padding: '4px 10px', borderRadius: '4px' },
  userArea: { display: 'flex', alignItems: 'center', gap: '10px' },
  avatar: { background: '#e94560', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', textDecoration: 'none' },
  registerBtn: { background: '#e94560', color: '#fff', textDecoration: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '14px' },
  settingsWrap: { position: 'relative' },
  settingsBtn: { background: 'transparent', color: '#ccc', border: '1px solid #555', padding: '5px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' },
  dropdown: { position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: '#fff', borderRadius: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', minWidth: '180px', overflow: 'hidden', zIndex: 200 },
  dropItem: { display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f0f0f0' },
  dropItem2: { display: 'block', width: '100%', padding: '12px 16px', color: '#1a73e8', background: 'none', border: 'none', borderBottom: '1px solid #f0f0f0', fontSize: '14px', textAlign: 'left', cursor: 'pointer' },
  dropItemLogout: { display: 'block', width: '100%', padding: '12px 16px', color: '#e94560', background: 'none', border: 'none', fontSize: '14px', textAlign: 'left', cursor: 'pointer' },

  // QR modal
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 },
  modal: { background: '#fff', borderRadius: '16px', padding: '40px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' },
  modalTitle: { margin: 0, fontSize: '22px', color: '#1a1a2e' },
  modalSub: { margin: 0, color: '#888', fontSize: '15px' },
  qrWrap: { padding: '16px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' },
  modalHint: { margin: 0, fontSize: '13px', color: '#aaa' },
  closeBtn: { padding: '10px 32px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }
}

export default Navbar
