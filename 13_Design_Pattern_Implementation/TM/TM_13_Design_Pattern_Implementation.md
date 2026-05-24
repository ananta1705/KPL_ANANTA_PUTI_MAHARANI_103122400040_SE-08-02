# LAPORAN TUGAS MANDIRI
## MODUL 13 — DESIGN PATTERN IMPLEMENTATION

| Identitas | Keterangan |
|---|---|
| Nama | Ananta Puti Maharani |
| NIM | 103122400040 |
| Project | Telkom-In-Competition |
| Modul | Design Pattern |

---

# I. DESKRIPSI SISTEM

Pada project **Telkom-In-Competition**, digunakan sistem broadcast pengumuman untuk mengirim informasi penting dari admin kepada user secara realtime.

Pengumuman yang dibuat admin akan langsung tampil pada dashboard user tanpa perlu melakukan refresh halaman.

Untuk membangun sistem tersebut digunakan beberapa design pattern, yaitu:

1. Singleton Pattern  
2. Observer Pattern  
3. Factory Pattern  

Design pattern digunakan agar sistem menjadi:
- lebih modular
- mudah dikembangkan
- reusable
- mudah maintenance
- realtime

---

# II. STRUKTUR FILE

```plaintext
frontend/
└── src/
    └── app/
        ├── utils/
        │   └── broadcastPatterns.ts
        │
        └── pages/
            ├── UserDashboard.tsx
            └── AdminDashboard.tsx
```

---

# IV. IMPLEMENTASI DESIGN PATTERN

# 1. Singleton Pattern

## File Implementasi

```plaintext
frontend/src/app/utils/broadcastPatterns.ts
```

## Code Singleton

```ts
export class BroadcastManager {

  private static instance:
    BroadcastManager | null = null;

  public static getInstance():
    BroadcastManager {

    if (!BroadcastManager.instance) {

      BroadcastManager.instance =
        new BroadcastManager();

    }

    return BroadcastManager.instance;
  }
}
```

## Penjelasan

Singleton Pattern digunakan pada class:

```ts
BroadcastManager
```

Pattern ini memastikan bahwa aplikasi hanya memiliki satu instance manager broadcast.

Method:

```ts
getInstance()
```

digunakan untuk mengambil instance global yang sama pada seluruh aplikasi.

Dengan Singleton:
- data broadcast menjadi terpusat
- tidak terjadi duplikasi manager
- data antar dashboard tetap sinkron
- lebih mudah maintenance

Jika tidak menggunakan Singleton, maka setiap dashboard bisa memiliki manager berbeda sehingga data broadcast tidak konsisten.

---

# 2. Observer Pattern

## File Implementasi

```plaintext
frontend/src/app/utils/broadcastPatterns.ts
frontend/src/app/pages/UserDashboard.tsx
frontend/src/app/pages/AdminDashboard.tsx
```

## Code Observer Interface

```ts
export interface BroadcastObserver {

  onBroadcastReceived(
    broadcasts: Broadcast[]
  ): void;

}
```

## Code Subscribe Observer

```ts
public subscribe(
  observer: BroadcastObserver
): () => void {

  this.observers.push(observer);

  observer.onBroadcastReceived(
    this.broadcasts
  );

  return () => {
    this.unsubscribe(observer);
  };
}
```

## Code Notify Observer

```ts
private notifyObservers(): void {

  this.observers.forEach((observer) => {

    observer.onBroadcastReceived(
      this.broadcasts
    );

  });
}
```

## Implementasi Pada Dashboard

```ts
const unsubscribe =
  manager.subscribe(observer);
```

## Penjelasan

Observer Pattern digunakan agar dashboard user dan dashboard admin dapat menerima update pengumuman secara realtime.

Pada pattern ini:
- `BroadcastManager` bertindak sebagai Subject
- `UserDashboard` dan `AdminDashboard` bertindak sebagai Observer

Ketika admin membuat pengumuman baru menggunakan:

```ts
addBroadcast()
```

maka method:

```ts
notifyObservers()
```

akan dijalankan.

Seluruh observer yang telah melakukan subscribe akan otomatis menerima update data terbaru tanpa perlu refresh halaman.

Keuntungan Observer Pattern:
- realtime update
- mengurangi coupling antar komponen
- lebih modular
- mudah dikembangkan

---

# 3. Factory Pattern

## File Implementasi

```plaintext
frontend/src/app/utils/broadcastPatterns.ts
```

## Code Factory Pattern

```ts
export class BroadcastAlertFactory {

  public static createAlert(
    broadcast: Broadcast
  ): BroadcastAlert {

    switch (broadcast.urgency) {

      case 'critical':

        return new CriticalAlert(
          broadcast
        );

      case 'warning':

        return new WarningAlert(
          broadcast
        );

      case 'info':
      default:

        return new InfoAlert(
          broadcast
        );
    }
  }
}
```

## Penjelasan

Factory Pattern digunakan untuk membuat object alert berdasarkan tingkat urgency broadcast.

Factory akan menentukan object yang dibuat:
- `InfoAlert`
- `WarningAlert`
- `CriticalAlert`

sesuai data urgency yang diterima.

Tanpa Factory Pattern, proses pembuatan alert harus dilakukan menggunakan banyak `if-else` atau `switch-case` di dalam UI.

Dengan Factory Pattern:
- code lebih rapih
- object creation lebih terpusat
- mengurangi pengulangan code
- mudah menambahkan tipe alert baru

Contohnya jika nanti ingin menambahkan:
```plaintext
EmergencyAlert
SystemAlert
```

maka cukup menambahkan class baru tanpa mengubah banyak code UI.

---

# V. CARA KERJA SISTEM

```plaintext
Admin membuat pengumuman
            ↓
BroadcastManager menyimpan data
            ↓
notifyObservers() dijalankan
            ↓
Observer menerima update
            ↓
Dashboard user otomatis berubah
```

---

# VI. KESIMPULAN

Pada project Telkom-In-Competition digunakan beberapa design pattern untuk membangun sistem broadcast pengumuman secara realtime.

1. Singleton Pattern digunakan untuk memastikan hanya ada satu manager broadcast pada aplikasi.

2. Observer Pattern digunakan agar dashboard user dan admin dapat menerima update data broadcast secara otomatis dan realtime.

3. Factory Pattern digunakan untuk membuat object alert berdasarkan urgency broadcast secara lebih modular dan terstruktur.

Penggunaan design pattern membuat sistem menjadi lebih modular, reusable, mudah dikembangkan, dan lebih mudah maintenance.