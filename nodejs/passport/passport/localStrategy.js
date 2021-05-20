/* 
  html 에서 post 로 아이디와 패스워드를 받았을때 처리하는 로직?
  전략 
*/

const LocalStrategy = require('passport-local');
const passport = require('passport');


module.exports = ()=>{
    //인자값이 2개 첫번째는 객체 두번째는 함수
    passport.use(new LocalStrategy({
        usernameField:'userid',
        passwordField:'userpw'
    },(uid,upw,cd)=>{
        //첫번째눈 아이디 벨류값,두번째는 패스워드 벨류값,세번째는 마지막에 실행할 콜백함수명

        //dbconnection 이루워지고 그리고 조회
        //cd(null,{객체}) 처리가 완료되었을때
        //조회 성공시 cd(null,{객체}) 
        //cd(null,false) 처리가 안되었을때
        //죄회후 실패시 cd(null,false)
        let user = {
            userid:uid,
            userpw:upw
        }
        cd(null,user);
    }))
}

