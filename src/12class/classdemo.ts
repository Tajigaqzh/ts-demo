class Animals {
  public name: string;
  readonly age: number = 10;
  static address: string = "aaaaa";

  constructor(name: string) {
    this.name = name;
  }
  static hello() {
    console.log(this.address);
  }
  public run(): void {
    console.log(this.name + "跑起来了");
  }
  public makejiao() {
    this.jiao();
  }
  private jiao() {
    console.log(this.name + this.age + "叫了");
  }
}
const animal = new Animals("狗");
console.log(animal.name);
animal.run();
console.log(animal.age);
animal.makejiao();
console.log(Animals.address);
console.log('--------------------------------------------------')

interface Person {
  name: string;
  set(name: string): void;
}
interface Man1 {
  get(): string;
}
abstract class Ani {
  blood: number;
  constructor(blood: number) {
    this.blood = blood;
  }
}
class Dog extends Ani {
  war: string;
  constructor(blood: number, war: string) {
    super(blood);
    this.war = war;
  }
}
class weMan extends Dog implements Person, Man1 {
  name: string;
  constructor(name: string, blood: number, war: string) {
    super(blood, war);
    this.name = name;
  }
  set(name: string): void {
    this.name = name;
  }
  get(): string {
    return this.name;
  }
}
const wm: weMan = new weMan("李红", 100, "abcd");
console.log(wm);
wm.set("aaaaa");
const str111: string = wm.get();
console.log(str111);
