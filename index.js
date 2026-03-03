// Input array untuk TP Modul 2
const arr1 = [2, 0, 26, 28, -2];

// Fungsi untuk mengalikan bilangan positif saja
function mulOfArray(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { // bilangan positif saja
            result *= arr[i];
        }
    }

    return result;
}

// Panggil fungsinya
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);