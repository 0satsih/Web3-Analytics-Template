<script lang="ts">
	import Grid from 'gridjs-svelte';
	import { css } from '@emotion/css';
	import { onMount } from 'svelte';
	import ChartHeader from '$lib/charts/layout/ChartHeader.svelte';

	export let title: any;
	export let query_link: any;

	//export let table_data: any;

	const columns = ['Rank', 'Address', 'Balance'];
	const data = [
		[1, 'Binance', 999999],
		[2, 'Ethereum Foundation', 999999],
		[3, 'Binance', 999999],
		[4, 'Ethereum Foundation', 999999],
		[5, 'Binance', 999999],
		[6, 'Ethereum Foundation', 999999],
		[7, 'Binance', 999999],
		[8, 'Ethereum Foundation', 999999],
		[9, 'Ethereum Foundation', 999999],
		[10, 'Binance', 999999],
		[11, 'Ethereum Foundation', 999999],
		[12, 'Ethereum Foundation', 999999],
		[13, 'Binance', 999999],
		[14, 'Ethereum Foundation', 999999]
	];
	const className = {
		container: css`
			* {
				font-family: 'Quicksand';
			}
		`,
		table: css`
			width: 100%;
			margin-top: 2px;
			tr:nth-child(even) {
				background-color: rgba(0, 0, 0, 0.1);
			};
            tr:nth-child(1) {
                width: 10px
            }
			outline: 2px solid;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			border-bottom-left-radius: 10px;
		`,
		th: css`
			background-color: #a8a29e;
			text-align: center;
			padding: 15px;
			&:nth-child(1) {
				border-top-left-radius: 10px;
			}
			&:nth-child(3) {
				border-top-right-radius: 10px;
			}
		`,
		td: css`
			text-align: center;
			padding: 7px;
            &:nth-child(1) {
                width: 1px;
            }
		`,
		header: css``
	};
    const sort = true;
    const pagination = {limit: 10};
    const fixedHeader = true;
</script>

<div class="border-2 border-stone-500 px-6 rounded-lg bg-white">
	<div class="p-2">
		<ChartHeader {title} {query_link} />
	</div>

	<div class="relative flex-auto">
		<Grid {columns} {data} {className} {fixedHeader} {pagination}/>
	</div>
</div>
