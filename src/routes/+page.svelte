<script lang="ts">
	import { onMount } from 'svelte';

	import IconOrderConfirmed from '../assets/images/icon-order-confirmed.svg';
	import { cartStore, type DesertCartItem, type DesertItem } from '../stores/cartStore';
	import { formatCurreny } from '$lib/helpers';
	import Cart from '../components/Cart.svelte';
	import DesertCard from '../components/DesertCard.svelte';
	import data from '$lib/data.json';

	const cart = cartStore();

	let orderTotal = 0;

	cart.subscribe((values) => {
		orderTotal = values
			.map((item) => item.price * item.qty)
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	});

	let dialog: HTMLDialogElement; // Reference to the dialog tag
	onMount(() => {
		dialog = document.getElementById('confirmation-dialog') as HTMLDialogElement;
	});

	const removeFromCart = (cartItem: DesertCartItem) => {
		cart.removeItem(cartItem.name);
	};

	const handleAddToList = (cartItem: DesertItem) => {
		cart.addToList(cartItem);
	};
	const handleIncrement = (cartItem: DesertItem) => {
		cart.updateQty(cartItem.name, 1);
	};
	const handleDecrement = (cartItem: DesertItem) => {
		cart.removeQty(cartItem.name, 1);
	};

	const handleClear = () => {
		cart.clearCart();
	};

	const images = import.meta.glob('../assets/images/*.jpg', { eager: true });

	const desertList: DesertItem[] = data;
</script>

<h1 class="text-4xl font-bold text-rose-900 mb-6">Deserts</h1>

<div class="grid grid-cols-1 lg:grid-cols-70-30 gap-8 place-items-start">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each desertList as desert}
			<DesertCard
				cart={$cart}
				desertItem={desert}
				{handleIncrement}
				{handleDecrement}
				{handleAddToList}
			/>
		{/each}
	</div>

	<Cart
		cart={$cart}
		{orderTotal}
		{removeFromCart}
		showConfirmDialog={() => {
			dialog.showModal();
		}}
	/>

	<dialog
		class="inset-0 bg-zinc-50 rounded-lg bg-opacity-90 open:animate-fade-in open:backdrop:animate-fade-in"
		id="confirmation-dialog"
	>
		<div class="bg-white p-8">
			<img src={IconOrderConfirmed} class="pb-3" alt="confirm icon" />
			<h2 class="text-3xl font-bold">Order Confirmed</h2>
			<p class="text-rose-400 text-xs pt-2">We hope you enjoy your food!</p>

			<div class="grid mb-2 bg-rose-50 p-4 mt-2 gap-2">
				{#each $cart as cartItem}
					<div class="flex justify-between items-center border-b border-rose-100 pb-2">
						<div class="flex gap-2 items-center">
							{#await import(`.${cartItem.thumbnail}`) then { default: src }}
								<img {src} alt={cartItem.name + ' thumbnail'} class="size-8 rounded-sm" />
							{/await}
							<div>
								<p class="text-sm font-semibold pb-2">{cartItem.name}</p>
								<div class="flex gap-1">
									<p class="text-sm font-semibold text-red">{cartItem.qty}x</p>
									<p class="text-sm text-rose-400">
										@ {formatCurreny(cartItem.price)}
									</p>
								</div>
							</div>
						</div>
						<p class="font-semibold pl-6">{formatCurreny(cartItem.price * cartItem.qty)}</p>
					</div>
				{/each}
			</div>

			<form method="dialog">
				<button
					class="w-full py-2 px-4 gap-6 mt-4 rounded-full text-sm font-semibold bottom-[-1.2rem] text-white bg-red min-w-36 hover:bg-red-dark"
					formmethod="dialog"
					on:click={() => {
						handleClear();
						dialog.close();
					}}
					type="reset">Submit new Order</button
				>
			</form>
		</div>
	</dialog>
</div>
