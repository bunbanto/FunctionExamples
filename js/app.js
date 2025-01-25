const myHeading = document.querySelector("h1");
myHeading.textContent = "Приклади функцій";

//"1. функція яка приймає число і повертає суму всіх чисел від 0 до цього числа"
function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}
console.log(calculateTotal(24));

const myf1 = calculateTotal.toString();
document.getElementById("f1").textContent = myf1;
//--------------------------------------------------------------------------------------
//2. функція яка приймає масив і повертає його довжину
function getOrderQuantity(order) {
  return order.length;
}
console.log(getOrderQuantity(["banana", "apple", "orange", "kiwi", "mango"]));
const myf2 = getOrderQuantity.toString();
document.getElementById("f2").textContent = myf2;
//--------------------------------------------------------------------------------------

//3. функція яка приймає масив і повертає останній елемент масиву та його останній індекс
function getLastElementMeta(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return [lastIndex, lastElement];
}
console.log(getOrderQuantity(["banana", "apple", "orange", "kiwi", "mango"]));

const myf3 = getLastElementMeta.toString();
document.getElementById("f3").textContent = myf3;
//--------------------------------------------------------------------------------------

//4. Функція яка приймає масив і повертає перший та останній елемент масиву
function getExtremeElements(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  const firstElement = array[0];
  return [firstElement, lastElement];
}

console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

const myf4 = getExtremeElements.toString();
document.getElementById("f4").textContent = myf4;
//--------------------------------------------------------------------------------------

//5. Функція яка приймає строку і число та повертає кількість слів у строці помножену на число
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ").length;
  const totalPrice = words * pricePerWord;
  return totalPrice;
}
const myf5 = calculateEngravingPrice.toString();
document.getElementById("f5").textContent = myf5;
//--------------------------------------------------------------------------------------

//6. Функція яка приймає масив і повертає підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
function getSlice(array, value) {
  const index = array.indexOf(value);
  if (index === -1) {
    return [];
  }
  return array.slice(0, index + 1);
}
const myf6 = getSlice.toString();
document.getElementById("f6").textContent = myf6;
//--------------------------------------------------------------------------------------

//7. Функція яка повертає масив усіх цілих чисел від числа min до числа max включно
function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
const myf7 = createArrayOfNumbers.toString();
document.getElementById("f7").textContent = myf7;
//--------------------------------------------------------------------------------------

//8. Функція яка приймає масив і повертає загальну суму всіх елементів масиву
function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    sum += order[i];
  }
  return sum;
}
const myf8 = calculateTotalPrice.toString();
document.getElementById("f8").textContent = myf8;
//--------------------------------------------------------------------------------------

//9. Функція яка приймає масив і повертає масив усіх парних чисел від числа min до числа max включно
function getEvenNumbers(start, end) {
  let numEven = [];
  for (let index = start; index <= end; index++) {
    if (index % 2 === 0) {
      numEven.push(index);
    }
  }
  return numEven;
}
const myf9 = getEvenNumbers.toString();
document.getElementById("f9").textContent = myf9;
//--------------------------------------------------------------------------------------

//10. Функція checkStorage перевіряє, чи існує заданий елемент у масиві сховища. Якщо знайдено, вона повертає рядок, що вказує на те, що елемент доступний для замовлення в нижньому регістрі. Якщо не знайдено, повертає повідомлення "немає в наявності"
function checkStorage(storage, item) {
  const itemLowerCase = item.toLowerCase();
  for (let index = 0; index < storage.length; index++) {
    if (storage[index].toLowerCase() === itemLowerCase) {
      return `${itemLowerCase} is available to order!`;
    }
  }
  return "Sorry! We are out of stock!";
}
const myf10 = checkStorage.toString();
document.getElementById("f10").textContent = myf10;
//--------------------------------------------------------------------------------------

//11. Функція яка отримує на вхід два масиви і повертає новий масив, що містить елементи, які є спільними для обох вхідних масивів.
function getCommonElements(array1, array2) {
  const nullArray = [];
  for (let index = 0; index < array1.length; index++) {
    if (array2.includes(array1[index])) {
      nullArray.push(array1[index]);
    }
  }
  return nullArray;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає[10, 30,]
const myf11 = getCommonElements.toString();
document.getElementById("f11").textContent = myf11;
//--------------------------------------------------------------------------------------

//12. Функція calculateTotalPrice підраховує загальну суму всіх елементів масиву
function calculateTotalPrice(order) {
  let sum = 0;
  for (let num of order) {
    sum += num;
  }
  return sum;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
console.log(calculateTotalPrice([412, 371, 94, 63, 49])); //989
const myf12 = calculateTotalPrice.toString();
document.getElementById("f12").textContent = myf12;
//--------------------------------------------------------------------------------------

//13. Використання arguments у функції, яка повертає результат множення будь-якої кількості аргументів.
function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
const myf13 = multiply.toString();
document.getElementById("f13").textContent = myf13;
//--------------------------------------------------------------------------------------

//14. Функція createReversedArray, яка отримує змінну кількість аргументів (...args) і повертає новий масив з аргументами у зворотному порядку.
function createReversedArray(...args) {
  const reversedArray = [];
  for (let i = args.length - 1; i >= 0; i--) {
    reversedArray.push(args[i]);
  }
  return reversedArray;
}
function createReversedArray(...args) {
  return args.toReversed();
}

console.log(createReversedArray(1, 2, 3)); // [3, 2, 1]
console.log(createReversedArray(1, 2, 3, 4)); // [4, 3, 2, 1]
console.log(createReversedArray(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]

const myf14 = createReversedArray.toString();
document.getElementById("f14").textContent = myf14;
//--------------------------------------------------------------------------------------
