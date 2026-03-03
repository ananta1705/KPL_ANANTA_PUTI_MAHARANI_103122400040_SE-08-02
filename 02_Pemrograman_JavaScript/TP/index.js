// Input array untuk TP Modul 2
const arr = [2, 0, 26, 28, -2];

// Fungsi untuk mengalikan semua bilangan POSITIF dalam array
function mulOfArray(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {        // hanya bilangan > 0 yang dihitung
            result = result * arr[i];
        }
    }

    return result;
}

// Memanggil fungsi
console.log(mulOfArray(arr));