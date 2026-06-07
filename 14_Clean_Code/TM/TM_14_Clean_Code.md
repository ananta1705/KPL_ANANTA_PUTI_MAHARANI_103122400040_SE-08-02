# 📌 Tugas Mandiri 14 – Clean Code

## 👩‍💻 Identitas Mahasiswa

**Nama** : Ananta Puti Maharani  
**NIM** : 103122400040  
**Kelas** : SE-08-02  

---

## 1. Ringkasan Tugas
Tugas ini berfokus pada refactoring kode menjadi lebih bersih dengan prinsip Clean Code. Contoh utama adalah memecah fungsi `fetchOrderDetails()` yang memiliki beberapa tanggung jawab menjadi beberapa fungsi kecil.

## 2. Jawaban
Berikut adalah jawaban berdasarkan prinsip Clean Code:

### a. Refactoring Kode
- `fetchOrderDetails(orderId, token)`
  - Mengambil data pesanan dari API
  - Menangani validasi respons
  - Memanggil `showOrderModal()` untuk menampilkan detail pesanan

- `showOrderModal(order, token)`
  - Menampilkan modal dengan detail pesanan
  - Menyiapkan tombol tutup dan konfirmasi

- `setupCloseButton(modal)`
  - Menangani aksi klik tombol tutup modal

- `setupConfirmButton(modal, order, token)`
  - Mengatur aksi konfirmasi pesanan
  - Menyembunyikan tombol jika status pesanan sudah "Delivered"

### b. Prinsip Clean Code yang diterapkan
1. **Single Responsibility Principle**
   - Setiap fungsi hanya punya satu tujuan.
2. **Meaningful Names**
   - Nama fungsi jelas dan deskriptif.
3. **Readability**
   - Logika terpisah membuat kode mudah dibaca.
4. **Maintainability**
   - Perubahan menjadi lebih mudah dilakukan tanpa memengaruhi bagian lain.

## 3. Kesimpulan
Dengan memecah fungsi besar menjadi beberapa fungsi kecil dan bermakna, kode menjadi lebih bersih, lebih mudah dipahami, dan lebih mudah dikembangkan di masa depan. Prinsip Clean Code membantu menjaga kualitas kode dan mengurangi risiko kesalahan.

## 4. Saran
- Gunakan nama variabel dan fungsi yang deskriptif.
- Hindari menempatkan lebih dari satu tanggung jawab dalam satu fungsi.
- Pisahkan logika antarmuka pengguna, panggilan jaringan, dan penanganan event.
