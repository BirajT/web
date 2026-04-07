import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { forgotPasswordApi } from '../api/auth.api'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', newpassword: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await forgotPasswordApi(form)
      setSuccess('Password reset successfully. You can now login.')
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Forgot Password</h2>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <input style={styles.input} type="email" placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input style={styles.input} type="password" placeholder="New password" value={form.newpassword}
          onChange={e => setForm({ ...form, newpassword: e.target.value })} required />
        <button style={styles.btn} type="submit" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
        <p style={styles.footer}><Link to="/login">Back to login</Link></p>
      </form>
    </div>
  )
}

const styles = {
  container: { display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh' },
  form: { background:'#fff', padding:'32px', borderRadius:'8px', width:'360px', boxShadow:'0 2px 12px rgba(0,0,0,0.1)', display:'flex', flexDirection:'column', gap:'12px' },
  title: { margin:0, textAlign:'center' },
  input: { padding:'10px', border:'1px solid #ddd', borderRadius:'4px', fontSize:'14px' },
  btn: { padding:'10px', background:'#e94560', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer', fontSize:'15px' },
  error: { color:'red', fontSize:'13px', margin:0 },
  success: { color:'green', fontSize:'13px', margin:0 },
  footer: { fontSize:'13px', textAlign:'center', margin:0 }
}

export default ForgotPassword
