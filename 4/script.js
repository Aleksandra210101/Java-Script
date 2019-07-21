'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
}





let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExspenses : {},
    income: [],
    saving: true,
    chooseExpenses: function(){
        for (let i =  0; i < 2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?');
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
            && a != '' && b != '' && a.length < 50  ){
                appData.expenses[a]=b;
            }       
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.budget > 2000){
            alert('У вас высокий уровень заработка');
        } else if ( appData.budget < 2000 && appData.budget>1000){
            alert('У вас средний уровень заработка');
        } else if (appData.budget < 1000){
            alert('У вас низкий уровень заработка');
        }else {
            console.log ("Ошибочка...!");
        }
    },
    checkSaving: function(){
        if (appData.saving == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент? ");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let answer = prompt('Статья необязательных расходов? ');
            optionalExspenses.i = answer;
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
        while (items == "" || items == null){
            items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
        }
        appData.income = items.split(',');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        appData.income.forEach(function (item){
            alert('Дополнительные способы заработка:' + item);
        })
    }
}

for (let item in appData){
    alert('Наша программа включает в себя данные: ' + item + ' : '+ appData.item);
};