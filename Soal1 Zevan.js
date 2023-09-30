// dibawah ini adalah fungsi yang digunakan untuk meng-import fungsi aritmatika yang telah ditulis di MyCoolModule.js
const eksekusi = require('./MyCoolModule');

// dibawah ini adalah data sisi persegi dan juga fungsi untuk menghitung luas dan keliling persegi.
// Catatan, data sisi persegi nantinya "dilemparkan" ke module MyCoolModule untuk dieksekusi
const sisi = 3;
console.log(`Luas Persegi: ${eksekusi.luas_persegi(sisi)}`);
console.log(`Keliling Persegi: ${eksekusi.keliling_persegi(sisi)}`);

// dibawah ini adalah data panjang dan lebar persegi panjang dan juga fungsi untuk menghitung luas dan keliling persegi panjang.
// Catatan, data panjang dan lebar persegi nantinya "dilemparkan" ke module MyCoolModule untuk dieksekusi
const panjang = 3+2;
const lebar = 6;
console.log(`Luas Persegi Panjang: ${eksekusi.luas_persegi_panjang(panjang, lebar)}`);
console.log(`Keliling Persegi Panjang: ${eksekusi.keliling_persegi_panjang(panjang, lebar)}`);