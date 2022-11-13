// Number 对象属性

// MAX_VALUE
// 可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。

// MIN_VALUE
// 可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE，MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。

// NaN
// 非数字值（Not-A-Number）。

// NEGATIVE_INFINITY
// 负无穷大，溢出时返回该值。该值小于 MIN_VALUE。


// POSITIVE_INFINITY
// 正无穷大，溢出时返回该值。该值大于 MAX_VALUE。


// prototype
// Number 对象的静态属性。使您有能力向对象添加属性和方法。

// constructor
// 返回对创建此对象的 Number 函数的引用。

console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); 
console.log("最小值为: " + Number.MIN_VALUE); 
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

/* 
TypeScript Number 属性:
最大值为: 1.7976931348623157e+308
最小值为: 5e-324
负无穷大: -Infinity
正无穷大:Infinity
 */

let num11:Number = new Number(18634563.548)

console.log(num11)
// number对象方法

// toExponential()把对象的值转换为指数计数法。
console.log(num11.toExponential())

// toFixed()把数字转换为字符串，并对小数点指定位数。
console.log(num11.toFixed(2))

// toLocaleString()把数字转换为字符串，使用本地数字格式顺序。
console.log(num11.toLocaleString())

// toPrecision()把数字格式化为指定的长度。
console.log(num11.toPrecision(8))

// toString()

// valueOf()

