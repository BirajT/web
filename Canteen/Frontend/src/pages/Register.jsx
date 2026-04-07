import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { registerApi } from '../api/auth.api'

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ first_name:'', last_name:'', email:'', password:'', phone:'', gender:'' })
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => v && fd.append(k, v))
      if (image) fd.append('image', image)
      await registerApi(fd)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.row}>
          <input style={styles.input} placeholder="First name" value={form.first_name} onChange={set('first_name')} required />
          <input style={styles.input} placeholder="Last name" value={form.last_name} onChange={set('last_name')} required />
        </div>
        <input style={styles.input} type="email" placeholder="Email" value={form.email} onChange={set('email')} required />
        <input style={styles.input} type="password" placeholder="Password" value={form.password} onChange={set('password')} required />
        <input style={styles.input} placeholder="Phone (optional)" value={form.phone} onChange={set('phone')} />
        <select style={styles.input} value={form.gender} onChange={set('gender')}>
          <option value="">Select gender (optional)</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input style={styles.input} type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
        <button style={styles.btn} type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p style={styles.footer}>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

const styles = {
  container: { display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh' },
  form: { background:'#fff', padding:'32px', borderRadius:'8px', width:'400px', boxShadow:'0 2px 12px rgba(0,0,0,0.1)', display:'flex', flexDirection:'column', gap:'12px' },
  title: { margin:0, textAlign:'center' },
  row: { display:'flex', gap:'8px' },
  input: { padding:'10px', border:'1px solid #ddd', borderRadius:'4px', fontSize:'14px', flex:1 },
  btn: { padding:'10px', background:'#e94560', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer', fontSize:'15px' },
  error: { color:'red', fontSize:'13px', margin:0 },
  footer: { fontSize:'13px', textAlign:'center', margin:0 }
}

export default Register
