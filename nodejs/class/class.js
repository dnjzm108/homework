// let Person = {
//     name:'foo',
//     age:20
// }
// let Person2 = {
//     name:'foo2',
//     age:20
// }
// let Person3 = {
//     name:'foo3',
//     age:20
// }

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// let foo = new Person('foo',20);
// let foo2 = new Person('foo2',21);

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let foo = new Person('foo',20);
// let foo2 = new Person('foo2',21)


//함수를 dir 찍을때 constructor 존재
//객체를 찍을땐 constructor 존재하지 않음

// function Person(name,age){
//          this.name = name;
//          this.age = age;
//      }

//      let Person2 = {
//     name:'foo2',
//     age:20
// }
// constructor이 존재하지만 new 라는 생성자가 가능


// function Person(name,age){
//     this.name = name;
//     this.age = age;

//    this.setName = function(_name){
//         this.name = _name;
//     }
// }

// Person.prototype.getName = function(){
//     return this.name;
// }
// Person.prototype.getAge = function(){
//     return this.age;
// }

// let a = new Person('foo',20);

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getName =function(){
//         return this.name;
//     }
//     getAge =function(){
//         return this.age;
//     }
//     setName = function(_name){
//         this.name = _name;
//     }
// }

// let a = new Person('foo',20);


// function Person2{
//     this.name = name;
//     this.age = age;
// }

// Person2.setName = function(){
//     return 'a';
// }

// Person2.prototype.getName = function(){
//     return this.name;
// }

// Person2.prototype.getAge = function(){
//     return this.age;
// }

// let b = new Person2('foo',21)

// class Person3{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
//     static setName = function(){
//         return `${this.name}/${this.age}`;
//     }
//     getName = function(){
//         return this.name;
//     }
//     getAge = function(){
//         return this.age;
//     }
// }

// a= new Person3('foo3',21)