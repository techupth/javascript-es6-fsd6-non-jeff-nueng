// Variable height มี Value เป็น undefined
// ให้ Declare ตัว Function โดยมีรายละเอียดดังนี้
// รับ Parameter 1 ตัว ในที่นี้คือ height
// Function นี้จะตรวจสอบ Parameter นั้นว่าเป็น undefined หรือไม่ด้วยวิธี Nullish Coalescing
// Return ผลลัพธ์เป็น “Height is not defined” กรณีที่ Parameter นั้นเป็น undefined


let height = undefined;
let result = height ?? "Height is not defined.";

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
