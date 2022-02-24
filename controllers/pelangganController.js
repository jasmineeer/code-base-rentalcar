// memanggil file model untuk siswa
let modelPelanggan = require("../models/index").pelanggan 

exports.getDataPelanggan = (request, response) => {
    modelPelanggan.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message  
        })
    })
}

exports.addDataPelanggan = (request, response) => {
    // tampung data request
    let newPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak_pelanggan: request.body.kontak_pelanggan
    }

    modelPelanggan.create(newPelanggan)
    .then(result => {
        return response.json({
            message: `Data pelanggan successfully inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataPelanggan = (request, response) => {
    let id = request.params.id_pelanggan
    let dataPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak_pelanggan: request.body.kontak_pelanggan
    }

    modelPelanggan.update(dataPelanggan, { where: { id_pelanggan: id } })
    .then(result => {
        return response.json({
            message: `Data pelanggan successfully updated`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataPelanggan = (request, response) => {
    let id = request.params.id_pelanggan 
    
    modelPelanggan.destroy({ where: { id_pelanggan: id } })
    .then(result => {
        return response.json({
            message: `Data pelanggan successfully deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}