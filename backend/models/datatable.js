module.exports = (sequelize,DataTypes)=>{
    const datatable = sequelize.define("datatable",{
        views:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        likes:{
            type:DataTypes.INTEGER,
            allowNull:false

        },
        comments:{
            type:DataTypes.INTEGER,
            allowNull:false

        },
        shares:{
            type:DataTypes.INTEGER,
            allowNull:false

        }

    }
)
return datatable;
}