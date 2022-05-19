module.exports = (sequelize, DataTypes) => {
	
	const Peliculaserie = sequelize.define('Peliculaserie', {
		imagen: DataTypes.STRING,
		titulo: DataTypes.STRING,
		fechaDeCreacion: DataTypes.DATE,
		calificacion: DataTypes.INTEGER,
    }, 
	{
        tableName: 'peliculaserie',

        timestamps: false,

        });

		Peliculaserie.associate = function (models) {
	 	

			Peliculaserie.belongsToMany(models.Genero, {
	  		as: "genero",
	  		through: "peliculaseriegenero",
	  		foreignKey: "peliculaserieid",
	  		otherKey: "generoid"
	  	});

			Peliculaserie.belongsToMany(models.Personaje, {
	  		as: "personaje",
	  		through: "personajepeliculaserie",
	  		foreignKey: "peliculaserieid",
	  		otherKey: "personajeId"
	  	});


	  };

	return Peliculaserie;
};