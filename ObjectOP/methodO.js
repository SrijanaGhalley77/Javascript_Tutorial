// Method overriding using super keyword
/*
class Employee{
  login(){
    console.log(`Employee has logged in`);
  }
  logout(){
    console.log(`Employee has logged out`)
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves -- Auto approved`)
  }
}

class Programmer extends Employee{
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One extra is granted")
    //console.log(`Employee has requested ${leaves+1} leaves(one extra)`)
  }
  
}

let e = new Programmer()
e.login()
e.requestLeaves(3)
*/

// Overriding constructor
class Employee{
  constructor(name){
      console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login(){
    console.log(`Employee has logged in`);
  }
  logout(){
    console.log(`Employee has logged out`)
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves -- Auto approved`)
  }
}

class Programmer extends Employee{
  // constructor(...args){ --> If there is no constructor in the child class, this is created automatically
  //   super(...args) // JS will automatically add super() in the constructor of child class even if we don't add it in the child class
  // }
  constructor (name){
    super(name)
    this.name = name
    console.log(`${name} - Programmer's constructor is here`)
  }
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One extra is granted")
    //console.log(`Employee has requested ${leaves+1} leaves(one extra)`)
  }

}

let e = new Programmer("Harry")
e.login()
e.requestLeaves(3)