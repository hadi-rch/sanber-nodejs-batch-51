var express = require('express');
var router = express.Router();
const {registerUser,testParams,findAll, login, addSiswa} = require ('../controller/userController.js')


/* GET home page. */
router.post('/register', registerUser);
router.post('/login', login);
router.get('/karyawan', findAll);
router.post('/karyawan/:name/siswa', addSiswa);

router.get('/kar/:id', testParams);

module.exports = router;
