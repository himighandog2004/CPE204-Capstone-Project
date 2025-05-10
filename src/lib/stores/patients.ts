import { writable } from 'svelte/store';

export const patients = writable<any[]>([]);

export {};
