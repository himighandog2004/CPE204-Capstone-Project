import { writable } from 'svelte/store';

export const patientCount = writable<number>(0);
export const doctorCount = writable<number>(0);
