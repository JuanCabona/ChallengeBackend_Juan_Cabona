module.exports = (sequelize, DataTypes) => {
	
	const PeliculaserieGenero = sequelize.define('PeliculaserieGenero', {
		peliculaserieId: DataTypes.INTEGER,
		generoId: DataTypes.INTEGER
    }, 
	{
        tableName: 'peliculaseriegenero',

        timestamps: false,

        });

	//  Product.associate = function (models) {
	 	
	//  	Product.belongsTo(models.Type, {
	//  		as: "types",
	//  		foreignKey: "typeId"
	//  	});

	//  	Product.belongsToMany(models.Cart, {
	//  		as: "cart",
	//  		through: "productCart",
	//  		foreignKey: "productId",
	//  		otherKey: "cartId",
	//  	});


	//  };

	return PeliculaserieGenero;
};