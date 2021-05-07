
const { User } = require('../../models/index');

let join = (req, res) => {
    //res.send('join');
    res.render('./user/join.html')
}
let join_success = async (req, res) => {
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let gender = req.body.gender;
    try {
        let rst = await User.create({ userid, userpw, username, gender })
    } catch (e) {
        console.log(e);
    }
    res.render('./user/join_success.html', { userid, username })
}

let login = (req, res) => {
    res.render('./user/login.html')
}

let logout = (req,res) => {
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/')
    })
}

let login_check = async (req, res) => {
    let userid = req.body.userid;
    let userpw = req.body.userpw;
   
  let result = await User.findOne({
        where:{ userid,userpw }
    })

    req.session.uid = userid;
    req.session.isLogin = true;
    
    req.session.save(()=>{
        res.redirect('/')
    })
    
}

let info = async (req, res) => {
    let userlist = await User.findAll({});
    console.log(userlist)
    res.render('./user/info.html', {
        userList: userlist,
    })
}

module.exports = {
    join: join,
    join_success: join_success,
    login: login,
    info: info,
    login_check: login_check,
    logout: logout
}