

export const reducer = (number, action) => {
    //code block
    switch (action.type) {
        case "UP":
            return number + 1
        case "Down":
            return number - 1
        default:
            return number
    }
}


//export defualt reducer 은 함수 자체 하나만 을 내보내주는것이고
//지금처럼 변수 하나만 내보낼때는 저렇게 내보내면된다.