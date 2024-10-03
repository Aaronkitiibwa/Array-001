
const Mark = {
  fullName: 'Mark  Miller',
  mass: 78,  
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass/this.height**2;
    return this.bmi
  }
}
console.log(Mark.calcBMI())

const John = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass/this.height**2;
    return this.bmi
  }
}
console.log(John.calcBMI())

//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

console.log(`${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${Mark.fullName}'s (${Mark.calcBMI()})!`)
