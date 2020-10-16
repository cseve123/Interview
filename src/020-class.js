class Student {
    constructor (name, number) {
        this.name = name;
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名：${this.name}，学号：${this.number}`
        )
    }
}

const xialuo = new Student('xia', 100)
xialuo.sayHi();

// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}
// 子类
class Jim extends People {
    constructor(name, number) {
        super(name);
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名：${this.name}，学号：${this.number}`
        )
    }
}

const JIM = new Jim('jim', 100)
JIM.eat();

// 实例
console.log(xialuo instanceof People) // true
console.log(xialuo instanceof Object) // true