# 📌Tugas Mandiri 02 – Pemrograman JavaScript
Repository ini berisi implementasi program JavaScript untuk menyelesaikan tugas **Modul 2 Pemrograman JavaScript**.

---

## 👩‍💻 Identitas Mahasiswa

**Nama** : Ananta Puti Maharani  
**NIM** : 103122400040  
**Kelas** : SE-08-02  

**Dosen Pengampu** : Yudha Islami Sulistiya  
**Asisten Praktikum** :  
- Adhiansyah Muhammad Pradana Farawowan  
- Hamid Khaeruman  

---

## 📖 Soal

Buatlah sebuah fungsi bernama `fizzBuzz` yang menerima input larik (array) dan mengembalikan deretan bilangan dengan aturan sebagai berikut: **"Fizz"** untuk kelipatan 2, **"Buzz"** untuk kelipatan 7, dan **"FizzBuzz"** untuk kelipatan 14. Beri nama berkas program sebagai `tm.js` dan taruh di direktori `TM`.

Contoh:

**Input:**  
`[8, 9, 32, 75, 84]`

**Output:**  
`Fizz 9 Fizz 75 FizzBuzz`

(Tip: Gunakan operator penyambungan string)

Agar bisa dinilai, pastikan bahwa fungsi bisa diekspor dan lolos uji. Berkas uji bisa dilihat di `test.js`. Cara menjalankannya adalah sebagai berikut:

1. Unduh terlebih dahulu berkas `test.js` dan taruh di direktori `TM` yang sama dengan `tm.js`.
2. Ekspor fungsi yang kamu tulis di `tm.js` dengan kode berikut:  
   `module.exports = fizzBuzz;`
3. Jalankan `test.js` menggunakan perintah:  
   `node test.js`
4. Jika ada pengujian yang gagal, perbaiki kembali kode program.
5. Jika semua pengujian sudah berhasil, dokumentasikan hasil output program tersebut.

---

# 💻 Kode Sumber

File sumber tersedia pada:

- [`tm.js`](./tm.js)  
- [`test.js`](./test.js)

---

# 🖥️ Output Program

Berikut hasil output ketika program dijalankan di terminal:

![output program](./Assets/output_terminal.png)

---

# 📝 Deskripsi Program

Program ini dibuat untuk memproses data berupa **array angka** dan mengubah setiap elemen berdasarkan aturan kelipatan tertentu.

Langkah kerja program adalah sebagai berikut:

1. Program terlebih dahulu melakukan **validasi input** untuk memastikan bahwa data yang dimasukkan berupa array.
2. Program kemudian melakukan **perulangan (looping)** untuk memeriksa setiap elemen dalam array.
3. Setiap angka akan dicek menggunakan **operator modulus (%)** untuk menentukan apakah angka tersebut merupakan kelipatan **14, 2, atau 7**.
4. Jika angka merupakan **kelipatan 14 atau bernilai 0**, maka diganti menjadi **"FizzBuzz"**.
5. Jika angka merupakan **kelipatan 2**, maka diganti menjadi **"Fizz"**.
6. Jika angka merupakan **kelipatan 7**, maka diganti menjadi **"Buzz"**.
7. Jika angka tidak memenuhi kondisi tersebut, maka angka akan **ditampilkan seperti nilai aslinya**.