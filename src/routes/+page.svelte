<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import Introduction from '$lib/layout/Introduction.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	import BarChart from '$lib/charts/templates/BarChart.svelte';
	import GroupedBarChart from '$lib/charts/templates/GroupedBarChart.svelte';
	import HorizontalBarChart from '$lib/charts/templates/HorizontalBarChart.svelte';
	import LineChart from '$lib/charts/templates/LineChart.svelte';
	import DoughnutChart from '$lib/charts/templates/DoughnutChart.svelte';
	import ScatterChart from '$lib/charts/templates/ScatterChart.svelte';
	import Table from '$lib/charts/templates/Table.svelte';

	export let data: PageData;

	let view: string = 'Go to Swaps on Avalanche Summary';

	function handleClick() {
		if (view == 'Go to Swaps on Avalanche Summary') {
			view = 'Go to Swaps on Osmosis Summary';
		} else {
			view = 'Go to Swaps on Avalanche Summary';
		}
	}
</script>

<body>
	<div class="flex justify-center 2xl:mx-96 3xl:mx-[550px]">
		<div class="grid grid-cols-9 gap-2">
			<div class="col-start-2	col-span-7">
				<Header />
			</div>
			<div class="row-start-2 col-start-2 col-span-7">
				<Introduction />
			</div>
			<div class="row-start-3 col-start-2 col-span-7">
				<Table title={'Table'} query_link={'https://next.flipsidecrypto.xyz/satsih'} />
			</div>
			<div class="row-start-4 col-start-3 col-span-5 grid grid-cols-1 gap-y-2">
				<div>
					<Chart title={'Bar Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<BarChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart title={'Horizontal Bar Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<HorizontalBarChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart title={'Grouped Bar Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<GroupedBarChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart title={'Line Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<LineChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart title={'Doughnut Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<DoughnutChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart title={'Scatter Chart'} query_link={'https://next.flipsidecrypto.xyz/satsih'}>
						<div class="h-96" slot="figure">
							<ScatterChart chart_data={data.TIMESERIES} />
						</div>
					</Chart>
				</div>
			</div>
		</div>
	</div>
</body>
