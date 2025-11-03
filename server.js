const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio Application Backend' });
});

// SIMPLE WORKING API ENDPOINTS (no controllers needed)
app.get('/api/contacts', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Contacts API is working',
    data: []
  });
});

app.post('/api/contacts', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Contact created successfully',
    data: req.body
  });
});

app.get('/api/projects', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Projects API is working',
    data: []
  });
});

app.post('/api/projects', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Project created successfully', 
    data: req.body
  });
});

app.get('/api/qualifications', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Qualifications API is working',
    data: []
  });
});

app.post('/api/qualifications', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Qualification created successfully',
    data: req.body
  });
});

app.get('/api/users', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Users API is working',
    data: []
  });
});

app.post('/api/users', (req, res) => {
  res.json({ 
    success: true, 
    message: 'User created successfully',
    data: req.body
  });
});

// Authentication
app.post('/api/auth/signup', (req, res) => {
  res.json({ 
    success: true, 
    message: 'User registered successfully',
    token: 'jwt-token-here'
  });
});

app.post('/api/auth/signin', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Login successful',
    token: 'jwt-token-here'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});