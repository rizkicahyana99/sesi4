// cara deklarasi variabel bertipe number 
// cirinya angka ditulis tanpa menggunakan tanda petik

let angka1 = 50;    // number   ==> integer  / bulat
let angka2 = 65.49; // number   ==> float / pecahan

let angka3 = "45";  // string
let angka4 = '46';  // string

// console.log(angka1);
// console.log(angka2);

// melakukan pembulatan bilangan 
// pembulatan ke atas   ==> Math.ceil()
console.log('Pembulatan ke atas: ');
console.log(Math.ceil(angka2));

// pembulatan ke bawah  ==> Math.floor()
console.log('Pembulatan ke bawah: ');
console.log(Math.floor(angka2));

// pembulatan dinamis ke integer / bilangan bulat terdekat
console.log(Math.round(angka2));