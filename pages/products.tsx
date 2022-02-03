import React from "react";
import Dropdown from "../components/Dropdown";
import Container from "../components/products/Container";

function products() {
	return (
		<div className='h-screen w-full grid grid-cols-5 px-4 py-10'>
			<div className='col-span-1'>
				<div className='w-[78%] h-[38%] bg-darkBlack rounded-[15px] mx-auto px-8 py-4 filters'>
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
			<div className='col-span-4'>
				<h1 className='text-[35px] font-[700] drop-shadow-3xl pl-4'>Edvora</h1>
				<br />
				<h2 className='text-[25px] font-[500] drop-shadow-3xl opacity-50 pl-4'>
					Products
				</h2>
				<div className='h-[80%] flex flex-col justify-between pt-4'>
					<Container />
					<Container />
				</div>
			</div>
		</div>
	);
}

export default products;
