const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1?.scores?.english

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2?.scores?.english ?? "English score is not defined"
//test .? in result3
// const result3 = employee2?.scores?.math

console.log(result1)
console.log(result2)
// console.log(result3)