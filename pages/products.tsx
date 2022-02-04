import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Container from "../components/products/Container";

function products() {
	const [filter, setFilter] = useState<boolean>(false);
	const onClickHandler = () => {
		setFilter(!filter);
	}
	return (
		<div className='h-screen overflow-y-auto w-screen xl:grid grid-cols-5 px-4 py-10'>
			<button className="xl:hidden block absolute right-10 top-8 z-[100] p-1" onClick={onClickHandler}>
				<img src="assets/icons/menu.svg" className="inline"/>
			</button>
			<div className={`col-span-1 xl:block ${filter?`absolute right-10 mt-16`: 'hidden'} xl:relative z-[100]`}>
				<div className='w-[228px] h-[288px] bg-darkBlack rounded-[15px] mx-auto px-8 py-4 filters'>
					<div className='flex flex-col justify-between h-10'>
						<h1 className='text-[20px] font-[300] text-[#A5A5A5]'>Filters</h1>
						<hr />
					</div>
					<div className="h-36 my-8 flex flex-col justify-between">
						<Dropdown />
						<Dropdown />
						<Dropdown />
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
					<Container />
					<Container />
				</div>
			</div>
		</div>
	);
}

export default products;
