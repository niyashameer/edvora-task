import React, { useImperativeHandle } from "react";
import ScrollList from "./ScrollList";
import { useRef } from "react";
import NextButton from "../NextButton";

const Container = () => {
	const scrollList = useRef(null);
	const next = useRef(null);
	
	return (
		<div className='relative w-[90%] h-[47%] grid grid-rows-5'>
			<div className='row-span-1 flex flex-col justify-between my-2 pl-4 w-full'>
				<h1 className='font-[400] text-[20px] w-max'>Product Name</h1>
				<hr />
			</div>

			<ScrollList ref={scrollList}/>
			<NextButton ref={next}/>
		</div>
	);
};

export default Container;
