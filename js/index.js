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

	// chart
	var ctx = document.getElementById('myChart').getContext('2d');

	// chart data
	var chartData = {
		labels: ['hello', 'blah'],

		datasets: [
			{
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: ['30', '40', '200', '300']
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

	// chartData functions
	function pushExpenseToChart() {
		// get labels
		var expenseContainer = document.getElementById('expenseContainer');
		var labels = expenseContainer.getElementsByTagName('label');

		// push 'labels' to chartData.labels
		var pushLabels = function() {
			for(var i = 0;i < labels.length; i++) {
				chartData.labels.push(labels[i].getAttribute('for'));
				console.log(chartData.labels);
			}

		updateChart();
		};

		pushLabels();
	}

	// update chart
	function updateChart() {
		barChart.update();
	}


	// submit form event listener
	submit.addEventListener('click', function(e) {
		// prevent page from refreshing
		e.preventDefault();
		
		// invoke calc functions
		calcIncome();
		calcExpense(); 
		calcNetIncome();

		pushExpenseToChart();
	});

})();