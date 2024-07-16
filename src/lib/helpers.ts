export const formatCurreny = (value: number) => {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

export interface ModuleImportInterface {
	default: {
		img: {
			h: number;
			src: string;
			w: number;
		};
		sources: {
			avif: string;
			jpeg: string;
			webp: string;
		};
	};
}