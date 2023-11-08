// Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai 
// "Halo Sanbers!" yang kemudian dapat ditampilkan di console.
console.log("==========Soal1==========");
function teriak() {
  return ("Halo Sanbers!");
}

// TEST CASE
console.log(teriak()) // "Halo Sanbers!" 

console.log("==========Soal2==========");
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter

function kalikan(num1, num2) {
    return num1 * num2;
}

console.log(kalikan(4, 12)) // 48

console.log("==========Soal3==========");
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang 
// dikirim menjadi sebuah kalimat perkenalan seperti berikut: 
// "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

function introduce(name, age, address, hobby) {
  return "Nama saya " + name +", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby;
}

 // TEST CASES
console.log(introduce("Agus", 30, "Jogja", "Gaming")) // Menampilkan "Nama saya Agus, umur saya 30 tahun, 
// alamat saya di Jogja, dan saya punya hobby yaitu Gaming!" 


