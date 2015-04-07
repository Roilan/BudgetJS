(function() {
	// form inputs
	var income = document.getElementById('income');

	var misc = document.getElementById('misc');
	var spotify = document.getElementById('spotify');

	// butttons
	var submit = document.getElementById('submitBtn');
	var clear = document.getElementById('clearBtn');
	var log = document.getElementById('logBtn');
	
	// balance
	var totalIncome = document.getElementById('totalIncome');
	var totalExpense = document.getElementById('totalExpense');
	var netIncome = document.getElementById('netIncome');

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
		var miscVal = misc.value;
		var spotifyVal = spotify.value;

		// calculate expense
		var total = miscVal - spotifyVal;

		// set expense in HTML
		totalExpense.innerHTML = total;

		return total;
	}

	function calcNetIncome() {
		// invoke calcIncome and calcExpense
		var netIncomeVal = calcIncome() - calcExpense();

		// set net income in HTML
		netIncome.innerHTML = netIncomeVal;

		//return netIncomeVal;
	}

	// submit form event listener
	submit.addEventListener('click', function(e) {
		// prevent page from refreshing
		e.preventDefault();
		
		// invoke calc functions
		calcIncome();
		calcExpense(); 
		calcNetIncome();
	});


	// log
	var logBtn = document.getElementById('logBtn');

	logBtn.addEventListener('click', function(e) {
		e.preventDefault();

	});
})();