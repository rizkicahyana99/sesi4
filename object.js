/* deklarasi object: 
 Format: 
    let namavariabel = {
        property1: value1,
        property2: value2,
        ...,
        propertyN: valueN
    };

*/

let player = {
    name: 'Cristiano Ronaldo',
    nationality: 'Portugal',
    current_club: 'Al Nassr',
    club_history: [
        'FC A',
        'Manchester United',
        'Real Madrid',
        'Bhayangkara FC',
    ],
    market_value: 8900,
    attribute: {
        attacking: {
            shooting: 82,
            finishing: 80,
            dribbling: 81,
        },
        defending: {
            tackling: 55,
            marking: 53,
        },
        physical: {
            stamina: 75,
            agility: 71,
            jumping: 70,
        },
    },
    is_active: true
};

/*
    Cara mengakses nilai di dalam object 
    Format: 
        1. namavariabel.nama_property
        2. namavariabel['nama_property']

    Mengakses nilai yang berada di dalam property lain:
    Format: 
        namavariabel.namaproperty1.namaproperty2.namaproperty3;

*/

// Tampilkan nama 
console.log(player.name);   // lebih sering digunakan
console.log(player['name']);

// Tampilkan statistik finishing 
console.log(player.attribute.attacking.finishing);
