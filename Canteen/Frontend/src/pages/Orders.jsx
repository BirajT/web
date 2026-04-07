import { useEffect, useState } from 'react'
import { getAllOrdersApi, updateOrderApi, deleteOrderApi } from '../api/order.api'
import { useAuth } from '../context/AuthContext'

const STATUS_COLORS = {
  Pending: '#f0a500',
  Preparing: '#1a73e8',
  Completed: '#34a853',
  Cancelled: '#e94560'
}

const OrderTable = ({ orders, isAdmin, onStatusChange, onDelete }) => (
  orders.length === 0 ? <p>No orders found.</p> : (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Item</th>
          <th style={styles.th}>Qty</th>
          <th style={styles.th}>Total</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order._id} style={styles.tr}>
            <td style={styles.td}>{order.menu?.name || 'N/A'}</td>
            <td style={styles.td}>{order.quantity}</td>
            <td style={styles.td}>Rs. {order.totalPrice}</td>
            <td style={styles.td}>
              {isAdmin ? (
                <select
                  value={order.status}
                  onChange={e => onStatusChange(order._id, e.target.value)}
                  style={{ ...styles.badge, background: STATUS_COLORS[order.status] || '#ccc', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                  {['Pending', 'Preparing', 'Completed', 'Cancelled'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              ) : (
                <span style={{ ...styles.badge, background: STATUS_COLORS[order.status] || '#ccc' }}>
                  {order.status}
                </span>
              )}
            </td>
            <td style={styles.td}>
              <button style={styles.deleteBtn} onClick={() => onDelete(order._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
)

const Orders = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedUser, setSelectedUser] = useState(null) // admin: selected user to view orders

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER'

  useEffect(() => {
    getAllOrdersApi()
      .then(res => setOrders(res.data.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load orders'))
      .finally(() => setLoading(false))
  }, [])

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderApi(id, { status })
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o))
    } catch {
      alert('Failed to update status')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this order?')) return
    try {
      await deleteOrderApi(id)
      setOrders(orders.filter(o => o._id !== id))
      // if viewing a user's orders and they have none left, go back
    } catch {
      alert('Failed to delete order')
    }
  }

  if (loading) return <p style={{ padding: '24px' }}>Loading...</p>
  if (error) return <p style={{ padding: '24px', color: 'red' }}>{error}</p>

  // --- ADMIN VIEW ---
  if (isAdmin) {
    // group orders by user
    const userMap = {}
    orders.forEach(o => {
      const uid = o.user?._id || o.user || 'unknown'
      const firstName = o.user?.first_name || ''
      const lastName = o.user?.last_name || ''
      const fullName = (firstName + ' ' + lastName).trim() || 'Unknown User'
      if (!userMap[uid]) {
        userMap[uid] = {
          _id: uid,
          name: fullName,
          email: o.user?.email || '',
          orders: []
        }
      }
      userMap[uid].orders.push(o)
    })
    const userList = Object.values(userMap)

    // showing a specific user's orders
    if (selectedUser) {
      const u = userMap[selectedUser]
      return (
        <div style={styles.page}>
          <div style={styles.header}>
            <div>
              <button style={styles.backBtn} onClick={() => setSelectedUser(null)}>← Back</button>
              <h2 style={{ margin: '8px 0 0' }}>{u.name}'s Orders</h2>
              <p style={styles.email}>{u.email}</p>
            </div>
          </div>
          <OrderTable
            orders={u.orders}
            isAdmin={true}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </div>
      )
    }

    // user list view
    return (
      <div style={styles.page}>
        <h2 style={{ marginBottom: '20px' }}>Orders by User</h2>
        {userList.length === 0 ? <p>No orders yet.</p> : (
          <div style={styles.userGrid}>
            {userList.map(u => (
              <div key={u._id} style={styles.userCard} onClick={() => setSelectedUser(u._id)}>
                <div style={styles.userAvatar}>{u.name?.[0] || '?'}</div>
                <div>
                  <p style={styles.userName}>{u.name}</p>
                  <p style={styles.userEmail}>{u.email}</p>
                  <p style={styles.orderCount}>{u.orders.length} order{u.orders.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // --- USER VIEW ---
  return (
    <div style={styles.page}>
      <h2 style={{ marginBottom: '20px' }}>My Orders</h2>
      <OrderTable
        orders={orders}
        isAdmin={false}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  )
}

const styles = {
  page: { padding: '24px', maxWidth: '960px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' },
  backBtn: { background: 'none', border: '1px solid #ddd', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', color: '#555' },
  email: { margin: '2px 0 0', color: '#888', fontSize: '13px' },
  table: { width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  th: { padding: '12px 16px', background: '#1a1a2e', color: '#fff', textAlign: 'left', fontSize: '14px' },
  tr: { borderBottom: '1px solid #f0f0f0' },
  td: { padding: '12px 16px', fontSize: '14px' },
  badge: { padding: '4px 10px', borderRadius: '12px', color: '#fff', fontSize: '12px', fontWeight: 'bold' },
  deleteBtn: { padding: '5px 12px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
  userGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' },
  userCard: { background: '#fff', borderRadius: '8px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px', transition: 'box-shadow 0.15s' },
  userAvatar: { background: '#1a1a2e', color: '#fff', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold', flexShrink: 0 },
  userName: { margin: 0, fontWeight: 'bold', fontSize: '15px' },
  userEmail: { margin: '2px 0', fontSize: '12px', color: '#888' },
  orderCount: { margin: 0, fontSize: '12px', color: '#1a73e8', fontWeight: 'bold' },
}

export default Orders
