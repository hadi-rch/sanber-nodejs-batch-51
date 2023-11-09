// Buatlah sebuah function balikKata() yang menerima sebuah parameter berupa string 
// dan mengembalikan kebalikan dari string tersebut.
function balikKata(kata){
    var penampung ="";
    for (var i=kata.length - 1; i >= 0; i--){
        penampung += kata[i];
    }
    return penampung;
}

console.log(balikKata("SanberCode")) 
// Output: edoCrebnaS

console.log(balikKata("racecar")) 
// Output: racecar

console.log(balikKata("kasur rusak"))
// Output: kasur rusak

console.log(balikKata("haji ijah"))
// Output: haji ijah

console.log(balikKata("I am Sanbers"))
// Output: srebnaS ma I

// Dilarang menggunakan sintaks .split , .join , .reverse() , hanya gunakan looping!