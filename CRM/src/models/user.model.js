

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'sales', 'support'] },
  createdAt: { type: Date, default: Date.now }
}); 