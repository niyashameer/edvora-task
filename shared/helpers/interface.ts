export interface ProductName {
	product_name: string;
}

export interface Product {
	product_name?: string;
	brand_name?: string;
	price?: number;
	address?: {
		state?: string;
		city?: string;
	};
	discription?: string;
	date?: string;
	time?: string;
	image?: string;
}
