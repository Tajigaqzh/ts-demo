enum Color {
	red,
	green,
	blue,
}
console.log(Color.blue);
// 默认从0开始

// 增长枚举
enum Name {
	tomy = 5,
	tom,
	mike,
}
// 默认后面的从第一个开始增长，也可以自己定义值
// 枚举类型也可以定义，也可以是字符串

// const枚举
const enum Types {
	success,
	fail,
}

// 反向映射
enum AAA {
	success = 456,
}
let success: number = AAA.success;
let key = AAA[success];
console.log(`value---${success},key---${key}`);


