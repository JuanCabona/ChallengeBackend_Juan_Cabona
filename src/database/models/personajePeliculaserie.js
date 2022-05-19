module.exports = (sequelize, DataTypes) => {
	
	const PersonajePeliculaSerie = sequelize.define('PersonajePeliculaSerie', {
		personajeId: DataTypes.INTEGER,
		peliculaserieId: DataTypes.INTEGER,
		
    }, 
	{
        tableName: 'Personaje',

        timestamps: false,

        });



	return PersonajePeliculaSerie;
};