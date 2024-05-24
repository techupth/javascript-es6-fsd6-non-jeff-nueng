// ให้แก้ไขโค้ดในโจทย์ให้มีผลลัพธ์ดังนี้
// เมื่อทำการ console.log() ตัว result1 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น undefined
// เมื่อทำการ console.log() ตัว result2 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น English score is not defined

const employee1 = {
  name: "John",
  age: 20,
};

// let checker1 = undefined;
const result1 = employee1?.scores?.english 
console.log(result1);


const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

// let checker2 = "English score is not defined";
const result2 = employee2.scores.english ?? /*checker2*/ "English score is not defined"
console.log(result2);

// const result3 = employee2?.scores?.math ?? "No scores"
// console.log(result3);

