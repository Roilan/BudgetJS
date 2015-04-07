(function() {
	var income = document.getElementById('income');
	var expense = document.getElementById('expense');

	var submit = document.getElementById('submitBtn');
	var clear = document.getElementById('clearBtn');
	var log = document.getElementById('logBtn');
	
	var totalIncome = document.getElementById('totalIncome');
	var totalExpense = document.getElementById('totalExpense');
	var netIncome = document.getElementById('netIncome');

	// default values
	totalIncome.innerHTML = 0;
	totalExpense.innerHTML = 0;
	netIncome.innerHTML = 0;

	function calcIncome() {
		// get income values
		var incomeVal = income.value;

		// add all income values
		
		// set income in HTML
		totalIncome.innerHTML = incomeVal;

		return incomeVal;
	}

	function calcExpense() {
		// get expense values
		var expenseVal = expense.value;

		// set expense in HTML
		totalExpense.innerHTML = expenseVal;

		return expenseVal;
	}

	function calcNetIncome() {
		// invoke calcIncome and calcExpense
		var netIncomeVal = calcIncome() - calcExpense();

		// set net income in HTML
		netIncome.innerHTML = netIncomeVal;

		//return netIncomeVal;
	}

	submit.addEventListener('click', function(e) {
		// prevent page from refreshing
		e.preventDefault();
		
		// invoke calc functions
		calcIncome();
		calcExpense(); 
		calcNetIncome();
	});

})();