// Q1. Create a class complex and create a constructor to set the real and complex part.
// Q2. Write a method to add two complex numbers in the above class.
/*
class complex{
  constructor (real, img){
    this.real = real
    this.img = img
  }
  add(num){
    this.real = this.real + num.real
    this.img = this.img + num.img
    //return new complex(r,i)
    
  }
}

let a = new complex(2,4)
let b = new complex(3,5)
a.add(b) // the value of b is added to a 
console.log(`Sum = ${a.real}+${a.img}i`)
*/

// Q3. Create a class student from a class human. Override a method and see changes.
// Q4. See if student is an instance of human using instanceof keyword.

class Human{
  constructor(name){
    this.name = name
  }
  walk(name){
    console.log(`${name} Human is walking`)
  }
}

class Student extends Human{
  walk(name){
    console.log(`${name} Student is walking`)
  }
}

let s = new Student()
s.walk("Kali")
console.log(s instanceof Human)

// Q5. Use getters and setters to set and get the real and imaginary parts of the complex number.

class complex{
  constructor (real, img){
    this._real = real
    this._img = img
  }
  add(num){
    this.real = this.real + num.real
    this.img = this.img + num.img
    //return new complex(r,i)

  }
  get real(){
    return this._real
  }
  get img(){
    return this._img
  }
  set real(newReal){
    return this._real = newReal
  }
  set img(newImg){
    return this._img = newImg
  }
  
}
let x = new complex()
x.real = 10
x.img = 6

let y = new complex()
y.real = 4
y.img = 9

x.add(y) // equivalent to x = x+y
console.log(`Sum = ${x.real}+${x.img}i`)