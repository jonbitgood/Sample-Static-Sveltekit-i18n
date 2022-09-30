import { locale } from '$lib/translations';
import {currentLocale} from '$lib/store.js'

export const handle = async ({ event, resolve }) => {

	locale.set(currentLocale.get());

	return resolve(event);
};