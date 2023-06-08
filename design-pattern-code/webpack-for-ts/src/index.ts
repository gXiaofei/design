/**
 * @description src entry
 */

// 封装：可见修饰符
// - protected => 当前类或者子类可以访问，外部不可以访问
// - public => 公共的，任何地方都可以访问
// - private => 私有的，只有当前类可以访问，子类和外部都不可以访问

// 多态
// - 重写
// - 重载
class People { 
    protected weight: number = 100;
    private height: number = 180;
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name)
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
    
}

// 
class Student extends People {
    school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    study() {
        alert(`${this.name} study in ${this.school} weight ${this.weight}`)
    }

    // 重写
    eat() {
        alert(`${this.name} eat apple`)
    }
}

class  Teacher extends People {
    major: string;
    constructor(name: string, age: number, major: string) {
        super(name, age);
        this.major = major;
    }

    teach() {
        alert(`${this.name} teach ${this.major}`)
    }
}


interface IStyleInfo  {
    [key: string]: string;
}

class JQuery {
    // 重载
    css(key: string, value: string): void;
    css(styleInfo: IStyleInfo): void;
    css(keyOfInfo: string | IStyleInfo, value?: string): void {}
}

const j = new JQuery();
j.css('width', '100px');
j.css({width: '100px'})
