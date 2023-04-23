// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function checkMax(num1, num2, num3) {
      alert(Math.max(num1, num2, num3))
}
const numberA=(prompt(`Укажите первое число`))
const numberB=(prompt(`Укажите второе число`))
const numberC=(prompt(`Укажите третье число`))
checkMax(numberA, numberB, numberC)