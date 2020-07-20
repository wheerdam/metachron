import { writable } from "svelte/store";

export const token = writable(localStorage.getItem("token") || '');
token.subscribe(value => {
	localStorage.setItem("token", value);
});

export const api_server = writable(localStorage.getItem("api_server") || 'http://localhost:8080/api');
api_server.subscribe(value => {
	localStorage.setItem("api_server", value);
});
