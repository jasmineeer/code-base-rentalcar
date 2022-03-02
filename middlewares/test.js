const { header } = require("express/lib/request")

exports.test = (request, response, next) => {
    if (token == null) {
        return response.json({
            message: `Unauthorized`
        })
    } else{
        header (location("http://localhost/8080/sewa"))
    }
}