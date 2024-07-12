//Задание 1
//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// [1, 2, 3, 0, 4, 5, 6]
// const num=[1, 2, 3, 0, 4, 5, 6]
// const newNum=num.map((el) => el * el)
// console.log(newNum)


//Задание 2
//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// [1, 2, 3, 0, 4, 5, 6]
// const arr = [1, 2, 3, 0, 4, 5, 6];
// const arr2 = arr.filter(el => el >= 0).length ;
// console.log(!!arr2);

//Задание 3
//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
// [1, 2, -3, 0, 4, -5, 6]
// const num =[1, 2, -3, 0, 4, -5, 6];
// const newNum=num.filter(el => el < 0).length;
// console.log(!!newNum)



//Задание 4
//Дан массив с числами. Оставьте в нем только отрицательные числа.
// [1, 2, -3, 0, 4, 5, -6]
// const num =[1, 2, -3, 0, 4, 5, -6]
// const newNum=num.filter(el => el < 0)
// console.log(newNum)



//Задание 5
// Дан массив с числами. Оставьте в нем только четные числа.
// [1, -2, 3, 0, 4, -5, 6]
// const num =[1, -2, 3, 0, 4, -5, 6]
// const newNum=num.filter(el => el % 2 === 0)
// console.log(newNum)


//Задание 6
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun, 'even]
// const arr=['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// const newArr = () => {
//     const newfil = arr.filter(el => {
//         if (el.length >= 5 ){
//             return el
//         }
//     })
//     return newfil
// }
// console.log(newArr())


//Задание 7
//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// [1, 2, -3, 0, -4, 5, -6]
// const num=[1, 2, -3, 0, -4, 5, -6]
// const newNum =num.filter(el => el < 0 ).length
// console.log(newNum)



//Задание 8
//// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
// const num=[1,2,3,4]
// const num2=['a','b','c','d']
// const num3=num.concat(num2)
// console.log(num3)


//Задание 9
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
// const num=[2, 3, 4, 5]
// const str='hello world'
// const result=num.concat(str)
// console.log(result)


//Задание 10
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// const num=[2, 3, 4, 5]
// const str = 'hello world'
// const newstr=str.replace(' ','')
// const result=num.concat(newstr.split(''))
// console.log(result)



//Задание 11
//// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]
// const num=[2, 3, 4, 5]
// const str='hello world'
// const newstr=str.replace(' ','')
// const result=num.concat(newstr.split(''))
// const result2=result.concat(num)
// console.log(result2)



//Задание 12
//FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
// (На самом деле, этот вопрос подходит для собеседований, и, говорят, он позволяет отсеивать довольно большое число кандидатов. Поэтому, когда вы решите эту задачу, можете себя похвалить.)


// const handleFunc = () => {
//     for(let i =0; i<100;i++){
//         if(i % 3 == 0 && i % 5 !== 0){
//             console.log('Fizz')
//         }else if(i % 5 === 0 && i % 3 !==0){
//             console.log('Buzz')
//         }else if(i % 3 === 0 && i % 5 === 0 ){
//             console.log('FizzBuzz')
//         }else{
//             console.log(i)
//         }
//         }
//
// }
// handleFunc()

