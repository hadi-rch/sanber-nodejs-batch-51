import Bootcamp from "./libs/bootcamp";
import Student from "./libs/student";

const sanber = new Bootcamp("sanbercode")

sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")

console.log("Release 0")
console.log(" ")
console.log(sanber.classes)
console.log("======================================")

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let newStud = new Student(nama)
  let kelas = sanber.classes[index % 2].NameClass
  sanber.register(kelas, newStud)
})
// menampilkan data kelas dan student nya
console.log("Release 1")
console.log(" ")

sanber.classes.forEach(kelas => {
  console.log(kelas)
});