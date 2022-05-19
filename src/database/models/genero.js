module.exports = (sequelize, DataTypes) => {
	
	const Genero = sequelize.define('Genero', {
		nombre: DataTypes.STRING,
        imagen: DataTypes.STRING
	}, 
	{
        tableName: 'genero',

        timestamps: false,

        });

		Genero.associate = function (models) {
	 	

		Genero.belongsToMany(models.Peliculaserie, {
			as: "peliculaserie",
			through: "peliculaseriegenero",
			foreignKey: "generoid",
			otherKey: "peliculaserieid"
			
		});


	  };

	return Genero;
};