/*
1. 클라이언트가 server에게 id pw 를 보냅니다.
2. 서버가 id,pw 를 DB에서 조회한다음에 결과가 맞으면 토큰을 생성합니다.
3. 서버는 생성한 토큰을 클라이언트에게 응답을 보내줍니다.
4. 클라이언트는 토큰을 저장합니다 (cookie에 저장)
5. 이후 클라이언트는 매요청마다 토큰을 보내게 된다.
*/
/*
header
{
        "alg": "HS256",
        "typ": "JWT"
}
payload
{
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
  signature
  HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    
  your-256-bit-secret

  1차 목표 header 암호화 하기  
  0,1 -> 2진법  16진법이랑 친구다.
  2진법
  10진법
  16진법

  바이너리 데이터  
*/
const crypto = require('crypto');
function createtoken(){
let txt = "안녕하세요";
let header={
        "alg": "HS256",
        "typ": "JWT"
}
let encodeheader = Buffer.from(JSON.stringify(header))
                .toString('base64')
                .replace('=',''); //안녕하세요 -> 16진수로 바꿈(바이넌리 데이터로 바꿈)
           
let payload={
    "sub": "1234567890",  // 각각 속성에 어떤값이 들어가는지
    "name": "John Doe",
    "user": "web7722",
    "iat": 1516239022
  }
  let encodepayload = Buffer.from(JSON.stringify(payload))
                            .toString('base64')
                            .replace('==','');
 //1.어떤 암호화를 할거냐(sha256) //블록체인
 //2.암호화 규칙 스트링으로 적습니다.
 let signature = crypto.createHmac('sha256',Buffer.from('ingoo'))
                 .update(`${encodeheader}.${encodepayload}`) //header.payload
                 .digest('base64')
                 .replace('=','')
 return `${encodeheader}.${encodepayload}.${signature}`;
}
let token = createtoken();
console.log(token);
module.exports = createtoken;   //초록 class  파랑색 상수  노랑 함수

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9,eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ,URCs22fFpJT4PcpoFeu1dFS67n9VqeCakNZjztNELcg

//image 도 텍스트로 이뤄져있다.
//텍스트가 바이너리 형식입니다.

//비트숫자가 같기 때문에 표현하기 쉬워서 bit

//15 를 2진법으로 표현 1111  4bit
//15 를 16진법으로 표현 F

//자리수가 바뀌는 숫자 
//2진수 0,1  8진수  10진수  16진수
/*
16 10  2
 0  0  0000
1   1  0001
2   2  0010
3   3  0011
4   4  0100
5   5  0101
6   6  0110
7   7  0111
8   8  
9   9 
A   10
B   11
C   12
D   13
E   14
F   15
*/