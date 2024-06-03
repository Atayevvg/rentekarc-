const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Veritabanı bağlantısı
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Kullanıcı şeması
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));

// Kayıt işlemi
app.post('/register', (req, res) => {
    const newUser = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err) => {
        if (err) {
            console.log(err);
            res.send('Kayıt sırasında bir hata oluştu.');
        } else {
            res.send('Kayıt başarılı.');
        }
    });
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});

