module.exports = (sequelize, DataTypes) => {
	
	const Peliculaserie = sequelize.define('Peliculaserie', {
		imagen: DataTypes.STRING,
		titulo: DataTypes.STRING,
		fechaDeCreacion: DataTypes.DATE,
		titulo: DataTypes.INTEGER,
    }, 
	{
        tableName: 'peliculaserie',

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

	return Peliculaserie;
};