<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { formatCurreny, type ModuleImportInterface } from '$lib/helpers';
	import type { DesertCartItem, DesertItem } from '../stores/cartStore';

	import IconCart from '../assets/images/icon-add-to-cart.svg';
	import IconDecrement from '../assets/images/icon-decrement-quantity.svg';
	import IconIncrement from '../assets/images/icon-increment-quantity.svg';

	const imageModules = import.meta.glob('../assets/images/*.jpg', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, ModuleImportInterface>;

	export let desertItem: DesertItem;
	export let cart: DesertCartItem[];
	export let handleIncrement: (cartItem: DesertItem) => void;
	export let handleDecrement: (cartItem: DesertItem) => void;
	export let handleAddToList: (cartItem: DesertItem) => void;
</script>

<div>
	<div class="relative mb-8">
		<div
			class={twMerge(
				'img rounded-lg overflow-hidden',
				cart.filter((item) => item.name == desertItem.name).length > 0
					? 'border-[3px] border-red'
					: ''
			)}
		>
			<picture>
				{#if imageModules[`.${desertItem.image.tablet}`]}
					<source
						media="(max-width: 799px)"
						srcset={imageModules[`.${desertItem.image.mobile}`].default.sources.webp}
					/>
					<source
						media="(min-width: 800px)"
						srcset={imageModules[`.${desertItem.image.desktop}`].default.sources.webp}
					/>
					<img
						src={imageModules[`.${desertItem.image.tablet}`].default.sources.webp}
						alt={desertItem.name}
					/>
				{/if}
			</picture>
			{#if cart.filter((item) => item.name == desertItem.name).length === 0}
				<button
					on:click={() => {
						if (cart.filter((item) => item.name == desertItem.name).length === 0) {
							handleAddToList(desertItem);
						} else {
							handleIncrement(desertItem);
						}
					}}
					class="absolute py-2 px-4 gap-2 rounded-full bottom-[-1.2rem] flex justify-between items-center bg-white left-2/4 -translate-x-1/2 min-w-36 border-rose-500 hover:border-red text-sm font-semibold hover:text-red border"
				>
					<img src={IconCart} alt="Add to cart icon" />
					Add to cart
				</button>
			{:else}
				<div
					class="absolute py-2 px-4 gap-6 rounded-full bottom-[-1.2rem] text-sm font-semibold flex justify-between items-center text-white bg-red left-2/4 min-w-36 -translate-x-1/2"
				>
					<button
						on:click={() => {
							handleDecrement(desertItem);
						}}
						aria-label="Remove quantity"
					>
						<img
							src={IconDecrement}
							class="border-white border rounded-full w-5 p-1 size-5 hover:bg-rose-200"
							alt="Remove quantity"
						/>
					</button>
					{cart.filter((item) => item.name == desertItem.name)[0].qty}
					<button
						on:click={() => {
							handleIncrement(desertItem);
						}}
						aria-label="Add quantity"
					>
						<img
							src={IconIncrement}
							class="border-white border rounded-full w-5 p-1 size-5 hover:bg-rose-200"
							alt="Add quantity"
						/>
					</button>
				</div>
			{/if}
		</div>
	</div>

	<div class="grid">
		<p class="text-sm text-rose-500">{desertItem.category}</p>
		<h2 class="text-xl text-rose-900 font-bold">{desertItem.name}</h2>
		<p class="text-red font-semibold mb-4">{formatCurreny(desertItem.price)}</p>
	</div>
</div>
