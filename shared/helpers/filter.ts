import { Product } from "./interface";

export const filterProductName = async (res: [Product]) => {
	try {
		let new_Arr: string[] = [];
		await [
			...new Set(
				res.map((item: any) => {
					item.product_name;
					new_Arr.push(item.product_name);
				})
			),
		];
		const arr: string[] = [...new Set(new_Arr)];
		return arr;
	} catch (err) {
		console.error(err);
	}
};
export const filterStateName = async (res: [Product]) => {
	try {
		let new_Arr: string[] = [];
		await [
			...new Set(
				res.map((item: any) => {
					item.state;
					new_Arr.push(item.address.state);
				})
			),
		];
		const arr: string[] = [...new Set(new_Arr)];
		return arr;
	} catch (err) {
		console.error(err);
	}
};
export const filterCityName = async (res: [Product]) => {
	try {
		let new_Arr: string[] = [];
		await [
			...new Set(
				res.map((item: any) => {
					item.city;
					new_Arr.push(item.address.city);
				})
			),
		];
		const arr: string[] = [...new Set(new_Arr)];
		return arr;
	} catch (err) {
		console.error(err);
	}
};
export const filterProduct = async (
	product_name: string | string[] | undefined,
	res: [Product]
) => {
	try {
		const response = res;
		const arr = response.filter(
			(item: any) => item.product_name === product_name
		);
		return arr;
	} catch (err) {
		console.error(err);
	}
};
export const filterState = async (
	res: [Product],
	state: string | string[] | undefined
) => {
	try {
		const response = res;
		const arr = response.filter((item: any) => item.address.state === state);
		return arr;
	} catch (err) {
		console.error(err);
	}
};
export const filterCity = async (
	res: [Product],
	city: string | string[] | undefined
) => {
	try {
		const response = res;
		const arr = response.filter((item: any) => item.address.city === city);
		return arr;
	} catch (err) {
		console.error(err);
	}
};
