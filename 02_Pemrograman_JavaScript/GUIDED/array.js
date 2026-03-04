const kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"];

kota.push("Semarang");
kota.push("Solo");
kota.pop();
// kota.reverse("medan");
// kota.splice(0,1); // hapus array pertama
// console.log(kota[1]);
kota[1] = "Bogor"; // mengubah array kedua menjadi Bogor
console.log(kota.slice(0,kota.length)); // menampilkan semua array