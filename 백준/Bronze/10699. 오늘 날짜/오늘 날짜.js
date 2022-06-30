let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let today = date.getDate();

console.log(`${year}-${(month + 1).toString().padStart(2, 0)}-${today}`);
