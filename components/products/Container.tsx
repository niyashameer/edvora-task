import React from "react";
import ScrollList from "./ScrollList";

const Container = () => {
	return (
		<div className='w-[90%] h-[250px] grid grid-rows-5'>
			<div className='row-span-1 flex flex-col justify-between my-2 pl-4'>
				<h1 className='font-[400] text-[20px]'>Product Name</h1>
				<hr />
			</div>

			<ScrollList />
		</div>
	);
};

export default Container;
