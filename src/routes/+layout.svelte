<script>
  import { browser } from '$app/environment';
  import { loadTranslations, locale } from '$lib/translations';
  import {currentLocale} from '$lib/store.js'

export const load = async ({ url }) => {
	const { pathname } = url;

	let defaultLocale = 'en';
	if (browser && currentLocale.get()) {
		defaultLocale = currentLocale.get();
	}

	const initLocale = locale.get() || defaultLocale;
	await loadTranslations(initLocale, pathname);
	return {};
};

</script>

<slot />
