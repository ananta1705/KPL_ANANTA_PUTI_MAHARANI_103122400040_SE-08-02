// mengambil elemen dari HTML
const editor = document.getElementById("editor-kecil");

const jumlahHuruf = document.getElementById("hf");
const hurufBesar = document.getElementById("hb");
const hurufKecil = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");


// fungsi menghitung huruf
function hitungHuruf() {

const teks = editor.value;

jumlahHuruf.textContent = teks.length;

let besar = 0;
let kecil = 0;

for (let huruf of teks) {

if (huruf >= "A" && huruf <= "Z") {
besar++;
}

else if (huruf >= "a" && huruf <= "z") {
kecil++;
}

}

hurufBesar.textContent = besar;
hurufKecil.textContent = kecil;

}


// menghitung saat user mengetik
editor.addEventListener("input", hitungHuruf);


// tombol ubah ke huruf besar
btnBesar.addEventListener("click", function () {

editor.value = editor.value.toUpperCase();

hitungHuruf();

});


// tombol ubah ke huruf kecil
btnKecil.addEventListener("click", function () {

editor.value = editor.value.toLowerCase();

hitungHuruf();

});


// menjalankan fungsi saat halaman pertama dibuka
hitungHuruf();