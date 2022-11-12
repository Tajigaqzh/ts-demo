let s:string = '123'

let str:string = `aaa${s}`

console.log(str)

let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s

let createBoolean: boolean = Boolean(1)

let booleand: boolean = true //可以直接使用布尔值
 
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值

let u: void = undefined
// let n: void = null;
//不能将类型null分配给void

let m: undefined = undefined;//定义undefined
let n: null = null;//定义null
