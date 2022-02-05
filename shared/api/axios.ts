import axios from "axios";
import { Product } from "../helpers/interface";
import API_ENDPOINTS, { API_BASE_URL } from "./constants";

export const fetchProduct = async () => {
	try {
		const res = await axios.get(API_BASE_URL);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const fetchSpecificProduct = async (product_name: string) => {
	try {
		const res = await axios.get(API_BASE_URL);
		console.log(res.data
			.filter((item: any) => item.product_name === product_name))
		const arr:[Product] = res.data
			.filter((item: any) => item.product_name === product_name)
			.map((filteredProduct: any) => {
				filteredProduct;
			});
		console.log(arr);
		return arr;
	} catch (err) {
		console.error(err);
	}
};
