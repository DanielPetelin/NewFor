//Первый цикл будет складывать все елементы массива.
var num = [1, 3, 2, 5, 6];
summa = 0;
for (var i = 0; i < num.length; i++) {
    summa += num[i];
}
console.log(summa);

//Цикл, которыйй считает сумму квадратов элементов массива.
var num = [1, 3, 2, 5, 6];
summa = 0;
for (var i = 0; i < num.length; i++) {
    summa += num[i] * num[i];
}
console.log(summa);

//Цикл, который считает среднее орифметическое массива.
var num = [1, 3, 2, 5, 6];
summa = 0;
for (var i = 0; i < num.length; i++) {
    summa += num[i] / num.length;
}
console.log(summa);

//Цикл, который выводит "есть", если в массиве присутствует цифра 5.
var num = [1, 3, 2, 5, 6];
for (var i = 0; i < num.length; i++) {
    if(num[i] == 5) {
        console.log('Есть!');
        break;
    }
}

var numb = [10, 30, 2, 50, 6, 9];
for (var i = 0; i < numb.length; i++) {
    if (numb[i] > 0 && numb[i] < 10) {
        console.log(numb[i]);
    }
}