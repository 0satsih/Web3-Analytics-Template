<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let chart_data: Array<Object>;

	let canvas: any;

	const data = {
		datasets: [
			{
				label: '1',
				data: chart_data,
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'SWAP_VOLUME_USD'
				},
				borderColor: ['#F4A261']
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					x: {
						type: 'time',
						time: {
							unit: 'day'
						},
						reverse: false,
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						grid: {
							display: false
						}
					},
					y: {
						title: {
							display: true,
							text: 'Price (USD)',
							font: {
								size: 15,
								family: "'Quicksand', 'sans-serif"
							},
							color: 'black',
							padding: 10
						},
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						ticks: {
							callback: function (value) {
								return '$' + value;
							}
						}
					}
				},
				elements: {
					point: {
						pointStyle: false
					},
					line: {
						fill: false
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
						callbacks: {
							title: function (context) {
								if (context[0].label.length == 26) {
									return context[0].label.substring(0, 11);
								} else {
									return context[0].label.substring(0, 12);
								}
							},
							label: function (context) {
								let label = context.dataset.label || '';

								if (label) {
									label += ': ';
								}
								if (context.parsed.y !== null) {
									label += new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD'
									}).format(context.parsed.y);
								}
								return label;
							}
						},
						padding: 10,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6
					}
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
					axis: 'x'
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
