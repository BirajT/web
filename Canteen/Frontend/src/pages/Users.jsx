import { useEffect, useState } from 'react'
import { getAllUsersApi, deleteUserApi } from '../api/user.api'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getAllUsersApi()
      .then(res => setUsers(res.data.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load users'))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Delete this user?')) return
    try {
      await deleteUserApi(id)
      setUsers(users.filter(u => u._id !== id))
    } catch {
      alert('Failed to delete user')
    }
  }

  if (loading) return <p style={{ padding: '24px' }}>Loading...</p>
  if (error) return <p style={{ padding: '24px', color: 'red' }}>{error}</p>

  return (
    <div style={styles.page}>
      <h2>Users</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} style={styles.tr}>
              <td style={styles.td}>{u.first_name} {u.last_name}</td>
              <td style={styles.td}>{u.email}</td>
              <td style={styles.td}>
                <span style={{ ...styles.role, background: u.role === 'ADMIN' ? '#e94560' : u.role === 'OWNER' ? '#1a73e8' : '#888' }}>
                  {u.role}
                </span>
              </td>
              <td style={styles.td}>{u.phone || '-'}</td>
              <td style={styles.td}>
                <button style={styles.deleteBtn} onClick={() => handleDelete(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const styles = {
  page: { padding: '24px', maxWidth: '900px', margin: '0 auto' },
  table: { width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  th: { padding: '12px 16px', background: '#1a1a2e', color: '#fff', textAlign: 'left', fontSize: '14px' },
  tr: { borderBottom: '1px solid #f0f0f0' },
  td: { padding: '12px 16px', fontSize: '14px' },
  role: { padding: '3px 10px', borderRadius: '12px', color: '#fff', fontSize: '12px', fontWeight: 'bold' },
  deleteBtn: { padding: '5px 12px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }
}

export default Users
