// Class: creating a simple class with constructor 

class railwayForm {
  constructor(givenname, trainno){
    this.name = givenname
    this.trainno = trainno
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
  }

  submit() {
    console.log(this.name + ": this form is Submitted for train number: " + this.trainno)
  }
  cancel(){
    console.log(this.name + ": This form is Cancelled for traion number: " + this.trainno)
  }
}
// Create & fill forms for Harry & Seeru
let harryForm = new railwayForm("Harry", 14562)
let seeruForm1 = new railwayForm("Seeru", 345420)
let seeruForm2 = new railwayForm("Seeru", 345469)

// No need to Fill the form with Harry's & Seeru's details
// harryForm.fill("Harry", 14562)
// seeruForm1.fill("Seeru", 345420)
// seeruForm2.fill("Seeru", 345469)

harryForm.submit()
seeruForm1.submit()
seeruForm2.submit()
seeruForm1.cancel()