const fs = require("fs")
// memanggil file model untuk siswa
let modelMobil = require("../models/index").mobil 

exports.getDataMobil = (request, response) => {
    modelMobil.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message  
        })
    })
}

exports.addDataMobil = (request, response) => {
    if(!request.file) {
        return response.json({
            message: `Nothing to upload`
        })
    } 
    // tampung data request
    let newMobil = {
        nomor_mobil: request.body.nomor_mobil,
        merk: request.body.merk,
        jenis: request.body.jenis,
        warna: request.body.warna,
        tahun_pembuatan: request.body.tahun_pembuatan,
        biaya_sewa_per_hari: request.body.biaya_sewa_per_hari,
        image: request.file.filename
    }

    modelMobil.create(newMobil)
    .then(result => {
        return response.json({
            message: `Data Mobil successfully inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataMobil = (request, response) => {
    let id = request.params.id_mobil
    if(!request.file) {
        let dataMobil = {
            nomor_mobil: request.body.nomor_mobil,
            merk: request.body.merk,
            jenis: request.body.jenis,
            warna: request.body.warna,
            tahun_pembuatan: request.body.tahun_pembuatan,
            biaya_sewa_per_hari: request.body.biaya_sewa_per_hari
        }
        modelMobil.update(dataMobil, { where: { id_mobil: id } })
    .then(result => {
        return response.json({
            message: `Data Mobil successfully updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
    } else {
        let dataMobil = {
            nomor_mobil: request.body.nomor_mobil,
            merk: request.body.merk,
            jenis: request.body.jenis,
            warna: request.body.warna,
            tahun_pembuatan: request.body.tahun_pembuatan,
            biaya_sewa_per_hari: request.body.biaya_sewa_per_hari,
            image: request.file.filename
        }
        modelMobil.update(dataMobil, { where: { id_mobil: id } })
        .then(result => {
            return response.json({
                message: `Data Mobil successfully updated`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }
}

exports.deleteDataMobil = async (request, response) => {
    let id = request.params.id_mobil 
    
    // ambil data filename yang akan dihapus
    let mobil = await modelMobil.findOne({where: { id_mobil: id }})
    if(mobil) {
        let oldFileName = mobil.image 

        // delete file
        let location = path.join(__dirname,"../image", oldFileName)
        fs.unlink(location)
    }

    modelMobil.destroy({ where: { id_mobil: id } })
    .then(result => {
        return response.json({
            message: `Data Mobil successfully deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}