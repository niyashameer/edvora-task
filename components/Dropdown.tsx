import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchProduct } from "../shared/api/axios";
import {
	filterCityName,
	filterProductName,
	filterStateName,
} from "../shared/helpers/filter";

const Dropdown = (props: any) => {
	const [visible, setVisible] = useState<string>("hidden");
	const [data, setData] = useState([""]);
	const [state, setState] = useState([""]);
	const [city, setCity] = useState([""]);
	let dataProduct: any = [];
	let dataState: any = [];
	let dataCity: any = [];
	const Router = useRouter();
	const onClickHandler = () => {
		visible === "hidden" ? setVisible("block") : setVisible("hidden");
	};

	useEffect(() => {
		try {
			async function fetchFunction() {
				const res = await fetchProduct();
				const responseName = await filterProductName(res);
				responseName?.map(async (product: string) => {
					const response = product;
					dataProduct?.push(response);
				});
				const responseState = await filterStateName(res);
				responseState?.map(async (product: string) => {
					const response = product;
					console.log(response);
					dataState?.push(response);
				});

				const responseCity = await filterCityName(res);
				responseCity?.map(async (product: string) => {
					const response = product;
					dataCity?.push(response);
				});
			}
			fetchFunction().then((e) => {
				setData(dataProduct);
				setState(dataState);
				setCity(dataCity);
			});
		} catch (err) {
			console.error(err);
		}
	}, []);

	const onSubmitHandler = (e: any) => {
		Router.push({
			pathname: '/products',
			query: {
				name: e.target.name,
				value: e.target.value
			}
		})
	}

	return (
		<div className='relative'>
			<button
				className='w-full h-10 bg-background rounded-[4.68px] flex items-center justify-between px-4'
				onClick={onClickHandler}>
				<div className='text-white font-[400] text-[17px]'>{props.text}</div>
				<div className=''>
					<img src='assets/vectors/dropdown.svg' />
				</div>
			</button>
			<div
				className={`${visible} transition-all duration-150 delay-150 absolute z-[100] w-full bg-background py-2 px-2 my-2 rounded-sm h-28 overflow-y-scroll drop-shadow-light`}>
				{props.data === "product_name" &&
					data?.map((ele: any, index) => (
						<button
							className='transition-all duration-150 text-[15px] font-[300] hover:bg-white hover:text-darkBlack px-2 my-1 rounded-sm cursor-pointer w-[100%] text-left'
							key={index} onClick={onSubmitHandler} value={ele} name="product-name">
							{ele}
						</button>
					))}
				{props.data === "state" &&
					state?.map((ele: any, index) => (
						<button
							className='transition-all duration-150 text-[15px] font-[300] hover:bg-white hover:text-darkBlack px-2 my-1 rounded-sm cursor-pointer w-[100%] text-left'
							key={index} onClick={onSubmitHandler} value={ele} name="state">
							{ele}
						</button>
					))}
				{props.data === "city" &&
					city?.map((ele: any, index) => (
						<button
							className='transition-all duration-150 text-[15px] font-[300] hover:bg-white hover:text-darkBlack px-2 my-1 rounded-sm cursor-pointer w-[100%] text-left'
							key={index} onClick={onSubmitHandler} value={ele} name="city">
							{ele}
						</button>
					))}
			</div>
		</div>
	);
};

export default Dropdown;
