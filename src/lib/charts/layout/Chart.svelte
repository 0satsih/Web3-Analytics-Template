<script lang="ts">
	import ChartHeader from './ChartHeader.svelte';

	export let title: string;
	export let query_link: string;
	export let description: string;
</script>

<div class="border-2 border-black rounded-lg p-2 bg-white">
	<ChartHeader {title} {query_link} {description}/>
	<div class="relative flex-auto">
		<slot name="figure"><span>Figure</span></slot>
	</div>
</div>
