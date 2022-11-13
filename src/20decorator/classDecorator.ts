// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，
// 属性或参数上。

// 类装饰器举例


// 定义一个类装饰器函数 他会把被装饰Class的构造函数传入classdecorator函数当做第一个参数
const classdecorator: ClassDecorator = (target: Function) => {
	target.prototype.getParams = <T>(params: T): T => {
		return params;
	};
};
@classdecorator
class testDecorator {
	constructor() {}
}

const test = new testDecorator();
console.log((test as any).getParams("123"));

// 装饰器工厂
const watcher = (name: string): ClassDecorator => {
	return (target: Function) => {
		target.prototype.getParams = <T>(params: T): T => {
			return params;
		};
		target.prototype.getOptions = (): string => {
			return name;
		};
	};
};
@watcher("name11")
class BM {
	constructor() {}
}

const bm = new BM()
console.log((bm as any).getParams('1234'))
console.log((bm as any).getOptions())
// 获取装饰器传入的参数

const watcher1 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}
const watcher2 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getNames = ():string => {
            return name
        }
    }
}
 
@watcher2('name02')
@watcher('name01')
class ABC {
    constructor() {
 
    }
}
 
 
const abc = new ABC();
console.log((abc as any).getOptions());
console.log((abc as any).getNames());
// 可以用多个装饰器




