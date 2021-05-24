console.log('switch 문 이해하기');

//성별

let gender = "남자"; //남자 or 여자
//남자일 경우 1을 출력 여자일겨우 2출력

if(gender == "남자"){
    console.log(1);
}else if(gender == "여자"){
    console.log(2);
}

//if문에서 ==만 활용할때 같다표현을 복수일때.
switch(gender){
    case "남자":
        console.log(1)
        break;
    case "여자":
        console.log(2);
        break;
}

let 과일 = "배";

switch(과일){
    case "사과":
        console.log("빨강")
        break;
    case "바나나":
    case "참외":
        console.log("노랑")
        break;
    case "키위":
    case "수박":
        console.log("초록")
        break;
    case "포도":
        console.log("보라")
        break;
        default:
            console.log('입력되지 않은 과일입니다.');
}