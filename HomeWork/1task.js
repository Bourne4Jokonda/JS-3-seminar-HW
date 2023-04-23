// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function square(number) {
      const numA = number*number*number;
      return numA;
}
const A =square(2)
const B =square(3)
const result=A+B
console.log(result);