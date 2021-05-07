class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName = function(){
        return this.name;
    }
}
/*
    constructor 생략되었다.부모로 부터 받았다.
    */
class Action extends Person{
    constructor(name,age){
        super(name,age) //super 는 부모의 constructor 을 가져오는 매서드
    }
    run = function () {
        name = this.getName();
        console.log(`${name} is run`);
    }
}

a = new Action('foo',30);



class Model{
    constructor(){

    }
    static init(){
        console.log('aaa');
    }
}

class User extends Model{
    static init(){
        super.init();
    }
}

let name = User.init();
console.log(name);