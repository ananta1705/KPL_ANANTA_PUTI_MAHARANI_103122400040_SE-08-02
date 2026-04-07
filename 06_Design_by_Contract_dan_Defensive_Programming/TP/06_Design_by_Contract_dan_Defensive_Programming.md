## 📝 Jawaban Tugas Pendahuluan modul 06


![output program](./Assets/img.png)
Pada kode yang diberikan terdapat dua cara menangani kesalahan, yaitu menggunakan **asersi** dan **eksepsi**.

Asersi digunakan untuk memastikan bahwa kondisi tertentu benar, seperti memastikan input berupa angka dan tidak nol. Jika kondisi tidak terpenuhi, program akan langsung berhenti. Oleh karena itu, asersi lebih cocok digunakan saat pengembangan untuk mendeteksi kesalahan logika lebih awal.

Eksepsi digunakan untuk menangani kesalahan saat program dijalankan, seperti input yang tidak valid. Dengan menggunakan `throw` dan `try-catch`, program dapat memberikan pesan error tanpa langsung menghentikan seluruh proses. Eksepsi lebih cocok digunakan pada aplikasi yang berinteraksi dengan pengguna.

Dalam praktiknya, tidak perlu memilih salah satu secara mutlak. Asersi dapat digunakan untuk validasi internal saat pengembangan, sedangkan eksepsi digunakan untuk menangani error saat runtime.

Dengan demikian, kombinasi keduanya membuat program lebih aman, stabil, dan mudah dipelihara.
