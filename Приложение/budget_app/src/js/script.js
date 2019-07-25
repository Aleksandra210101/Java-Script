let buttonStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'), 
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money, 
    time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

buttonStart.addEventListener('click', function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function(){
    var sum = 0;
    for (let i =  0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
        && a != '' && b != '' && a.length < 50  ){
            appData.expenses[a]=b;
            sum += +b;
        }    
        else {
            i = i - 1;
        }   
    }
    expenses.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let answer = optionalExpensesItem[i].value;
        appData.optionalExspenses[i] = answer;
        optionalexpenses.textContent += appData.optionalExspenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget- +expenses.textContent)/30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
        if (appData.budget > 2000){
            level.textContent = 'У вас высокий уровень заработка';
        } else if ( appData.budget < 2000 && appData.budget>1000){
            level.textContent  = 'У вас средний уровень заработка';
        } else if (appData.budget < 1000){
            level.textContent  = 'У вас низкий уровень заработка';
        }else {
            level.textContent  = "Ошибочка...!";
        }
    } else{
        dayBudget.textContent = 'Ошиииибочка...';
    }
});


incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(',');
    income.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.saving == true){
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});


sumValue.addEventListener('input', function(){
    if (appData.saving == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
});

percentValue.addEventListener('input', function(){
    if (appData.saving == true){
        if (appData.saving == true){
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
            }
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExspenses : {},
    income: [],
    saving: false,
    
}
// for (let item in appData){
//     alert('Наша программа включает в себя данные: ' + item + ' : '+ appData.item);
// };


