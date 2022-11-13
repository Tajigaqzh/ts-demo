// TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
import {V} from './abcd'
namespace NameA{
    export const Time:number =1000
    export const fn = <T>(arg:T):T => arg
    fn(Time)
}


namespace NameB {
    export const Time: number = 1000
    export const fn = <T>(arg: T): T => {
       return arg
   }
   fn(Time)
}


NameA.Time
const resu = NameA.fn("aaa")
NameB.Time

// 嵌套命名空间

namespace abs {
    export namespace b {
        export class Vue {
            parameters: string
            constructor(parameters: string) {
                this.parameters = parameters
            }
        }
    }
}
 
let v = abs.b.Vue
 
new v('1')

// 抽离命名空间
console.log(V)

// 简化命名空间
import X = AN.B.C
console.log(X)

// 重名的命名空间会合并
