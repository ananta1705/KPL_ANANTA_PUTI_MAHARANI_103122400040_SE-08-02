# 📌 Tugas Pendahuluan 10 – Library Construction

Repository ini berisi implementasi program untuk menyelesaikan tugas **Modul 10 Library Construction**.

---

## 👩‍💻 Identitas Mahasiswa

**Nama** : Ananta Puti Maharani  
**NIM** : 103122400040  
**Kelas** : SE-08-02  

**Asisten Praktikum** :
- Adhiansyah Muhammad Pradana Farawowan  
- Hamid Khaeruman  

---

## 📖 Soal

Buatlah sebuah **pustaka (library) JavaScript** yang menyediakan utilitas berupa dua fungsi:

- Fungsi untuk menghitung **jumlah huruf**
- Fungsi untuk menghitung **jumlah kata**

Dengan ketentuan sebagai berikut:

- Hanya karakter alfabet **A–Z (huruf besar dan kecil)** yang dihitung  
- **Spasi tidak dihitung** sebagai huruf  
- Pustaka harus dapat **diimpor (import)** ke dalam file lain  

---

## 💻 Kode Sumber

Program ini dibuat menggunakan beberapa file berikut:

- `index.js` → berisi implementasi fungsi library  
- `test.js` → digunakan untuk menguji fungsi yang dibuat  
- `package.json` → konfigurasi project Node.js  

---

## 💻 Output
![output program](./Assets/output.png)

---

## 📝 Deskripsi

Pada tugas ini dibuat sebuah pustaka JavaScript sederhana yang berfungsi untuk menghitung jumlah huruf dan jumlah kata dalam suatu teks.

Fungsi hitungHuruf menggunakan regular expression [a-zA-Z] untuk mengambil hanya karakter alfabet, sehingga angka, spasi, dan simbol tidak dihitung. Sedangkan fungsi hitungKata menggunakan pola \b[a-zA-Z]+\b untuk mendeteksi kata yang hanya terdiri dari huruf.

Pustaka ini menggunakan sistem modul ES Module (ESM) dengan sintaks export dan import, sehingga dapat digunakan kembali pada file lain. Pengujian dilakukan melalui file test.js dengan cara mengimpor fungsi dari index.js.
