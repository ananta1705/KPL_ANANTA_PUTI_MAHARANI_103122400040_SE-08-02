/**
 * tulislah sebuah fungsi yang menerika berikan N dan mencetak penjumlahan dari 1 hinga N. 
 * contohnya,jika N adalah 5, maka outputnya adalah 15 (dalam hal ini menjumlahkan 1 + 2 + 3 + 4 + 5).
 * 
 */

function sumUpToN(N) {
    let sum = 0;
    let expression = [];
    for (let i = 1; i <= N; i++) {
        sum += i;
        expression.push(i);
    }
    return sum;
}

// Contoh penggunaan
const N = 5;
const result = sumUpToN(N);
console.log(`Penjumlahan dari 1 hingga ${N} adalah: ${result}`); // Output: Penjumlahan dari 1 hingga 5 adalah: 15
