## 📝 Jawaban Tugas Pendahuluan modul 06


![output program](./Assets/img.png)
Analisis Perbandingan: Asersi vs Eksepsi

Dalam pengembangan perangkat lunak modern, memastikan keandalan kode merupakan hal yang krusial. Dua pendekatan yang umum digunakan adalah asersi (assertion) dan eksepsi (exception). Keduanya memiliki fungsi untuk mendeteksi kesalahan, namun digunakan dalam konteks yang berbeda, terutama dalam kerangka Design by Contract (DbC).

Dalam konsep DbC, terdapat istilah:

Precondition → kondisi yang harus dipenuhi sebelum fungsi dijalankan
Postcondition → kondisi setelah fungsi dijalankan
Invariant → kondisi yang selalu benar

Asersi digunakan untuk memvalidasi precondition dan invariant internal yang diasumsikan benar oleh pengembang. Misalnya, pada fungsi divide(a, b), pengembang dapat mengasumsikan bahwa b tidak boleh nol. Jika kondisi ini dilanggar, maka itu menandakan adanya kesalahan logika dalam program. Oleh karena itu, asersi lebih cocok digunakan pada tahap pengembangan dan debugging, dan sering kali dinonaktifkan pada lingkungan produksi.

Sebaliknya, eksepsi digunakan untuk menangani kondisi error yang mungkin terjadi akibat faktor eksternal, seperti input pengguna yang tidak valid. Dalam konteks fungsi divide, pengguna bisa saja memasukkan nilai nol atau bahkan tipe data yang salah. Oleh karena itu, eksepsi seperti TypeError atau Error digunakan agar program dapat menangani kesalahan tersebut secara elegan melalui mekanisme try-catch.

Jika hanya menggunakan asersi, maka program berisiko crash ketika menghadapi input pengguna yang tidak valid. Sebaliknya, jika hanya menggunakan eksepsi, maka kesalahan logika internal bisa tersembunyi dan tidak terdeteksi sejak awal.

Dengan demikian, pendekatan terbaik adalah mengombinasikan keduanya:

Asersi → untuk menjaga kebenaran logika internal (developer-facing)
Eksepsi → untuk menangani error dari luar (user-facing)

Kesimpulannya, penggunaan asersi dan eksepsi harus disesuaikan dengan konteks. Kombinasi keduanya akan menghasilkan perangkat lunak yang lebih robust, aman, dan sesuai dengan prinsip Design by Contract.
