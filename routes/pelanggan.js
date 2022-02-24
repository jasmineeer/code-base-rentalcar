const express = require(`express`)
const app = express()

app.use(express.json())

// panggil pelanggan controller
let pelangganController = require("../controllers/pelangganController")

// end-point get data pelanggan
app.get("/", pelangganController.getDataPelanggan)

// end-point add data pelanggan
app.post("/", pelangganController.addDataPelanggan)

// end-point edit pelanggan
app.put("/:id_pelanggan", pelangganController.editDataPelanggan)

// end-point delete pelanggan
app.delete("/:id_pelanggan", pelangganController.deleteDataPelanggan)

module.exports = app 