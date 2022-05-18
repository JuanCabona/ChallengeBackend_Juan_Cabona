module.exports = (sequelize, DataTypes) => {
	
	const Genero = sequelize.define('Genero', {
		nombre: DataTypes.STRING,
        imagen: DataTypes.STRING
	}, 
	{
        tableName: 'genero',

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

	return Genero;
};