// 使用es6的assign合并对象

interface NameC {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}
 
let people1: NameC = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }
 
const people = Object.assign(people1,people2,people3)

// 类的混入

class AA {
    type: boolean = false;
    changeType() {
        this.type = !this.type
    }
}
 
 
class BB {
    name: string = '张三';
    getName(): string {
        return this.name;
    }
}

class C implements AA,BB{
    type:boolean
    changeType:()=>void;
    name: string;
    getName:()=> string
}
// 实现混入的函数
Mixins(C, [A, B])
function Mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}
