<script>
	import { locale } from '$lib/translations';
	import { currentLocale } from '$lib/store'

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Espanol' }
	];

	$: selected = locale.get();

	const handleOnChange = () => {
		currentLocale.set(selected)
		locale.set(selected);
	};
</script>

{$currentLocale}

<select bind:value={selected} on:change={handleOnChange}>
	{#each languages as language}
		<option value={language.code}>{language.name}</option>
	{/each}
</select>