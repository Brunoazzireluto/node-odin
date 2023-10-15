let express = require("express");
let router = express.Router();


router.get("/", function (resquest, response) {
    response.send("Wiki home page");
});

router.get("/about", function ( request, response) {
    response.send("About this Wiki");
});

module.exports = router;