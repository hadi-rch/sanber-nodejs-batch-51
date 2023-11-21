const fs = require('fs');
const fsPromises = require('fs/promises');

const pathData ='data.json';

const registerUser = (req,res) => {
    fs.readFile(pathData, (err, data) =>{
        if(err){
            res.status(400).json({
                error: "gagal membaca file"
            })
        } else {
            let exsistingData = JSON.parse(data);
            let {name, password, role} = req.body;
            let newUSer = {name, password, role, isLogin: false};
            exsistingData.push(newUSer);

            fs.writeFile(pathData,JSON.stringify(exsistingData), (err) => {
                if(err){
                    res.status(400).json({
                        error: "gagal menyimpan data user"
                    })
                } else {
                    res.status(200).json({
                        message : "Berhasil Register"
                    });
                }
            })
        }
    }
    )
}
const findAll = (req, res) => {
    fs.readFile(pathData, (err, data) => {
        if(err){
            res.status(400).json({
                error: "gagal membaca file"
            })
        } else {
            const exsistingData = JSON.parse(data);
            res.status(200).json({
                message : "Berhasil get karyawan",
                data : exsistingData
            })
        }
    }
)}
const login = (req, res) => {
    fs.promises
    .readFile(pathData)
    .then((data) => {
        let exsistingData = JSON.parse(data)
        console.log(exsistingData)
        let {name, password} = req.body;
        let indexUser = exsistingData.findIndex(user => user.name == name)

        if(indexUser == -1) {
            return res.status(404).json({
                message : "user tidak ditemukan"
            })
        }else{
            let user = exsistingData[indexUser];

            if(user.password == password){
                user.isLogin = true
                exsistingData.splice(indexUser, 1, user);
                fsPromises.writeFile(pathData, JSON.stringify(exsistingData))
                return 
            }else{
                return res.status(400).json({
                    error : "Password yang dimasukan salah"
                })
            }
        }
    }).then(() => {
        res.status(201).json({
            message : "Login Berhasil"
        })
    })
}

const addSiswa = (req, res) => {
    fs.readFile(pathData, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "error, data tidak ditemukan",
          
        });
      } else {
        let existingData = JSON.parse(data);
        // let { users } = existingData;
        let idxAdmin = existingData.findIndex((user) => user.role == "admin");

        if (existingData[idxAdmin].isLogin == false) {
          res.status(400).json({
            error: "Silahkan admin login terlebih dahulu",
          });
        } else {
          let trainer_data = req.url;
        //   console.log(trainer_data);
        //   console.log("trainer_data");
          let { name, class_student } = req.body;
          let trainer_data_parse = trainer_data.split('/'); 
          let trainer_name = trainer_data_parse[2];
          let indexTrainer = existingData.findIndex((user) => user.name == trainer_name);
        //   console.log(indexTrainer);
        //   console.log("indexTrainer");
          let trainerPointed = existingData[indexTrainer];
        //   console.log(trainerPointed)
        //   console.log("trainerPointed")
          trainerPointed["students"] = [{ name: name, class: class_student }];
          existingData.splice(indexTrainer, 1, trainerPointed);
          fs.writeFile(pathData, JSON.stringify(existingData), (err) => {
            if (err) {
              res
                .status(400)
                .json({ error: "error, gagal menyimpan data siswa" });
            } else {
              res.status(201).json({
                message: "Berhasil add siswa",
              });
            }
          });
        }
      }
    });
  }


const testParams = (req, res) => {
    const params = req.params.id;
    res.send(params)
}

module.exports = {
    registerUser, 
    testParams, 
    findAll, 
    login, 
    addSiswa
}