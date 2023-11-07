console.log("Soal 1");
// Soal No. 1 (Membuat kalimat),
// Terdapat kumpulan variable dengan data string sebagai berikut
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
// Buatlah agar kata-kata di atas menjadi satu kalimat . Output:
// JavaScript is awesome and I love it! 
const gabungan = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(gabungan);

console.log("Soal 2");
// Soal No.2 Mengurai kalimat (Akses karakter dalam string),
// Terdapat satu kalimat seperti berikut:
var sentence = "I am going to be Node JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] ;
var fourthWord = sentence[11] + sentence[12] ;
var fifthWord = sentence[14] + sentence[15] ;
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] ;
var seventhWord = sentence[22] + sentence[23] ;
var eighthWord = sentence[25] + sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] ;

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
// Buat menjadi Output berikut:
// First word: I 
// Second word: am 
// Third word: going 
// Fourth word: to 
// Fifth word: be 
// Sixth word: Node 
// Seventh word: JS 
// Eighth word: Developer

console.log("Soal 3");
// Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15,17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21,25);

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);
// Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:
// First Word: wow 
// Second Word: JavaScript 
// Third Word: is 
// Fourth Word: so 
// Fifth Word: cool

console.log("Soal 4");
// Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence2.substring(4, 14); 
var thirdWord3 = sentence2.substring(15,17); 
var fourthWord3 = sentence2.substring(18, 20); 
var fifthWord3 = sentence2.substring(21,25); 

var firstWordLength = exampleFirstWord3.length;
var secondWord3Length = secondWord3.length;
var thirdWord3Length = thirdWord3.length;
var fourthWord3Length = fourthWord3.length;
var fifthWord3Length = fifthWord3.length;
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3Length); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3Length); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3Length); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord3Length); 
// Output:
// First Word: wow, with length: 3 
// Second Word: JavaScript, with length: 10 
// Third Word: is, with length: 2 
// Fourth Word: so, with length: 2 
// Fifth Word: cool, with length: 4