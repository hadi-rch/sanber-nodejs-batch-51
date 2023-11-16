import Karyawan from './karyawan';
import fs from 'fs';
import fsPromises from 'fs/promises';
import 'core-js/stable'

const path = "data.json";

class Bootcamp {
    static register(input){
    let [name, password, role] = input.split(',');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }

        const existingData  = JSON.parse(data);
        let karyawann = new Karyawan(name, password, role);
        existingData.push(karyawann);

        fs.writeFile(path, JSON.stringify(existingData), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Register Berhasil")
            }
        })
    })
    }
    static login(input){
        let [inputname, inputpassword] = input.split(',')
        fsPromises
            .readFile(path)
            .then((data) => {
                const existingData = JSON.parse(data)

                let indexKar = existingData.findIndex((emp) => emp.name == inputname)
                if (indexKar == -1) {
                    console.log("DATA TIDAK DITEMUKAN")
                } else {
                    let emplyoe = existingData[indexKar];
                    if (emplyoe.password == inputpassword) {
                        emplyoe.isLogin = true;
                        existingData.splice(indexKar,1,emplyoe);
                        console.log("Login Berhasil")
                        return fsPromises.writeFile(path, JSON.stringify(existingData))
                    } else {
                        console.log("Password Salah")
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    static addSiswa = async (input) =>{
        let [name, trainerName] = input.split(",");

        let data = await fsPromises.readFile(path);
        // console.log(data)
        let employees = JSON.parse(data);
        // console.log(employees)
        let indexAdmin = employees.findIndex((emp) => emp.role == 'admin');
        // console.log(indexAdmin)
        let indexTrainer = employees.findIndex((emp) => emp.name == trainerName);
        // console.log(indexTrainer)
        // console.log(employees)

        if(employees[indexAdmin].isLogin == false) {
            console.log("Silahkan admin login terlebih dahulu");
        }else{
            let objAdmin = employees[indexAdmin];
            // console.log(objAdmin)
            let objTrainer = employees[indexTrainer];
            // console.log(objTrainer)
            if(objAdmin.isLogin == true){
                // console.log(objTrainer.students)
                objTrainer.students.push({"name":name})
                employees.splice(indexTrainer, 1, objTrainer);
                console.log("Berhasil add siswa");
                await fsPromises.writeFile(path, JSON.stringify(employees));
            } else {
                console.log("Belumm login")
            }
        }
    }
}

export default Bootcamp;