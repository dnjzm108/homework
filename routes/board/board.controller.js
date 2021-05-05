const {User} = require('../../models')

let list = (req,res)=>{
    // let UserList = User.findAll({})
    res.render('list.html');
}

let write = (req,res)=>{
    // let ret = await User.create({
    //     //...
    // })
    res.render('write.html');
}
let view = (req,res)=>{
    res.render('view.html');
}
// /board/modify/post
let modify = (req,res)=>{
    // let rst = await User.update({
    //     //필드:'바뀔내용',
    // },{
    //     //where:{필드:값}
    // })
    res.render('modify.html');
}

module.exports = {
    list:list,
    write:write,
    view:view,
    modify:modify,
}