const express = require("express");
const app = express();
const { sequelize } = require('sequelize');

app.listen(3000, () => console.log(" Servidor levantado en el puerto 3000 "));

app.get('/', (req, res) => {
    res.send("Servidor levantado");
});

app.get('/api', (req, res) => {
    res.send("Aca responde la api");
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }