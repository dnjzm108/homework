const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {curriculum,skill_item,skill} = require('./models/index')
/*
setting

npm i sequelize mysql2 sequelize-cli
클래스를 사용 패키지 ,DB접속을 위한 패키지,npx를 사용하기위한 패키지 (폴더를 만들어 줘야 하니깐)
npx sequelize init <-- sequelize-cli  //실제로 폴더를 만드는 코드

create folder 3개 생성 
config 폴더와 DB접속 정보 수정하기
models 폴더 우리가 만든 DB 를 객체를 하나로 담기 위해서.

sequelize-auto 
DB데이터 베이스에 있는 테이블 구조를 가져와서 그대로 모델.js를 만들어줌.
class 라는 데이터베이스에 총3개
npm install -g sequelize-auto
npx sequelize-auto -o -b -h -u -p -x -e
-o: "경로"    경로에만 "" 붙임
-d: "데이터베이스"
-h: "url -> localhost"
-u: "root"
-p: "port"
-x: "password"
-e: "mysql"
npx sequelize-auto -o "./models" -d users -h localhost -u root -p 3306 -x 0000 -e mysql
*/ 
sequelize.sync({force:false})
.then(()=>{
    console.log('접속완료');
})
.catch(()=>{
    console.log('접속실패');
})

app.get('/',async (req,res)=>{
    let result = await skill.findAll({
        include:{model:skill_item, as:"item"},
        where:{curr_id:1},
    });
    console.log(result);
    res.json({result})
})

app.listen(3000,()=>{
    console.log('server start port:3000');
})