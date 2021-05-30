const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})

 const crypto = require('crypto');

function createToken(userid,userpw,username){
    let header ={
        "tpy":"JET",
        "alg":"HS256"
    }
    let exp = new Date().getTime() + (60*1000)
    let payload={
        userid,
        userpw,
        username,
        exp
    }
 

    const encodingHeader = Buffer.from(JSON.stringify(header))
                                  .toString('base64')
                                  .replace('==','')
                                  .replace('=','')
    const encodingPayload = Buffer.from(JSON.stringify(payload))
                                  .toString('base64')
                                  .replace('==','')
                                  .replace('=','')
    const signature = crypto.createHmac('sha256',Buffer.from(process.env.slat))
                                  .update(encodingHeader+"."+encodingPayload)
                                 .digest('base64')
                                 .replace('==','')
                                 .replace('=','')
    let jwt = `${encodingHeader}.${encodingPayload}.${signature}`;
    return jwt;
}

module.exports=createToken;