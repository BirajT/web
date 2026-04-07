import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createMenuApi } from '../api/menu.api'
import { getAllCategoriesApi } from '../api/category.api'

const CreateMenu = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', price: '', category: '', availability: 'Available' })
  const [image, setImage] = useState(null)
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllCategoriesApi()
      .then(res => setCategories(res.data.data))
      .catch(() => setError('Failed to load categories'))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('price', form.price)
      fd.append('category', form.category)
      fd.append('availability', form.availability)
      if (image) fd.append('image', image)
      await createMenuApi(fd)
      navigate('/menu')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create menu item')
    } finally {
      setLoading(false)
    }
  }

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create Menu Item</h2>
        {error && <p style={styles.error}>{error}</p>}

        <label style={styles.label}>Name</label>
        <input style={styles.input} placeholder="e.g. Chicken Burger" value={form.name} onChange={set('name')} required />

        <label style={styles.label}>Price (Rs.)</label>
        <input style={styles.input} type="number" placeholder="e.g. 150" value={form.price} onChange={set('price')} required />

        <label style={styles.label}>Category</label>
        <select style={styles.input} value={form.category} onChange={set('category')} required>
          <option value="">-- Select Category --</option>
          {categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <label style={styles.label}>Availability</label>
        <select style={styles.input} value={form.availability} onChange={set('availability')}>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>

        <label style={styles.label}>Image</label>
        <input style={styles.input} type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />

        <div style={styles.row}>
          <button type="button" style={styles.cancelBtn} onClick={() => navigate('/menu')}>Cancel</button>
          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? 'Creating...' : 'Create Item'}
          </button>
        </div>
      </form>
    </div>
  )
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '40px 16px' },
  form: { background: '#fff', padding: '32px', borderRadius: '8px', width: '420px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '8px' },
  title: { margin: '0 0 8px', textAlign: 'center' },
  label: { fontSize: '13px', fontWeight: 'bold', color: '#555' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' },
  row: { display: 'flex', gap: '10px', marginTop: '8px' },
  btn: { flex: 1, padding: '10px', background: '#34a853', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '15px' },
  cancelBtn: { flex: 1, padding: '10px', background: '#eee', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '15px' },
  error: { color: 'red', fontSize: '13px', margin: 0 }
}

export default CreateMenu
