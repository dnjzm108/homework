//npm install dotenv
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})

const crypto = require('crypto');

// JWT 토큰생성 header.payload.signature
function createToken(userid){
    let header = {
        "tpy":"JET",
        "alg":"HS256"
    }
    let exp = new Date().getTime() + (60*1000) //1970년1월1일1초 1000기준 
    let payload = {
        userid,
        exp
    }

    const encodingHeader = Buffer.from(JSON.stringify(header))
                                   .toString('base64')
                                   .replace('==','')
                                   .replace('=','')
            
    const encondingPayload = Buffer.from(JSON.stringify(payload))
                                   .toString('base64')
                                   .replace('==','')
                                   .replace('=','')

    const signature = crypto.createHmac('sha256',Buffer.from(process.env.salt))
                             .update(encodingHeader+"."+encondingPayload)
                            .digest('base64')
                            .replace('==','')
                            .replace('=','')
                            //.replace(/=/g,'');

    let jwt = `${encodingHeader}.${encondingPayload}.${signature}`
   return jwt;                            
} 
let token=createToken('root');
console.log(token);

module.exports=createToken;