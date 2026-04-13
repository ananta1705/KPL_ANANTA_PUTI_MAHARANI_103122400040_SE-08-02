// fungsi untuk elemen pembagian

// function div (a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Pembagi tidak boleh nol");
//         }
//         return a / b;
//     } catch (error) {
//         console.error(ada.error);
//     }
    
//     }

// // Fungsi untuk melakukan pembagian
// function div(a, b) {
//     // Prakondisi
//     if (b === 0) {
//         return 0;
//     }

//     return a / b;
// }
// console.log(
//     div(20 ,40)
// );


function div(a, b) {
    //
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Argumen harus berupa number");
    }

    if (b === 0) {
        return 0;
    }

    const hasil = a / b;
// Pasqcakondisi
    if (hasil * b === a) {
        return hasil;
    }

    return 0;
}

console.log(div(20, 40));