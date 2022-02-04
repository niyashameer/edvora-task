import React, { useState } from "react";

const Dropdown = () => {
	const [visible, setVisible] = useState<string>("hidden");
	const onClickHandler = () => {
		visible === "hidden" ? setVisible("block") : setVisible("hidden");
	};
	return (
		<div className='relative'>
			<button
				className='w-full h-10 bg-background rounded-[4.68px] flex items-center justify-between px-4'
				onClick={onClickHandler}>
				<div className='text-white font-[400] text-[17px]'>Products</div>
				<div className=''>
					<img src='assets/vectors/dropdown.svg' />
				</div>
			</button>
			<div
				className={`${visible} transition-all duration-150 delay-150 absolute z-[100] w-full bg-background py-2 px-2 my-2 rounded-sm h-28 overflow-y-scroll drop-shadow-light`}>
				<p className='transition-all duration-150 text-[15px] font-[300] hover:bg-white hover:text-darkBlack px-2 my-1 rounded-sm'>
					lol
				</p>
			</div>
		</div>
	);
};

export default Dropdown;
