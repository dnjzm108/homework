//Promiss 

let myFirstPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("Success");
    },250);
});







//this -> 해당 {} 안에 상위 변수명을 가르킴
//new -> 함수를 객체롤 변경해줌

function User(){
    this.name = 'ingoo';
    this.age = 20 ;
    console.log(this);
}

//callback ? 
// const pr = new Promise((resolve,reject)=>{
//     resolve('안녕히세요')
// })
// pr.then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

function 제발(){
    return new Promise((resolve,reject)=>{
        resolve(꺼내줘());
    })
}

function 꺼내줘(){
     const pr = new Promise((resolve,reject)=>{
         resolve('꺼내줘')
     })
     const obj ={
         text : function(){
             return pr;
         }
     }
     return obj
}

// 제발()
// .then((data)=>{
//     data.text()
//     .then((a)=>{console.log('첫번째방법'a);})
// })

제발().then(data=>{
    return data.text();
})
.then(data2=>{
    console.log('두번째 방법',data2);
})

async function result(){
    let res = await 제발();
    let res2 = await res.text();
    console.log('세번째 방법',res2);
}
result()






// function 아반떼2(){
//     return new Promise((resolve,reject)=>{
//             resolve(new Promise((resolve,reject)=>{
//                 resolve('이걸 꺼내보세요')
//             }))
//     })    
// }
// 아반떼2()
// .then((data)=>{console.log(data);})

// 아반떼2()
// .then((data)=>{ return data })
// let data = 아반떼2
// data()
// .then((a)=>{console.log(a);})

// 아반떼2()
// .then((data)=>{console.log(data);})
// .catch((error)=>{console.log(error);})


// async function result(){
//     let rst = 아반떼2();
//     console.log(rst);
// }
//callback 함수안에서 함수를 리턴해줄때
// 인자값에 함수명을 넣는것
//익명함수

function 아반떼(callback){
    //소나타()
    console.log(callback);
    console.log('1');
}
function 소나타(){
    //그랜저()
    console.log('2');
}
function 그랜저(){
    console.log('3');
}
// 아반떼 첫번째 인자값 함수명
//익명 함수는 ()=>{} 함수명만 적었을때와 똑같이 처리됨 소나타()x 소나타o
아반떼(()=>{
    console.log('aaa');
})


function 아반떼1(a){
    a()
    setTimeout(()=>{
        console.log('아반떼1 hi');
    },1000)
}
function 소나타1(){
    setTimeout(()=>{
        console.log('소나타 hi');
    },2000)
}
function 그랜저1(){
    setTimeout(()=>{
        console.log('구랜저1 hi');
    },3000)
}

//아반떼1(소나타1)

// 아반떼1(()=>{
//     소나타1(()=>{
//         그랜저1()
//     })
// })