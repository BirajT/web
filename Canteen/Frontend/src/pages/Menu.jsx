import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllMenuApi, deleteMenuApi } from '../api/menu.api'
import { getAllCategoriesApi } from '../api/category.api'
import { createOrderApi } from '../api/order.api'
import { useAuth } from '../context/AuthContext'

const Menu = () => {
  const { user } = useAuth()
  const [menus, setMenus] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [orderMsg, setOrderMsg] = useState('')
  const [quantities, setQuantities] = useState({})

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER'

  useEffect(() => {
    Promise.all([getAllMenuApi(), getAllCategoriesApi()])
      .then(([menuRes, catRes]) => {
        setMenus(menuRes.data.data)
        setCategories(catRes.data.data)
      })
      .catch(() => setError('Failed to load menu'))
      .finally(() => setLoading(false))
  }, [])

  const handleOrder = async (menuId) => {
    if (!user) {
      setOrderMsg('Please login to place an order')
      setTimeout(() => setOrderMsg(''), 3000)
      return
    }
    const qty = quantities[menuId] || 1
    try {
      await createOrderApi({ menu: menuId, quantity: qty })
      setOrderMsg('Order placed successfully!')
      setTimeout(() => setOrderMsg(''), 3000)
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to place order'
      setOrderMsg(`Error: ${msg}`)
      setTimeout(() => setOrderMsg(''), 6000)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this menu item?')) return
    try {
      await deleteMenuApi(id)
      setMenus(menus.filter(m => m._id !== id))
    } catch {
      alert('Failed to delete')
    }
  }

  // filter by active category
  const filtered = activeCategory === 'All'
    ? menus
    : menus.filter(m => m.category?.name === activeCategory || m.category?._id === activeCategory)

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>Menu</h2>
        {isAdmin && <Link to="/menu/create" style={styles.createBtn}>+ Add Item</Link>}
      </div>

      {/* Category tabs */}
      <div style={styles.tabs}>
        {['All', ...categories.map(c => c.name)].map(cat => (
          <button
            key={cat}
            style={{ ...styles.tab, ...(activeCategory === cat ? styles.tabActive : {}) }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {orderMsg && (
        <div style={{ ...styles.toast, background: orderMsg.startsWith('Error') ? '#e94560' : '#1a1a2e' }}>
          {orderMsg}
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : filtered.length === 0 ? (
        <p style={{ color: '#888' }}>No items in this category.</p>
      ) : (
        <div style={styles.grid}>
          {filtered.map(menu => (
            <div key={menu._id} style={styles.card}>
              {menu.image?.path
                ? <img src={menu.image.path} alt={menu.name} style={styles.img} />
                : <div style={styles.imgPlaceholder}>🍽</div>
              }
              <div style={styles.cardBody}>
                <span style={styles.catTag}>{menu.category?.name || ''}</span>
                <h3 style={styles.cardTitle}>{menu.name}</h3>
                <p style={styles.price}>Rs. {menu.price}</p>
                <span style={{
                  ...styles.availBadge,
                  background: menu.availability === 'Unavailable' ? '#f5f5f5' : '#e8f5e9',
                  color: menu.availability === 'Unavailable' ? '#999' : '#2e7d32'
                }}>
                  {menu.availability || 'Available'}
                </span>

                {user && !isAdmin && menu.availability !== 'Unavailable' && (
                  <div style={styles.orderRow}>
                    <input
                      type="number" min="1"
                      value={quantities[menu._id] || 1}
                      onChange={e => setQuantities({ ...quantities, [menu._id]: parseInt(e.target.value) || 1 })}
                      style={styles.qtyInput}
                    />
                    <button style={styles.orderBtn} onClick={() => handleOrder(menu._id)}>Order</button>
                  </div>
                )}

                {isAdmin && (
                  <button style={styles.deleteBtn} onClick={() => handleDelete(menu._id)}>Delete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  page: { padding: '24px', maxWidth: '1100px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' },
  createBtn: { background: '#34a853', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' },
  tabs: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' },
  tab: { padding: '7px 16px', borderRadius: '20px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: '13px', color: '#555' },
  tabActive: { background: '#1a1a2e', color: '#fff', border: '1px solid #1a1a2e' },
  toast: { color: '#fff', padding: '10px 16px', borderRadius: '4px', marginBottom: '16px', display: 'inline-block' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '16px' },
  card: { background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  img: { width: '100%', height: '160px', objectFit: 'cover' },
  imgPlaceholder: { width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', background: '#f4f7fa' },
  cardBody: { padding: '14px', display: 'flex', flexDirection: 'column', gap: '5px' },
  catTag: { fontSize: '11px', color: '#1a73e8', fontWeight: 'bold', textTransform: 'uppercase' },
  cardTitle: { margin: 0, fontSize: '16px' },
  price: { margin: 0, color: '#e94560', fontWeight: 'bold', fontSize: '15px' },
  availBadge: { fontSize: '11px', padding: '3px 8px', borderRadius: '10px', alignSelf: 'flex-start' },
  orderRow: { display: 'flex', gap: '6px', marginTop: '4px' },
  qtyInput: { width: '52px', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', textAlign: 'center' },
  orderBtn: { flex: 1, padding: '7px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' },
  deleteBtn: { padding: '7px', background: '#f5f5f5', color: '#c00', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', marginTop: '4px' },
  error: { color: 'red', fontSize: '14px' }
}

export default Menu
