let str1:string = 'hello'
console.log(str1)
let anys:any = 'hello'
anys = 18
anys = true
anys = {}
anys = []
anys = Symbol('123')

let unkonw:unknown = {a:():number=>123}
// unkonwn类型不能调用函数和属性
// unkonw.a
let ss:any ="woso"
let mm:string ="aaa"
mm=ss

// any可以赋值给任意类型

let unk:unknown="aaa"
// let st:string =unk
let aaaa:any = unk
let bbbb:unknown = unk
// unknown只能分配给any和unknown两种类型

