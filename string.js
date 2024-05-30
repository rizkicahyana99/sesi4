// cara deklarasi variabel bertipe string
// menggunakan tanda petik / petik 2 atau petik 1 

let nama_pemain = 'Cristiano Ronaldo';
let posisi = "Left Winger";
let current_club = "Al Nassr";

console.log(nama_pemain);
console.log(posisi);

// teknik penggabungan string 
/*
    1. concat / gabung string mengunakan operator / simbol + 
*/ 
console.log(nama_pemain + ' bermain pada posisi ' + posisi + ' di klub ' + current_club);
console.log(nama_pemain + " bermain pada posisi " + posisi + " di klub " + current_club);

/* 2. literal template  ==> menggunakan simbol back tick `
*/
console.log(`${nama_pemain} bermain pada posisi ${posisi} di klub ${current_club}`);