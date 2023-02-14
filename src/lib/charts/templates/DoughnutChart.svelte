<script lang="ts">
	
	import { onMount } from 'svelte';
	import { Tooltip } from 'chart.js';
	import Chart from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	

	Tooltip.positioners.myCustomPositioner = function (elements: any, eventPosition: any) {
		// A reference to the tooltip model
		const tooltip = this;

		/* ... */

		return {
			x: 330,
			y: 185
			// You may also include xAlign and yAlign to override those tooltip options.
		};
	};

	export let chart_data: any;

	let canvas: any;

	const data = {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		datasets: [
			{
				label: 'Amount',
				data: [11, 15, 18, 35, 99, 54, 33, 32, 23, 76],
				/**data: chart_data,
				parsing: {
					key: 'value'
				},**/
				backgroundColor: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			plugins: [ChartDataLabels],
			options: {
				maintainAspectRatio: false,
				responsive: true,
				
				datasets: {
					doughnut: {
						borderJoinStyle: 'round',
						borderRadius: 2,
						hoverBorderColor: 'gray'
					}
				},
				plugins: {
					legend: {
						display: true,
						position: 'right',
						align: 'start',
						labels: {
							usePointStyle: true,
							pointStyle: 'circle'
						}
					},
					tooltip: {
						padding: 20,
						cornerRadius: 40,
						borderColor: 'gray',
						borderWidth: 2,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6,
						xAlign: 'center',
						yAlign: 'center',
						position: 'myCustomPositioner',
						callbacks: {
							label: function (context) {
								let value: any = context.formattedValue;
								let total: any = context.dataset.data
									.map((e: any) => e)
									.reduce((a: any, b: any) => a + b, 0);
								let percentage: any = ((value / total) * 100).toFixed(2) + '%';

								return value + ' | ' + percentage;
							}
						}
					},
					datalabels: {
						formatter: function (value: any, context: any) {
							return context.chart.data.labels[context.dataIndex]; // +
						},
						display: true,
						textAlign: 'center',
						color: 'black',
						padding: {
							top: 20,
							bottom: 20
						},
						labels: {
							title: {
								font: {
									weight: 'bold',
									family: "'Quicksand', 'sans-serif"
								}
							}
						}
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} class="ml-[65px] mt-4" />
