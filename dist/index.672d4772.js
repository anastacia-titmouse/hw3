console.log("Task 2");
let number = 0;
do number = parseInt(prompt("\u0427\u0438\u0441\u043B\u043E!", 0));
while (isNaN(number));
let subtrahend = 0;
do subtrahend = parseInt(prompt("\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u043D\u044F\u0442\u044C?", 0));
while (isNaN(subtrahend));
let addNum = 0;
do addNum = parseInt(prompt("\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044C?", 0));
while (isNaN(addNum));
let multipler = 0;
do multipler = parseInt(prompt("\u041D\u0430 c\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u043C\u043D\u043E\u0436\u0438\u0442\u044C?", 0));
while (isNaN(subtrahend));
let divider = 1;
let isDividerValid = true;
do {
    divider = parseInt(prompt("\u041D\u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C?", 1));
    isDividerValid = !isNaN(divider) && divider !== 0;
}while (!isDividerValid);
const result = (number - subtrahend + addNum) * multipler / divider; //не 110
console.log(`((((${number} - ${subtrahend}) + ${addNum}) * ${multipler}) / ${divider} = ${result})`);
console.log("Task 3");
for(let i = 1, j = 6, str = ""; i <= j; i++){
    str += "#";
    console.log(str);
}

//# sourceMappingURL=index.672d4772.js.map
