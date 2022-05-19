module.exports = (sequelize, DataTypes) => {
	
	const PeliculaserieGenero = sequelize.define('PeliculaserieGenero', {
		peliculaserieId: DataTypes.INTEGER,
		generoId: DataTypes.INTEGER
    }, 
	{
        tableName: 'peliculaseriegenero',

        timestamps: false,

        });



	return PeliculaserieGenero;
};