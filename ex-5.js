// ตัวอย่างโปรแกรม

// let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
// let result2 = sum(1, 2, 3, 4);

// console.log(<Code>Result ${result1}</Code>); // Result 36
// console.log(<Code>Result ${result2}</Code>); // Result 10
// เมื่อทำการแสดงผลค่าของ result1 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 36"
// เมื่อทำการแสดงผลค่าของ result2 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 10"

function sum(...input) {
  // Start coding here !
  const sumOfNum = input.reduce((acc,curr) => acc + curr, 0);
  return sumOfNum;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
