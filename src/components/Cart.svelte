<script lang="ts">
	import IconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg';
	import IconRemoveItem from '../assets/images/icon-remove-item.svg';
	import IllustrationEmptyCart from '../assets/images/illustration-empty-cart.svg';
	import { formatCurreny } from '$lib/helpers';
	import type { DesertCartItem } from '../stores/cartStore';

	export let cart: DesertCartItem[];
	export let orderTotal: number = 0;

	export let showConfirmDialog: () => void;

	export let removeFromCart: (cartItem: DesertCartItem) => void;
</script>

<div class="grid p-4 py-6 rounded-md bg-white w-full">
	<h2 class="text-red font-bold text-xl pb-3">Your cart ({cart.length})</h2>

	{#if cart.length > 0}
		<div class="grid mb-2">
			{#each cart as cartItem}
				<div class="flex justify-between items-center border-b border-rose-100 py-2">
					<div>
						<p class="text-sm font-semibold pb-2">{cartItem.name}</p>
						<div class="flex gap-2">
							<p class="text-xs font-semibold text-red">{cartItem.qty}x</p>
							<p class="text-xs text-rose-400">
								@ {formatCurreny(cartItem.price)}
								<span class="font-semibold">{formatCurreny(cartItem.price * cartItem.qty)}</span>
							</p>
						</div>
					</div>
					<button
						class="border-rose-400 border rounded-full hover:border-rose-900 w-5 p-1 size-5"
						on:click={(event) => {
							event.preventDefault();

							removeFromCart(cartItem);
						}}
					>
						<img src={IconRemoveItem} alt="Remove item from cart" />
					</button>
				</div>
			{/each}
		</div>

		<div class="flex justify-between items-center">
			<p>Order Total</p>
			<h4 class="font-bold text-xl">{formatCurreny(orderTotal)}</h4>
		</div>
		<div class="py-3 px-4 bg-rose-50 flex gap-2 my-3">
			<img src={IconCarbonNeutral} alt="Carbon neutral" />
			<p class="text-xs">This is a <span class="font-semibold">carbon-neutral</span> delivery</p>
		</div>

		<button
			on:click={(event) => {
				event.preventDefault();

				showConfirmDialog();
			}}
			class="w-full py-2 px-4 gap-6 rounded-full text-sm font-semibold bottom-[-1.2rem] text-white bg-red min-w-36 hover:bg-red-dark"
		>
			Confirm Order
		</button>
	{:else}
		<img src={IllustrationEmptyCart} class="mx-auto" alt="Empty cart illustration" />
		<p class="text-center text-sm text-rose-500">Your added items will appear here</p>
	{/if}
</div>
