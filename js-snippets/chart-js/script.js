//! Chart.js Visualization Examples

// Bar Chart: Monthly Sales Data
const ctxBar = document.getElementById("barChart");
new Chart(ctxBar, {
	type: "bar",
	data: {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Sales",
				data: [150, 200, 250, 220, 290, 270],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			title: { display: true, text: "Monthly Sales Data" },
			legend: { display: true, position: "top" },
		},
		scales: {
			x: { display: true, title: { display: true, text: "Month" } },
			y: {
				display: true,
				title: { display: true, text: "Sales (units)" },
			},
		},
	},
});

// Line Chart: Monthly Average Temperatures
const ctxLine = document.getElementById("lineChart");
new Chart(ctxLine, {
	type: "line",
	data: {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
		],
		datasets: [
			{
				label: "Temperature",
				data: [30, 35, 33, 40, 38, 42, 45],
				fill: true,
				backgroundColor: "rgba(250, 129, 47, 0.2)",
				borderColor: "rgba(250, 129, 47, 1)",
				tension: 0.1,
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Monthly Average Temperatures in 2024",
			},
			legend: { display: true, position: "top" },
		},
		scales: {
			x: { display: true, title: { display: true, text: "Month" } },
			y: {
				display: true,
				title: { display: true, text: "Temperature (°C)" },
			},
		},
	},
});

// Pie Chart: Favorite Ice Cream Flavors
const ctxPie = document.getElementById("pieChart");
new Chart(ctxPie, {
	type: "pie",
	data: {
		labels: [
			"Vanilla",
			"Chocolate",
			"Strawberry",
			"Mint Chocolate Chip",
			"Cookie Dough",
		],
		datasets: [
			{
				label: "Number of Votes",
				data: [25, 35, 20, 15, 5],
				backgroundColor: [
					"rgba(246, 239, 189, 0.3)",
					"rgba(181, 159, 120, 0.2)",
					"rgba(255, 99, 132, 0.2)",
					"rgba(0, 106, 103, 0.2)",
					"rgba(251, 210, 136, 0.2)",
				],
				borderColor: [
					"rgba(246, 239, 189, 1)",
					"rgba(181, 159, 120, 1)",
					"rgba(255, 99, 132, 1)",
					"rgba(0, 106, 103, 1)",
					"rgba(251, 210, 136, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			title: { display: true, text: "Favorite Ice Cream Flavors" },
		},
	},
});

// Polar Area Chart: Average Person Daily Activity
const ctxPolar = document.getElementById("polarChart");
new Chart(ctxPolar, {
	type: "polarArea",
	data: {
		labels: [
			"Eating",
			"Drinking",
			"Sleeping",
			"Working",
			"Exercise",
			"Relaxing",
		],
		datasets: [
			{
				label: "Activity Distribution",
				data: [20, 30, 20, 40, 30, 10],
				backgroundColor: [
					"rgba(250, 129, 47, 0.5)",
					"rgba(246, 239, 189, 0.5)",
					"rgba(251, 210, 136, 0.5)",
					"rgba(0, 106, 103, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(255, 99, 132, 0.5)",
				],
				borderColor: [
					"rgba(250, 129, 47, 1)",
					"rgba(246, 239, 189, 1)",
					"rgba(251, 210, 136, 1)",
					"rgba(0, 106, 103, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 99, 132, 1)",
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			title: { display: true, text: "Average Person Daily Activity" },
		},
	},
});
