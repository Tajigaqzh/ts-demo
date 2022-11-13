abstract class absA {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getName(): string;
  setName(name:string){
    this.name=name
  }

}
class absB extends absA {
  constructor(name: string) {
    super(name);
  }
  getName(): string {
    return this.name;
  }
}
const b = new absB('aa')
b.setName('b')
console.log(b.getName())