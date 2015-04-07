(function() {
	// input
	var income = document.getElementById('income');
	var expense = document.getElementById('expense');

	// butttons
	var submit = document.getElementById('submitBtn');
	var clear = document.getElementById('clearBtn');
	var log = document.getElementById('logBtn');
	
	// balance
	var totalIncome = document.getElementById('totalIncome');
	var totalExpense = document.getElementById('totalExpense');
	var netIncome = document.getElementById('netIncome');

	// chart
	var ctx = document.getElementById('myChart').getContext('2d');

	// chart data
	var chartData = {
		labels: ['Expense'],

		datasets: [
			{
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28]
			}
		]
	};
	var barChart = new Chart(ctx).Bar(chartData);


	

	// default balance values
	totalIncome.innerHTML = 0;
	totalExpense.innerHTML = 0;
	netIncome.innerHTML = 0;


	
	// calculate balance functions
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