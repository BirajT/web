import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAllOrdersApi } from '../api/order.api'

const Dashboard = () => {
  const { user } = useAuth()
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER'
  const [totalSpent, setTotalSpent] = useState(null)

  useEffect(() => {
    if (!isAdmin) {
      getAllOrdersApi()
        .then(res => {
          const total = res.data.data.reduce((sum, o) => sum + (o.totalPrice || 0), 0)
          setTotalSpent(total)
        })
        .catch(() => {})
    }
  }, [isAdmin])

  const userCards = [
    { label: 'Browse Menu', desc: 'View all available food items', to: '/menu', color: '#e94560' },
    { label: 'My Orders', desc: 'Track your current and past orders', to: '/orders', color: '#1a73e8' },
    { label: 'Total Spent', desc: totalSpent !== null ? `Rs. ${totalSpent}` : 'Loading...', to: '/orders', color: '#f0a500' },
  ]

  const adminCards = [
    { label: 'Create Menu Item', desc: 'Add a new food item to the menu', to: '/menu/create', color: '#34a853' },
    { label: 'Manage Menu', desc: 'View and delete menu items', to: '/menu', color: '#e94560' },
    { label: 'Manage Orders', desc: 'View and update all orders', to: '/orders', color: '#1a73e8' },
    { label: 'Manage Users', desc: 'View and delete users', to: '/users', color: '#9c27b0' },
  ]

  const cards = isAdmin ? adminCards : userCards

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Welcome, {user?.first_name} 👋</h2>
      <p style={styles.sub}>Role: <strong>{user?.role}</strong></p>
      <div style={styles.grid}>
        {cards.map(card => (
          <Link to={card.to} key={card.label} style={{ ...styles.card, borderTop: `4px solid ${card.color}` }}>
            <h3 style={{ ...styles.cardTitle, color: card.color }}>{card.label}</h3>
            <p style={styles.cardDesc}>{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '32px 24px', maxWidth: '900px', margin: '0 auto' },
  heading: { fontSize: '24px', marginBottom: '4px' },
  sub: { color: '#888', marginBottom: '28px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' },
  card: { background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textDecoration: 'none', color: '#333', transition: 'transform 0.1s' },
  cardTitle: { margin: '0 0 8px', fontSize: '16px' },
  cardDesc: { margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }
}

export default Dashboard
