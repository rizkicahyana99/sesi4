/*
    deklarasi array: 
    1. menggunakan keyword Array    ==> new Array()
    Format:
        let namavariabel = new Array(nilai1, ..., nilaiN);

    2. menggunakan kurung siku []
    Format: 
        let namavariabel = [nilai1, ..., nilaiN];
*/

// let club_name_1 = 'Barcelona FC';
// let club_name_2 = 'Persebaya';
// let club_name_3 = 'Madura United';

let club_name = new Array('Bayern Leverkusen', 'PSV Eindhoven', 'Real Madrid');
// indeks / posisi              0                   1                   2
console.log(club_name);

/*
    menampilkan nilai tertentu dari dalam array
    Format: 
        namavariabel[indeks];
*/

// tampilkan Real Madrid 
 console.log(club_name[2]);


let namaBuahBuahan = ['Apel', 'Anggur', 'Semangka', 'Nangka'];
// indeks               0       1           2           3
console.log(namaBuahBuahan);

// tampilkan Anggur
console.log(namaBuahBuahan[1]);