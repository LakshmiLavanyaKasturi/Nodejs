class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name}, ${job}`);
  }
}

const thatGuy = new Person("John Doe", "Software Engineer");
thatGuy.print();
function isPalindrome(num) {
  const originalNum = num;
  let reversedNum = 0;
  while (num > 0) {
    const digit = num % 10;
    reversedNum = (reversedNum * 10) + digit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversedNum;
}