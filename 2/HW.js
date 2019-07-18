'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формату YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExspenses : {},
    income: [],
    saving: false
}


for (let i =  0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?');
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
    && a != '' && b != '' && a.length < 50  ){
        appData.expenses[a]=b;
    }
    
}


// let i = 0;
// while (i < 2){
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
//     && a != '' && b != '' && a.length < 50  ){
//     appData.expenses[a]=b;
// }
//     i++;
// }






// let i = 0;
// do{
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
//     && a != '' && b != '' && a.length < 50  ){
//         appData.expenses[a]=b;
//     }else {
//          console.log ("bad result");
//          i--;
//     }
//     i++;
// } while (i < 2);




appData.moneyPerDay = appData.budget /30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 &&  appData.moneyPerDay < 2000){
    console.log('Средний  уровень достатка');
} else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');

} else {
    console.log('Ошибка');
}
