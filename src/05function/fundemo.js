function fnVoid() {
    console.log("aaa");
}
fnVoid();
// interface IArguments {
//     [index:number]:any;
//     length: number;
//     callee:Function
// }
// ts已经内置
function Arr() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arguments);
    //arguments是所有参数的集合
    var arrr = arguments;
}
// 默认参数
function A(name, age) {
    if (age === void 0) { age = 10; }
    console.log(name + age);
}
A("zd", 20);
function B(name, age) {
    console.log(name + age);
}
function fn(param1, param2) {
    console.log("函数重载");
    return param1 + param2 | param1;
}
fn(1);
fn('a', 12);
// ts支持剩余参数(可变长参数)，当参数个数不明确时可以使用，且只能放在最后一位
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
