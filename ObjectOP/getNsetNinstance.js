
class Animal {
  constructor(name){
    // this.name = name  --> we cna also use it like this in constructor but not in a method
    this._name = name
  }
  fly(){
    console.log("Mai ud rha hu")
  }

  get name(){
    return this._name
  }

  set name(newName){
    this._name = newName
  }
}

class Rabbit extends Animal{
  eatCarrot(){
    console.log("Eating carrot")
  }
  
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Kalu"
console.log(a.name)

// Instance of operator: returns true if the object belongs to a certain class or any other class inheriting from it.
let c = 56;
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)


