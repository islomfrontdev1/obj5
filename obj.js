// Foydalanuvchidan ma'lumotlarni so'rash
let name = prompt("Ismingizni kiriting:");
let id = prompt("ID raqamingizni kiriting:");
let password = prompt("Parolingizni kiriting:");

// Ma'lumotlarni obyektga joylashtirish
const data = {
    name: name,
    id: id,
    password: password
};

// Konsolga chiqarish
console.log("▶", data);