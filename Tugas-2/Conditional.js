{/* If-else
Petunjuk : Kita akan memasuki dunia game werewolf. Pada saat akan bermain kamu diminta memasukkan nama dan peran . 
Untuk memulai game pemain harus memasukkan variable nama dan peran. 
Jika pemain tidak memasukkan nama maka game akan mengeluarkan warning "Nama harus diisi!". 
Jika pemain memasukkan nama tapi tidak memasukkan peran maka game akan mengeluarkan warning 
"Pilih Peranmu untuk memulai game". Terdapat tiga peran yaitu penyihir, guard, dan werewolf. 
Tugas kamu adalah membuat program untuk mengecek input dari pemain dan hasil response dari game 
sesuai input yang dikirimkan.

Petunjuk:

Nama dan peran diisi manual dan bisa diisi apa saja
Nama tidak perlu dicek persis sesuai dengan input/output
Buat kondisi if-else untuk masing-masing peran
Input: */ }
console.log("===========Soal1============");
var nama = "jaja";
var peran = "";

if (nama == "" && peran == ""){
  console.log("Nama harus diisi!");
} else if (nama != "") {
  if (peran == ""){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
  } else if (peran.toLowerCase() == "Penyihir".toLowerCase()){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf`);
  } else if (peran.toLowerCase() == "Guard".toLowerCase()) {
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
  } else if (peran.toLowerCase() == "Werewolf".toLowerCase()){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
    console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
  } else {
    console.log("Peran tidak ditemukan")
  }
} else {
  console.log("Nama harus diisi")
}

{ /*
// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"
//Output untuk Input nama = 'John' dan peran = ''
"Halo John, Pilih peranmu untuk memulai game!"
//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
"Selamat datang di Dunia Werewolf, Jane"
"Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"
//Output untuk Input nama = 'Jenita' dan peran 'Guard'
"Selamat datang di Dunia Werewolf, Jenita"
"Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
"Selamat datang di Dunia Werewolf, Junaedi"
"Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" 
*/ }

// Switch Case
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah 
// hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:
console.log("===========Soal2============");
var hari = 21; 
var bulan = 1; 
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
switch (bulan) {
    case 1: console.log(`${hari} Januari ${tahun}`); break;
    case 2: console.log(`${hari} Februari ${tahun}`); break;
    case 3: console.log(`${hari} Maret ${tahun}`); break;
    case 4: console.log(`${hari} April ${tahun}`); break;
    case 5: console.log(`${hari} Mei ${tahun}`); break;
    case 6: console.log(`${hari} Juni ${tahun}`); break;
    case 7: console.log(`${hari} Juli ${tahun}`); break;
    case 8: console.log(`${hari} Agustus ${tahun}`); break;
    case 9: console.log(`${hari} September ${tahun}`); break;
    case 10: console.log(`${hari} Oktober ${tahun}`); break;
    case 11: console.log(`${hari} November ${tahun}`); break;
    case 12: console.log(`${hari} Desember ${tahun}`); break;
    default : console.log("Bulan yang anda masukan salah!")
  }