console.log("==========Soal1==========");
{/*Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang 
menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 
'LOOPING PERTAMA' dan 'LOOPING KEDUA'."
Output:
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become a mobile developer
18 - I will become a mobile developer                                                                              
16 - I will become a mobile developer
14 - I will become a mobile developer
12 - I will become a mobile developer
10 - I will become a mobile developer
8 - I will become a mobile developer
6 - I will become a mobile developer
4 - I will become a mobile developer
2 - I will become a mobile developer*/}
console.log("LOOPING PERTAMA")
let iterasi = 0 
while (iterasi < 20){
	iterasi+=2
  console.log(iterasi+" - I love coding")
}

console.log("LOOPING KEDUA")
while (iterasi > 0){
    console.log(iterasi+" - I will become a mobile developer")
	iterasi-=2
}

console.log("==========Soal2==========");
{/*Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:
SYARAT:
A. Jika angka ganjil maka tampilkan Santai
B. Jika angka genap maka tampilkan Berkualitas
C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
OUTPUT 
1 - Santai
2 - Berkualitas
3 - I Love Coding 
4 - Berkualitas
5 - Santai
6 - Berkualitas
7 - Santai
8 - Berkualitas
9 - I Love Coding
10 - Berkualitas
11 - Santai
12 - Berkualitas
13 - Santai
14 - Berkualitas
15 - I Love Coding
16 - Berkualitas
17 - Santai
18 - Berkualitas
19 - Santai
20 - Berkualitas
*/}
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 2 !== 0){
        console.log(i +" - " + "I Love Coding ")
    } else if (i % 2 !== 0){
        console.log(i +" - " + "Santai")
    } else {
        console.log(i +" - " + "Berkualitas")
    }
}


console.log("==========Soal3==========");
// Pada soal ini Kamu diminta untuk membuat function makeRectangle yang menerima dua parameter panjang dan lebar. 
// function tersebut akan menampilkan persegi dengan dimensi panjang x lebar dengan tanda pagar (#) 
// dengan perulangan atau looping. Looping boleh menggunakan syntax apa pun (while, for, do while).

function makeRectangle(panjang,lebar) {
    let string ="";
    for (let i = 0; i < lebar; i++) {
        for (let j = 0; j < panjang; j++) {
            string += "#";
        }
        string += "\n";
    }
    console.log(string);
}

// TEST CASE

makeRectangle(8,4)
// Output:
// ########
// ########
// ########
// ######## 

console.log("==========Soal4==========");
// Kali ini kamu diminta untuk membuat function makeLadder yang menerima sebuah parameter sisi. 
// function akan menampilkan sebuah segitiga sama sisi dengan tanda pagar (#) dengan panjang sisi 
// sesuai parameter yang diberikan . Looping boleh menggunakan syntax apa pun (while, for, do while).

function makeLadder(sisi) {
    let pagar = ""
    for (let i = 1; i <= sisi; i++){
        pagar = pagar + "#";
        console.log(pagar)
    }
}

// TEST CASE
makeLadder(7)
// Output:

// #
// ##
// ###
// ####
// #####
// ######
// #######
