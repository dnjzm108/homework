const  {User} = require('../../models');

let main = async (req,res) => {
    let user = await User.findAll({});
    console.log(user);
    res.render('index.html');
}

exports.main = main;    //보낼 명 보낼함수