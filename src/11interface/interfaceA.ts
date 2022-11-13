interface M {
  name: string;
}
interface M {
  age: number;
}
// 同名的接口ts会合并

const a: M = {
  name: "zs",
  age: 18,
};

// 接口之间可以继承
// age?:number表示该number类型的age是可选的，可有，可没有

interface B {
  name: string;
}
interface A {
  age?: number;
}
interface C extends A, B {
  home: string;
}
const c: C = {
  name: "aa",
  home: "zz",
};

// 接口可以有函数或不定名的类型
interface MM {
  string: A;
  say: () => {};
  run: () => string;
}
//联合类型和接口
interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}

// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
// 设置元素为字符串类型：
interface namelist {
  [index: number]: string;
}

let names: namelist = {
  1: "a",
  2: "b",
};

interface People1 {
  name: string;
  age?: number;
}
interface Man {
  sex: boolean;
}

const zs = (man: Man & People1): void => {
    console.log(man)
};
zs({sex:true,name:"sss"})

