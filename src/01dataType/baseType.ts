// 字符串类型
let s:string = '123'
let sm:string ="123"
let str:string = `aaa${s}`
console.log(str)

// 数字类型
let notANumber: number = NaN;//NaN
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s


// 布尔类型
let createBoolean: boolean = Boolean(1)
let booleand: boolean = true //可以直接使用布尔值
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值


//空值类型,可以用 void 表示没有任何返回值的函数
// void也可以定义undefined 和 null类型

let u: void = undefined
// let n: void = null;
//不能将类型null分配给void

let m: undefined = undefined;//定义undefined
let n: null = null;//定义null

// void 和 undefined 和 null 最大的区别
// 与 void 的区别是，undefined 和 null 是所有类型的子类
// 型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：


// never 类型
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表
// 现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：
let x:never
let y:number

// x = 123;
// 编译错误数字类型不能转为 never 类型

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
