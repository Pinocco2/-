let result = 5 + 5 + '5'; 
console.log(`Результат: ${result}`); 
console.log(`Тип змінної result: ${typeof result}`);

let email = "example@example.com";
let containsAtSymbol = email.includes('@'); 
let emailLength = email.length; 
console.log(`Чи містить символ @: ${containsAtSymbol}`);
console.log(`Кількість символів у email: ${emailLength}`);

let word1 = "My"; 
let word2 = "name"; 
let word3 = "is"; 
let fullName = `${word1} ${word2} ${word3} stefan`; 
console.log(`Повне ім'я: ${fullName}`);

let userName = "stefan"; 
let payment = 300; 
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`); 