import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Container from "../components/products/Container";
import { fetchProduct, fetchSpecificProduct } from "../shared/api/axios";
import { filterProduct, filterProductName } from "../shared/helpers/filter";
import { Product } from "../shared/helpers/interface";

function Products() {
	const [filter, setFilter] = useState<boolean>(false);
	const [dataset, setData] = useState<Product[][]>();
	const [name, setName] = useState();
	let dataNames : any = []
	let dataProduct: any = [];


	useEffect(() => {
		try {
			async function fetchFunction() {
				const res = await fetchProduct();
				const responseName = await filterProductName(res);
				responseName?.map(async (product: string) => {
					const response = await filterProduct(product, res);
					dataProduct?.push(response);
				});
			}
			fetchFunction().then((e) => {
				setData(dataProduct);
				setName(dataNames);
			});
		} catch (err) {
			console.error(err);
		}
	}, []);
	const onClickHandler = () => {
		setFilter(!filter);
	};

	return (
		<div className='h-screen overflow-y-auto w-screen xl:grid grid-cols-5 px-4 py-10'>
			<button
				className='xl:hidden block absolute right-10 top-8 z-[100] p-1'
				onClick={onClickHandler}>
				<img src='assets/icons/menu.svg' className='inline' />
			</button>
			<div
				className={`col-span-1 xl:block ${
					filter ? `absolute right-10 mt-16` : "hidden"
				} xl:relative z-[100]`}>
				<div className='w-[228px] h-[288px] bg-darkBlack rounded-[15px] mx-auto px-8 py-4 filters'>
					<div className='flex flex-col justify-between h-10'>
						<h1 className='text-[20px] font-[300] text-[#A5A5A5]'>Filters</h1>
						<hr />
					</div>
					<div className='h-36 my-8 flex flex-col justify-between'>
						<Dropdown text={'Products'} data={'product_name'}/>
						<Dropdown text={'State'} data={'state'}/>
						<Dropdown text={'City'} data={'city'}/>
					</div>
				</div>
			</div>
			<div className='col-span-4 z-0'>
				<h1 className='text-[35px] font-[700] drop-shadow-3xl pl-4'>Edvora</h1>
				<br />
				<h2 className='text-[25px] font-[500] drop-shadow-3xl opacity-50 pl-4'>
					Products
				</h2>
				<div className='h-[80%] w-full flex flex-col justify-between pt-4'>
					{dataset?.map((ele, index) => {
						return <Container ele={ele} name={ele[0]?.product_name} key={index}/>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Products;
