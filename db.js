const mongoose = require('mongoose');

// MongoDB'ye bağlanmak için gerekli URI
const dbURI = 'mongodb://localhost:27017/userDB';

// Veritabanı bağlantısı
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Bağlantı başarılı olduğunda konsola mesaj yazdırma
mongoose.connection.on('connected', () => {
    console.log('MongoDB\'ye başarıyla bağlandı.');
});

// Bağlantı hatası olduğunda konsola hata mesajı yazdırma
mongoose.connection.on('error', (err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

// Bağlantı kesildiğinde konsola mesaj yazdırma
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB bağlantısı kesildi.');
});

// Uygulama kapatıldığında MongoDB bağlantısını kapatma
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Uygulama sonlandırıldı. MongoDB bağlantısı kapatıldı.');
        process.exit(0);
    });
});
