# 📌 Tugas Mandiri 13.3 – Event Delegation pada JavaScript

## 👩‍💻 Identitas Mahasiswa

**Nama** : Ananta Puti Maharani  
**NIM** : 103122400040  
**Kelas** : SE-08-02  

---

# Event Delegation pada JavaScript

Event Delegation adalah teknik dalam JavaScript yang memanfaatkan **event bubbling**, yaitu proses ketika sebuah event dari elemen anak diteruskan ke elemen induknya. Dengan teknik ini, event listener cukup dipasang pada elemen parent sehingga dapat menangani event dari banyak child sekaligus.

Contohnya, daripada memasang event listener pada setiap tombol, kita cukup memasangnya pada container yang membungkus seluruh tombol tersebut. Ketika sebuah tombol diklik, parent akan memeriksa sumber event menggunakan `event.target`.

### Contoh

```javascript
const menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Menu dipilih:", event.target.textContent);
    }
});
```

### Keuntungan Event Delegation

- Menghemat memori karena hanya menggunakan satu event listener.
- Kode lebih sederhana dan mudah dipelihara.
- Dapat menangani elemen yang ditambahkan secara dinamis tanpa membuat listener baru.
- Meningkatkan efisiensi aplikasi ketika jumlah elemen banyak.

### Kesimpulan

Event Delegation merupakan teknik pengelolaan event yang efisien dengan menempatkan event listener pada parent dan memanfaatkan event bubbling untuk menangani event dari child. Teknik ini banyak digunakan dalam pengembangan web modern karena membuat kode lebih ringkas, fleksibel, dan hemat sumber daya.