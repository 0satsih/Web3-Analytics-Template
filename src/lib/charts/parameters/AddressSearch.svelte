<script lang="ts">
	import { Search, Button } from 'flowbite-svelte';
	import { address } from '$lib/stores/stores'

</script>

<form>
<Search bind:value={$address} size="md" placeholder="Enter Address"	>
	<Button class="my-2">Search Validator</Button>
</Search>
<div class="text-white p4">{$address}</div>
</form>

