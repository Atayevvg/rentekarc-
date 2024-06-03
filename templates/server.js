// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Veritabanına bağlan
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err.message);
});

// Rotalar
app.use('/templates/routes/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


document.querySelector('.signin').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await res.json();
      if (data.token) {
        // Başarılı giriş işlemi
        console.log('Login successful:', data.token);
        // Token'ı saklayabilirsiniz (örneğin, localStorage kullanarak)
        localStorage.setItem('token', data.token);
      } else {
        // Hata mesajını göster
        console.error(data.message);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  });
  

  document.querySelector('.register').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const bio = e.target.bio.value;
    const avatar = e.target.photo.files[0]; // Fotoğraf yükleme
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('bio', bio);
    formData.append('avatar', avatar);
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData
      });
  
      const data = await res.json();
      if (data.token) {
        // Başarılı kayıt işlemi
        console.log('Register successful:', data.token);
        // Token'ı saklayabilirsiniz (örneğin, localStorage kullanarak)
        localStorage.setItem('token', data.token);
      } else {
        // Hata mesajını göster
        console.error(data.message);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  });
  