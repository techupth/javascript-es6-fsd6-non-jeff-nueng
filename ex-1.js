// วันนึงทางโรงเรียนต้องการเก็บข้อมูลลิงก์รูปถ่าย และงานอดิเรกของนักเรียน (งานอดิเรกมีได้หลายงาน)
// ข้อมูลนักเรียนที่จะเก็บเพิ่มเติมจะมีลักษณะแบบนี้

// let additionalProperties = {
//   photo: "https://placedog.net/500",
//   hobbies: ["Football", "Coding"],
// };
// ให้เขียนโปรแกรมรวม Object studentProfile และ additionalProperties เข้าด้วยกัน
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   photo: 'https://placedog.net/500',
//   hobbies: [ 'Football', 'Coding' ]
// }

let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

// Start coding here
let newStudentProfile = {...studentProfile,...additionalProperties};

console.log(newStudentProfile);
