# 📌 Tugas Pendahuluan 14 – Clean Code

## 👩‍💻 Identitas Mahasiswa

**Nama** : Ananta Puti Maharani  
**NIM** : 103122400040  
**Kelas** : SE-08-02  

---

# Refactoring Kode Berdasarkan Prinsip Clean Code

Clean Code adalah teknik menulis kode yang mudah dibaca, dipahami, dan dipelihara oleh programmer lain maupun diri sendiri di masa depan. Salah satu prinsip penting dalam Clean Code adalah **Single Responsibility Principle**, yaitu setiap fungsi sebaiknya hanya memiliki satu tugas.

Pada kode yang diberikan, fungsi `fetchOrderDetails()` memiliki terlalu banyak tanggung jawab, seperti mengambil data dari API, menampilkan modal, serta mengatur event tombol. Oleh karena itu, kode perlu direfactoring dengan memecah fungsi besar menjadi beberapa fungsi yang lebih spesifik.

## Hasil Refactoring

```javascript
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/orders/${orderId}`, {
        headers: {
            Authorization: token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch order details");
            }
            return response.json();
        })
        .then(order => showOrderModal(order, token))
        .catch(error => console.error("Error:", error));
}

function showOrderModal(order, token) {
    const modal = document.getElementById("orderModal");
    const detailContainer = modal.querySelector("#orderDetails");

    detailContainer.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;

    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    modal.style.display = "block";
}

function setupCloseButton(modal) {
    const closeButton = modal.querySelector(".close");

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function setupConfirmButton(modal, order, token) {
    const confirmButton = modal.querySelector("#confirmOrderBtn");

    if (order.status === "Delivered") {
        confirmButton.style.display = "none";
        return;
    }

    confirmButton.addEventListener("click", () => {
        confirmOrder(order.id, token);
    });
}
```

## Prinsip Clean Code yang Diterapkan

### 1. Single Responsibility Principle

Setiap fungsi memiliki satu tugas yang jelas sehingga kode lebih mudah dipahami dan dikelola.

### 2. Meaningful Names

Nama fungsi dibuat deskriptif seperti:

- `showOrderModal()`
- `setupCloseButton()`
- `setupConfirmButton()`

sehingga tujuan fungsi dapat langsung diketahui.

### 3. Readability

Kode menjadi lebih rapi dan mudah dibaca karena logika dipisahkan ke dalam beberapa fungsi kecil.

### 4. Maintainability

Perubahan pada fitur tertentu dapat dilakukan tanpa memengaruhi bagian kode lainnya.

## Kesimpulan

Refactoring dilakukan dengan memecah fungsi yang terlalu besar menjadi beberapa fungsi kecil sesuai tanggung jawabnya masing-masing. Dengan menerapkan prinsip Clean Code, kode menjadi lebih mudah dibaca, dipahami, dan dipelihara sehingga kualitas perangkat lunak menjadi lebih baik.