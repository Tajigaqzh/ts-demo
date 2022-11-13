
/* 自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。
symbol类型的值是通过Symbol构造函数创建的。

可以传递参做为唯一标识 只支持 string 和 number类型的参数 */
let sym1 = Symbol()
let sym2 = Symbol("key")

// symbol的值是唯一的
const s1 = Symbol()
const s2 = Symbol()
// s1 === s2 =>false


let sym = Symbol();
//用作对象属性的键 
let obj = {
    [sym]: "value"
};


const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1= {
   [symbol1]: '小满',
   [symbol2]: '二蛋',
   age: 19,
   sex: '女'
}
// 1 for in 遍历无法获取symbol
for (const key in obj1) {
   // 注意在console看key,是不是没有遍历到symbol1
   console.log(key)
}
// 2 Object.keys 遍历也无法获取symbol
Object.keys(obj1)
console.log(Object.keys(obj1))


// 3 getOwnPropertyNames无法获取symbol
console.log(Object.getOwnPropertyNames(obj1))
// 4 JSON.stringfy无法获取
console.log(JSON.stringify(obj1))


// 获取方式

// 拿到具体的symbol 属性,对象中有几个就会拿到几个
console.log(Object.getOwnPropertySymbols(obj1))


// es6 的 Reflect 拿到对象的所有属性
console.log(Reflect.ownKeys(obj1))

// Symbol.iterator 迭代器 和 生成器 for of

var arr11 = [1,2,3,4];
let iterator = arr11[Symbol.iterator]();
 
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.next());  //{ value: 2, done: false }
console.log(iterator.next());  //{ value: 3, done: false }
console.log(iterator.next());  //{ value: 4, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }
console.log("-----------------------------------------------")


interface Item {
    age: number,
    name: string
}
 
const array: Array<Item> = [{ age: 123, name: "1" }, { age: 123, name: "2" }, { age: 123, name: "3" }]
 
type mapTypes = string | number
const map:Map<mapTypes,mapTypes> = new Map()
 
map.set('1','王爷')
map.set('2','陆北')
 
const obj11 = {
    aaa:123,
    bbb:456
}
let set:Set<number> = new Set([1,2,3,4,5,6])

// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg:any): void => {
    let it: Iterator<any> = erg[Symbol.iterator]()
    let next:any= { done: false }

    while (!next.done) {
        next =  it.next()
        if (!next.done) {
            console.log(next.value)
        }
    }
}
gen(array)