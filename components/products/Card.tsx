import React from "react";

const Card = () => {
	return (
		<div className='w-[22%] bg-background rounded-[4.68775px] p-4'>
			<div className='h-[60%]'>
				<div className='float-left'>
					<img src='assets/images/profile.svg' className='h-full' />
				</div>
				<div className='float-right flex flex-col py-0.5 justify-between'>
					<span className='text-[15px] font-[400]'>Product Name</span>
					<span className='text-[13px] font-[400] opacity-60'>Brand Name</span>
					<span className='text-[13px] font-[400]'>$ 23.8</span>
				</div>
      </div>
			<div className='mt-2'>
				<div className='text-white opacity-60 font-[400] flex flex-row justify-between'>
					<span className='text-[13px]'>Location</span>
					<span className="text-left text-[12px]">Date:<span className='text-[13px] font-[500] font-sfRound'>10:12:2021</span>
					</span>
				</div>
        <div>
          <span className="text-white opacity-60 text-[11px]">Description of the Product / Item</span>
        </div>
			</div>
		</div>
	);
};

export default Card;
