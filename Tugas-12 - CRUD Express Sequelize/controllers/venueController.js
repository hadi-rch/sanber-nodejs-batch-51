const {Venue} = require('../models')

const createVenue = async (req,res) => {
    try {
        let name = req.body.name;
        // console.log(name)
        let address = req.body.address;
        let phone = req.body.phone;
        await Venue.create({
            name,
            address,
            phone
        });
        return res.status(200).json({
            success : "Berhasil tambah venue"
        });
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
            err: error.message
        });
    }
}

const readAllVenue = async (req, res) => {
    try {
        const findVenue = await Venue.findAll()
        // console.log(findVenue);

        return res.status(200).json({
            success : "Berhasil Menampilkan venue",
            data: findVenue
        });
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
            err: error.message
        });
        
    }
}

const detaiVenue = async (req, res) => {
    const paramId = req.params.id
    try {
        const venueById = await Venue.findByPk(paramId);

        if(!venueById) {
            return res.status(400).json({
            Error : "Venue tidak ditemukan"
        })}

        return res.status(200).json({
            success : "Berhasil Menampilkan detail venue",
            data: venueById 
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            err: error.message
        });
    }
}

const updateVenue = async (req,res) => {
    const idParams = req.params.id;
    const {name, address, phone} = req.body;
    try {
        await Venue.update({
            name,
            address,
            phone
        },{
            where : {
                id: idParams,
            }
        }
        );
        return res.status(200).json({
            success : "Berhasil update venue"
        });
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
            err: error.message
        });
    }
}
const deleteVenue = async (req, res) => {
    const idParam = req.params.id;
    try {
        await Venue.destroy({
            where: {
                id: idParam
            }
        })
        return res.status(200).json({
        success: "Berhasil delete Venue" 
    }) 
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
        err: error.message
    })    
    }
}

module.exports ={
    createVenue,
    readAllVenue,
    detaiVenue,
    updateVenue,
    deleteVenue
}