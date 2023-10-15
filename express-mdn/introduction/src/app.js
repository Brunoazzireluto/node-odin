let express = require("express");
let wiki = require("./wiki"); 
let logger = require("morgan");
let app = express();

app.use(logger("dev"));



app.get("/", function (request, response) {
    response.send("Olá Mundo");
});

app.use("/wiki", wiki);
app.use('/media', express.static("media"));

app.use(function (err, request, response, next ) {
    console.error(err.stack);
    response.status(404).send("Página não encontrada!!")
    response.status(500).send("Something broke!");
})

app.listen(3000, function () {
    console.log("App de exemplo executando na porta 3000");
});

