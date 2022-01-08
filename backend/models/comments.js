module.exports = (sequelize,DataTypes)=>{
    const comment = sequelize.define("comment",{
        comments:{
            type:DataTypes.STRING
        }
    }
)
return comment;
}