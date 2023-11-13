import { sapa } from "./lib/soal1";
import { convertObject } from "./lib/soal2";
import { checkScore } from "./lib/soal3";

const command = process.argv[2];

switch (command) {
    case "sapa": 
        let argvNama = process.argv[3] 
        console.log(sapa(argvNama))
        break;
    case "convert" :  
        const args = process.argv.slice(2);
        const params = args.slice(1);
        let [nama, domisili, umur] = params
        console.log(convertObject(nama, domisili, Number(umur)))
    break;
    case "checkScore" : 
        let [name, kelas, score] = process.argv[3].split(",");
        let nameArgs = name.split(":");
        let kelasArgs = kelas.split(":");
        let scoreArgs = score.split(":");
        let objArgs = {
            [nameArgs[0]] : nameArgs[1],
            [kelasArgs[0]] : kelasArgs[1],
            [scoreArgs[0]] : Number(scoreArgs[1])
        }
        console.log(checkScore(objArgs))
    break;
    default : console.log("Anda salah memasukan perintah dist")
  }