"use strict";

const obj = {
    name: 'Dima',
    surname: 'Zheleznyakov',
    yaer: 21,
};

obj.numbers = 44;

console.log(obj.numbers);



// alert('asd');

// let result = confirm('Are you here?');
// console.log(result);


// let answer = +prompt("Сколько вам лет?", "18");
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt("Ваше имя?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);




// let userName = 'ivan';
// alert(`hello ${userName}`);


// let links = 'work';
// console.log(`https:hh.kz/${links}/5`);



console.log('Dima' + ' Zheleznyakov');


let incr = 10,
    decr = 10;

incr++; //инкримент - добавление на одно число
decr--; //декримент - убавления на одно число


// когда ставим ++ спереди, называются "префиксными" а когда после то "постксные"
// префиксная форма сразу выдает значение в убавленным числом или добавленым, постксные сначала выдает
// стандарт. выражения потом работает с -+
++incr;
--decr;

console.log(incr);
console.log(decr);

// оператор % выдает остаток после деления
console.log(5%2);


// ===     жесткое равенство с учетом типов данных
// ==      равенство например 2*2 == 4   - true

// и
// && 
// или
// || 

const isChecked = true,
      isClose = false;
console.log(isChecked || isClose); 
// &&  - выдает true если оба значения верны 
// || выдает true если хотя бы одно значения не верно
// аргумент отрицания - "!"  если isClose - false, то !isClose будет true  
