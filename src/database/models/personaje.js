module.exports = (sequelize, DataTypes) => {
	
	const Personaje = sequelize.define('Personaje', {
		imagen: DataTypes.STRING,
		nombre: DataTypes.STRING,
		edad: DataTypes.INTEGER,
		peso: DataTypes.INTEGER,
		historia: DataTypes.STRING
    }, 
	{
        tableName: 'Personaje',

        timestamps: false,

        });

	  Personaje.associate = function (models) {
	 	
	  	Personaje.belongsToMany(models.Peliculaserie, {
	  		as: "peliculaserie",
	  		through: "personajepeliculaserie",
	  		foreignKey: "personajeid",
	  		otherKey: "peliculaserieid"
	  	});


	  };

	return Personaje;
};