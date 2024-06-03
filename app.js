// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB'ye bağlan
mongoose.connect('mongodb://localhost/kullanici-yonetimi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlandı'))
  .catch(err => console.error(err));

// Middleware'leri kullan
app.use(bodyParser.json());

// Yeni bir kullanıcı oluştur
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Belirli bir kullanıcıyı getir
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Bir kullanıcıyı güncelle
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Bir kullanıcıyı sil
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Uygulamayı dinle
app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda çalışıyor);
});