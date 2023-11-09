// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. 
// Contoh input dapat dilihat dibawah:
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

//contoh input
function dataHandling(params){
    var penampung = "";
    for (let i = 0; i < params.length; i++){
        penampung += "Nomor ID       : " + params[i][0]+ "\n";
        penampung += "Nama Lengkap   : " + params[i][1]+ "\n";
        penampung += "TTL            : " + params[i][2] + " " + params[i][3]+ "\n";
        penampung += "Hobi           : " + params[i][4] + "\n"+ "\n";
    }
    return penampung;
}

console.log(dataHandling(input))

// OUTPUT
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca
 
// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar
 
// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak
 
// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun 