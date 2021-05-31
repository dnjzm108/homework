const { User } = require('../../models');
const ctoken = require('../../jwt')


let main = (req, res) => {
    res.render('index')
}
let info = (req, res) => {
    let cookie = req.cookies.AccessToken;
    let [header, payload, sign] = cookie.split('.');
    let { userid,userpw,username,exp } = JSON.parse(Buffer.from(payload, 'base64').toString());
    res.render(`info`, {
        userid,userpw,username
    })
}

let login = async (req, res) => {
    let { userid, userpw } = req.body;
    let Suserid = Buffer.from(JSON.stringify(userid))
        .toString('base64')
        .replace('==', '')
        .replace('=', '')
    let Suserpw = Buffer.from(JSON.stringify(userpw))
        .toString('base64')
        .replace('==', '')
        .replace('=', '')
    let result2 = await User.findOne({
        where: { userid: Suserid, userpw: Suserpw }
    })
    if (result2){
        result = {
            result: true,
            msg: '로그인에 성공하셨습니다'
        }
        let a = result2.dataValues.userid;
        let b = result2.dataValues.userpw;
        let c = result2.dataValues.username;
        let aid = JSON.parse(Buffer.from(a,'base64').toString());
        let apw = JSON.parse(Buffer.from(b,'base64').toString());
        let aname = JSON.parse(Buffer.from(c,'base64').toString());

        let { userid, userpw, username } = result2.dataValues;
        let token = ctoken(aid, apw, aname);
        res.cookie('AccessToken', token, { httpOnly: true, secure: true, })
    } else {
        result = {
            result: false,
            msg: '아이디와 패스워드를 확인하세요'
        }
    }
    res.json(result)
    // req.session.uid = userid;
    // req.session.isLogin = true;
    // req.session.save(()=>{
    //     res.redirect('/?msg=로그인 완료')
    // })
}
let join = (req, res) => {
    res.render('join')
}
let newJoin = (req, res) => {
    let { userid, userpw, username } = req.body;
    let join = { userid, userpw, username }
    let token = ctoken(join);
    res.cookie('AccessToken', token, { httpOnly: true, secure: true, })
    let Suserid = Buffer.from(JSON.stringify(userid))
        .toString('base64')
        .replace('==', '')
        .replace('=', '')
    let Suserpw = Buffer.from(JSON.stringify(userpw))
        .toString('base64')
        .replace('==', '')
        .replace('=', '')
    let Susername = Buffer.from(JSON.stringify(username))
        .toString('base64')
        .replace('==', '')
        .replace('=', '')
    User.create({
        userid: Suserid,
        userpw: Suserpw,
        username: Susername,
    })
    res.redirect('/?msg=회원가입이 완료되었습니다.')
}

module.exports = {
    main, login, info, join, newJoin
}