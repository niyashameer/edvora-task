import React from "react";
import { Product } from "../../shared/helpers/interface";
import Card from "./Card";

const WrappedComponent = React.forwardRef(
	function ScrollList(props: any, ref) {
		return (
			<div className='relative mt-2 h-[202px] bg-darkBlack w-full rounded-[15px] row-span-4 flex flex-row justify-between overflow-x-scroll overflow-y-hidden whitespace-nowrap'>
				<div
					className='relative w-[95%] flex flex-row justify-between overflow-x-scroll overflow-y-hidden whitespace-nowrap z-[50] flex-nowrap card-horizontal transition-all duration-150'
					id='horizontal-list'>
					{props.data.map((product: any, index: number) => (
						<Card product={product} key={index}/>
					))}
				</div>
			</div>
		); 
	}
);

export default WrappedComponent;
