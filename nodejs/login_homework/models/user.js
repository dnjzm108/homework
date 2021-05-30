const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(300),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            username:{
                type:Sequelize.STRING(100),
                allowNull:true,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:"User",
            tableName:"login",
            charset:"utf8",
            collate:"utf8_general_ci",
        })
    }
    static associate(db){}
}