'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
}

start();


function chooseExpenses(){
    for (let i =  0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется?');
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
        && a != '' && b != '' && a.length < 50  ){
            appData.expenses[a]=b;
        }       
    }
}

chooseExpenses();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExspenses : {},
    income: [],
    saving: true
}


function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert(appData.moneyPerDay);
}   

detectDayBudget();


function checkSaving(){
    if (appData.saving == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент? ");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
}

checkSaving();


function detectLevel(){
    if (appData.budget > 2000){
        alert('У вас высокий уровень заработка');
    } else if ( appData.budget < 2000 && appData.budget>1000){
        alert('У вас средний уровень заработка');
    } else if (appData.budget < 1000){
        alert('У вас низкий уровень заработка');
    }else {
        console.log ("Ошибочка...!");
    }
}

let optionalExspenses = {};
function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let answer = prompt('Статья необязательных расходов? ');
        optionalExspenses.i = answer;
    }
}

chooseOptExpenses();
