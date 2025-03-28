// ========== server.js ==========
// Backend Entry Point (Node.js + Express.js)

// 1. Import Required Modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// 2. Load Environment Variables (for secrets like MongoDB URL)
dotenv.config();

// 3. Initialize Express App
const app = express();

// 4. Middleware Setup
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON requests

// 5. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// 6. Define a Test Route (Optional)
app.get('/', (req, res) => {
  res.send('🚀 TravelEase Backend is Running!');
});

// 7. Import Routes (Example: Auth Routes)
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// 8. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});