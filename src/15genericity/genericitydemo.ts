// 泛型优化
// 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T

function add<T>(a:T,b:T):Array<T>{
    return [a,b]
}

add(1,2)
add('a','b')

function Sub<T,U>(a:T,b:U):Array<T|U> {
    const params:Array<T|U> = [a,b]
    return params
}
const aaaaa = Sub<Boolean,number>(false,1)
 console.log(aaaaa)


//  泛型接口

interface MyInter<T> {
    (arg: T): T
 }
  
 function fn<T>(arg: T): T {
    return arg
 }
  
 let result: MyInter<number> = fn
  
//  对象字面量泛型
let foo: { <T>(arg: T): T }
 
foo = function <T>(arg:T):T {
   return arg
}

// 泛型约束
// 我们期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
interface Len {
    length:number
 }
  
 function getLegnth<T extends Len>(arg:T) {
   return arg.length
 }



//  使用keyof 约束对象
// 其中使用了TS泛型和泛型约束。首先定义了T类型并使用extends关键字继承object类型的子类型，
// 然后使用keyof操作符获取T类型的所有键，它的返回 类型是联合 类型，最后利用extends关键字约束 
// K类型必须为keyof T联合类型的子类型
function prop<T, K extends keyof T>(obj: T, key: K) {
   return obj[key]
}

let o = { a: 1, b: 2, c: 3 }
 
prop(o, 'a') 
// prop(o, 'd') 

// 泛型类
// 声明方法跟函数类似名称后面定义<类型>
// 使用的时候确定类型new Sub<number>()

class Sub1<T>{
    attr: T[] = [];
    add (a:T):T[] {
       return [a]
    }
 }
  
 let sa = new Sub1<number>()
 sa.attr = [1,2,3]
 sa.add(123)
  
 let stra = new Sub1<string>()
 stra.attr = ['1','2','3']
 stra.add('123')
 
