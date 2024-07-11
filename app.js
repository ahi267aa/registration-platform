const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const users = require('./routes/users');
app.use('/users', users);

const auth = require('./routes/auth');
app.use('/login', auth);

// 提供靜態文件
app.use(express.static(path.join(__dirname, 'public')));

// 處理根路徑的請求
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
