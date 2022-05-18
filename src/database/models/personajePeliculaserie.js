module.exports = (sequelize, DataTypes) => {
	
	const PersonajePeliculaSerie = sequelize.define('PersonajePeliculaSerie', {
		personajeId: DataTypes.INTEGER,
		peliculaserieId: DataTypes.INTEGER,
		
    }, 
	{
        tableName: 'Personaje',

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

	return PersonajePeliculaSerie;
};