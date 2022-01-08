module.exports = (sequelize,DataTypes)=>{
    const datatable = sequelize.define("datatable",{
        views:{
            type:DataTypes.INTEGER,
        },
        likes:{
            type:DataTypes.INTEGER,
        },
        comments:{
            type:DataTypes.INTEGER
        },
        shares:{
            type:DataTypes.INTEGER,
        }

    }
)
return datatable;
}