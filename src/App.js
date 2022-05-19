const express = require("express");
const app = express();
const path = require("path");
const { sequelize } = require('sequelize');
const apiRoutes = require("./routes/apiRoutes");

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.listen(3000, () => console.log(" Servidor levantado en el puerto 3000 "));

app.get('/', (req, res) => {
    res.render('home');
});

app.use("/api", apiRoutes);


// app.get('/api', (req, res) => {
//     res.send("Aca responde la api");
// });

//error 404
app.use((req, res, next) => {
  res.status(404).send("La página solicitada no existe");
});


