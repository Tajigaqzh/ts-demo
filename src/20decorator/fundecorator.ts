// 方法装饰器举例

const met:MethodDecorator = (...args) => {
    console.log(args);
}
 
class AB {
    constructor() {
 
    }
    @met
    getName ():string {
        return '小满'
    }
}
 
 
const ab = new AB();