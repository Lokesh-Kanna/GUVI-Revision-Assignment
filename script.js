const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  // [32, 57, 22]
// Task 1
// Print the name list - As an array
console.log(scores.map(({name}) => name));


// Task 2
// >=40 pass.. find those student that passed (Use array method)
console.log(scores.filter((scores) => scores.marks >= 40));


// Task 3
//  Find all the names who failed the exams (Array methods)
console.log(scores.filter((scores) => scores.marks < 40).map(({name}) => name));


// Task 4
// Find the Average marks
console.log(scores.map(({marks}) => marks).reduce((acc, mark) => acc + mark/scores.length, 0));


// Task 5
// Find the topper's name
let marks = scores.map(({marks}) => marks);
let topMark = Math.max(...marks);
console.log(scores.filter((scores) => scores.marks == topMark).map(({name}) => name));


// Only use
// map, reduce, filter & destructuring


class BankDetails {
  constructor (name, accountType, accountNo, openingBalance) {
      this.name = name;
      this.accountType = accountType;
      this.accountNo = accountNo;
      this.openingBalance = openingBalance;
  }
  getBalance () { return "Your Balance is" + " " + this.openingBalance; };
  withdraw (val) {
      this.openingBalance = this.openingBalance - val;
      if (this.openingBalance < 0) {
          return `Insufficient Balance. Your balance is ${this.openingBalance}`
      }
      else {
          return `Your Balance is ${this.openingBalance}`;
      }
      
  }
}

const Sourab = new BankDetails('Sourab', 'SB', '12345', 25_000);
const Lokesh = new BankDetails('Lokesh', 'SB', '25781', 10_000);
const Surya = new BankDetails('Surya', 'SB', '163218', 100_000);
const Asrita = new BankDetails('Asrita', 'SB', '21684', 20_000);

console.log(Lokesh.withdraw(10001));


