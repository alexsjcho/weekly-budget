//Classes




//Variables
const addExpenseForm = document.querySelector('#add-expense');
let buget, userBudget;




//Event Listeners
eventListners();
function eventListeners(){

    //App Init
    document.addEventListener('DOMContentLoaded', function(){
        //Ask the vistor for the weekly budget
        userBudget = prompt('What\'s your budget for this week?');
        //Validate the userBudget
        if(userBudget === null || userBudget = '' || userBudget = '0'){
            window.location.reload();
        }
    });

    //When a new expense is added
    addExpenseForm.eventListeners('submit', function(e) {

    });
}