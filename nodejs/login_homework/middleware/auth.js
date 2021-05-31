require('dotenv').config();
const crypto = require('crypto');

module.exports = (req, res, next) => {
    let {AccessToken} = req.cookies
    if (AccessToken == undefined) {
        res.redirect('/?msg = 로그인을 진행해주세요');
        return 0;
    }

    let [header, payload, sign] = AccessToken.split('.');
    let signature = getSignature(header, payload);

    if (sign == signature) {
        console.log('검증된 토큰입니다.');
        let { userid,userpw,username,exp } = JSON.parse(Buffer.from(payload, 'base64').toString());
        let nexp = new Date().getTime();
        if (nexp > exp) {
            res.clearCookie('AccessToken');
            res.redirect('/?msg=토큰만료');
            return 0;
        }
        userid;
        userpw;
        username;
        next();
    } else {
        res.redirect('/?msg=부적절한 토큰')
    }
}

function getSignature(header, payload) {
    const signature = crypto.createHmac('sha256', Buffer.from(process.env.slat))
        .update(header + "." + payload)
        .digest('base64')
        .replace('==', '')
        .replace('=', '')

    return signature;
}