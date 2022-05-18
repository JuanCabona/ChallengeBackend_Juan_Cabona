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

	return Personaje;
};