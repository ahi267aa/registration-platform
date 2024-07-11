const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 用戶登入
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password });
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log('Database query result:', result.rows);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful, generated token:', token);
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

module.exports = router;
