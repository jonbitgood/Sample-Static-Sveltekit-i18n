import { writable } from 'svelte/store';
import { localStore } from "$lib/localStore.js"

export const currentLocale = localStore('locale', 'en');