<script lang="ts">
	import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';
	import Brand from '../Brand/Brand.svelte';
</script>

<div class="bg-surface-100-800-token">
	<div class="w-full max-w-7xl mx-auto">
		<AppBar background="transparent">
			<svelte:fragment slot="lead"><Brand /></svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</div>
</div>
