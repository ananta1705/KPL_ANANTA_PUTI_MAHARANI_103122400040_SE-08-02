// Input array
const arr1 = [1, -2, 3, -4, 5, -6];

// Fungsi untuk mengalikan bilangan positif saja
function mulOfArray(arr) {
    let result = 1; // nilai awal perkalian

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {      // hanya ambil bilangan positif
            result = result * arr[i];
        }
    }

    return result;
}

// Panggil fungsi
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);