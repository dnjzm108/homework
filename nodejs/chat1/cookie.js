let cookie ='AccessToken=eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJ3ZWIiLCJleHAiOjE2MjI2MDQ5MDg1MjF9.VyrQAgmmCgZJDxw%2FiD38waW0JkOLoUsesllG22CAegs; token=adfdfasf; akakaka=value'
let cookieArr = cookie.split(';');

cookieArr.forEach(v=>{
   let [name,value] = v.split('=')
   if(name.trim() == 'AccessToken'){
      let jwt = value.split('.');
     let payload = Buffer.from(jwt[1],'base64').toString();
     let {userid} =JSON.parse(payload);
    console.log('첫번째 방법',userid);
    }
})

let [userid2] =
cookie.trim().split(';').filter( v => v.indexOf('AccessToken') == 0)
                        .map( v =>{
                            let [name,value] = v.trim().split('=');
                            return JSON.parse(Buffer.from(value.split('.')[1],'base64').toString()).userid
                        })
console.log('두번째 방법', userid2);