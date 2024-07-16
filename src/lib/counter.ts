import {writable} from 'svelte/store';

export 	type DesertItem = {
	image: { thumbnail: string; mobile: string; tablet: string; desktop: string };
	name: string;
	category: string;
	price: number;
}

export type DesertCartItem = {
	thumbnail: string,
	name: string;
	category: string;
	price: number;
	qty: number
}

export function createCounter() {
	const {subscribe, update} = writable(0);

	return {
		subscribe,
		increment: () => update((n)  => n + 1)
	}
}

export function createCart() {
	const {subscribe, update} = writable<DesertCartItem[]>([]);

	return {
		subscribe,
		addToList: (desert: DesertItem) => {
			update((item) => {
				item.push({name: desert.name, category: desert.category, thumbnail: desert.image.thumbnail, price: desert.price, qty: 1});

				return item;
			})
		},
		updateQty: (name: string, qty: number) => {
			update((items) => {
				return items.map(item => {
					if(item.name == name) {
						item.qty = item.qty + qty;
					}

					return item;
				})
			})
		},
		removeQty: (name: string, qty: number) => {
			update((items) => {

				const quantityCheck = items.filter(item => item.name === name && item.qty === 1).length > 0;

				if(quantityCheck) {
					return items.filter(item => {
						return item.name !== name
					})
				}

				return items.map(item => {
					if(item.name === name) {
						item.qty = item.qty - qty;
					}

					return item;
				})
			})
		}
	}
}