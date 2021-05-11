
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
    //let userimage = req.file.path; //req.file -> object 
    let userimage = req.file == undefined ? '' : req.file.path;

    try {
        let rst = await User.create({ userid, userpw, username, gender,userimage })
    } catch (e) {
        console.log(e);
    }
    res.render('./user/join_success.html', { userid, username })
}

let login = (req,res) => {
    let flag = req.query.flag;
    res.render('./user/login.html',{flag})
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
    //로그인 실패
    if(result == null){
        res.redirect('/user/login?flag=0');
    }else{
        // login 이 성공했을때
        req.session.uid = userid;
        req.session.isLogin = true;
        
        req.session.save(()=>{
            res.redirect('/')
        })
    }

   
    
}

let info = async (req, res) => {
    let userlist = await User.findAll({});
    res.render('./user/info.html', {
        userList: userlist,
    })
    // res.json({
    //     userlist,
    // })
}

let userid_check = async (req,res)=>{
    let userid = req.query.userid;
    let flag = false;
    let result = await User.findOne({
        where:{ userid }
    })
    //result -> undefined 생성가능
    //result ->객체가 존재하면 생성 불가능
    if(result == undefined){
        flag=true;
    }else{
        flag=false;
    }
    res.json({
        login:flag,
        userid,
    })
}

module.exports = {
    join: join,
    join_success: join_success,
    login: login,
    info: info,
    login_check: login_check,
    logout: logout,
    userid_check:userid_check

}