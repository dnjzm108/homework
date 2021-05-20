const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(20),
                allwNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull:false,
            },
            username:{
                type:Sequelize.STRING(10),
                allowNull:true,
            },
            gender:{ 
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            userimage:{  
                type:Sequelize.STRING(100),
                allowNull:true,  // NULL 값도 ok 
            },
            userdt:{
                type:Sequelize.DATE,
                allowNull:true,
                defaultValue:Sequelize.NOW, // default값 있도록~ 
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'user',
            charset:'utf8',
            collate:"utf8_general_ci",
        });
    }
    static associate(db){}
}