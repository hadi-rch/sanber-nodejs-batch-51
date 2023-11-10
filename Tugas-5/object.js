{console.log("========== Soal1 ==========")
function arrayToObject(arr) {
    for (var i = 0; i < arr.length; i++) {
        
        var now = new Date();
        var thisYear = now.getFullYear();
        
        var personArr = arr[i];
        
        var objPerson = {
            firstName: personArr[0],
            lastName: personArr[1],
            gender: personArr[2]
        };
        
        if (!personArr[3] || personArr[3] >= thisYear) {
            objPerson.age = "Invalid Birth Year";
        } else {
            objPerson.age = thisYear - personArr[3];
        }
        
        var fullName = objPerson.firstName + " " + objPerson.lastName;
        
        console.log((i+1) + ". " + fullName + ":", objPerson)
    }
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
1. Bruce Banner: { 
    firstName: "Bruce",
    lastName: "Banner",
    gender: "male",
    age: 48
}
2. Natasha Romanoff: { 
    firstName: "Natasha",
    lastName: "Romanoff",
    gender: "female".
    age: "Invalid Birth Year"
}
*/

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
1. Tony Stark: { 
    firstName: "Tony",
    lastName: "Stark",
    gender: "male",
    age: 43
}
2. Pepper Pots: { 
    firstName: "Pepper",
    lastName: "Pots",
    gender: "female".
    age: "Invalid Birth Year"
}
*/

// Error case 
arrayToObject([]) // ""

console.log("========== Soal2 ==========")
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    var output = [];
    for (var j = 0; j < arrPenumpang.length; j++) {
        var penumpangSekarang = arrPenumpang[j];
        var objPenumpang = {
            penumpang : penumpangSekarang[0],
            naikDari : penumpangSekarang[1],
            tujuan : penumpangSekarang[2]
        }

        var bayar = (rute.indexOf(penumpangSekarang[2]) - rute.indexOf(penumpangSekarang[1])) * 2000;
        
        objPenumpang.bayar = bayar;
        
        output.push(objPenumpang);
    }
    return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

}
console.log("========== Soal3 ==========")
function nilaiTertinggi(siswa) {
    var sekolah = {};
    for(var k in siswa){
        var kelas = siswa[k].class;
        if (sekolah[kelas] === undefined || siswa[k].score > sekolah[kelas].score) {
        sekolah[kelas] = {};
        sekolah[kelas].name = siswa[k].name;
        sekolah[kelas].score = siswa[k].score;
        }
    }
    return sekolah;
    }
  // TEST CASE
  console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));
  
  // OUTPUT:
  
  // {
  //   adonis: { name: 'Asep', score: 90 },
  //   vuejs: { name: 'Ahmad', score: 85 },
  //   reactjs: { name: 'Afrida', score: 78}
  // }
  
  
  console.log(nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]));
  
  // {
  //   adonis: { name: 'Bondra', score: 100 },
  //   laravel: { name: 'Putri', score: 76 },
  //   vuejs: { name: 'Hilmy', score: 80 }
  // }
