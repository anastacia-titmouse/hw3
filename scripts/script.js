//Task 1
let dog = 'true';
let parrot = false;
let age = 17;
let flowers = undefined;
let tortoise = null;
let dogType = typeof dog;
let parrotType = typeof parrot;
let ageType = typeof age;
let flowersType = typeof flowers;
let tortoiseType = typeof tortoise;
console.log(dogType, parrotType, ageType, flowersType, tortoiseType);

//Task 2
let height = 15;
let width = 20;

if (height > width){
    console.log(height)
}
else if (width > height) {
    console.log(width)
}

//Task 3
for (let i = 1; i < 20; i++) {
    if (i % 3 == 0){
        console.log(i)
    }
}
//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork); 

//Task 5
let number = +prompt('Enter any number');
if (number % 5 == 0){
    console.log('Fiz');
}
if(number % 3 == 0){
    console.log('Buz');
}
if(number % 3 == 0 && number % 5 == 0){
    console.log('FizBuz');
}
else{
    console.log('No match');
}

//Task 6
let yourAge = prompt('How old are you?');
if(yourAge >= 18){
    console.log(`Попей пивка`);
}
else if(yourAge >= 16 && yourAge < 18){
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
}
else{
    console.log(`Пей колу`);
}

//Task 7
let direction = prompt('В какую сторону светы Вы бы хотели отправиться?');
console.log(direction);

switch (direction) {
    case 'юг':
        alert('На юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('Theres nothing to catch');
}

//Advansed Task 1

let name = 'пОлИнА нАбЕрЕжНаЯ';
console.log(name.toLowerCase());

//Task 2


//Task 3
console.log('Task 3');
for (let i=1, j=6, str = ''; i<=j; i++) {
    str += '#';
    console.log(str);
}

