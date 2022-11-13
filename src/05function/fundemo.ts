function fnVoid():void {
    console.log("aaa")
}
fnVoid()
interface A {

}

// interface IArguments {
//     [index:number]:any;
//     length: number;
//     callee:Function
// }
// ts已经内置

// ts支持剩余参数(可变长参数)，当参数个数不明确时可以使用，且只能放在最后一位
function Arr(...arr:any):void {
  console.log(arguments)
  //arguments是所有参数的集合
  let arrr:IArguments =arguments
}

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);


// 默认参数
function A(name:string,age=10):void{
   console.log(name+age)   
}

A("zd",20)
function B(name:string,age?:number):void{
    console.log(name+age)   
 }

//  函数重载
function fn(param1:number):void
function fn(parma1:string,param2:number):void
function fn(param1:any,param2?:any):any{
    console.log("函数重载")
    return param1+param2 | param1
}
fn(1)
fn('a',12);






// 匿名函数自调用
(function () { 
    var xsss = "Hello!!";   
    console.log(xsss)     
 })()
