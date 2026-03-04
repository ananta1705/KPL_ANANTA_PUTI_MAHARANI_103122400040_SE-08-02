/**
 * buatlah sebuah array berisi 3 minuman favorit kalian, dan simpan dalam variabel
 * bersama listminuman. setelah itu, ubah 2 element pertama mengggunakan notasi kurung dan penugasan.
 *  terakhir tambhakan minuman baru di deoan array
 */ 

const minumanFavorit = ["Es Teh", "Jus Jeruk", "Kopi"];

minumanFavorit[0] = "Es Kopi";
minumanFavorit[1] = "Jus Alpukat";
minumanFavorit.unshift("soda");
console.log(minumanFavorit);
