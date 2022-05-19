const path = require("path");
const fs = require("fs");

const {Peliculaserie} = require("../database/models");


const controller = {
  home: (req, res) => {
    return res.render("api");
  },
  cargarPelicula: async (req, res) => {
    
    const crearPelicula = await Peliculaserie.create({  
        imagen: req.body.imagen,     
        titulo: req.body.titulo,
        fechaDeCreacion: req.body.fechaDeCreacion,
        calificacion: req.body.calificacion  });

    
    return res.send("pelicula cargada");
  }
};

module.exports = controller;
