import dayjs from "dayjs";
import React from "react";
import { Product } from "../../shared/helpers/interface";

const Card = (props: any) => {
	return (
		<div className='w-[217px] h-[150px] bg-background rounded-[4.68775px] p-4 hover:scale-[1.10] z-[100] my-[1.5rem] mx-[1.5rem]'>
			<div className='h-[60%]'>
				<div className='float-left w-[40%]'>
					<img src='assets/images/profile.svg' className='h-full w-max' />
				</div>
				<div className='float-right flex flex-col py-0.5 justify-between w-[55%]'>
					<div className='text-[15px] font-[400] overflow-clip text-ellipsis'>{props.product.product_name}</div>
					<div className='text-[13px] font-[400] opacity-60'>{props.product.brand_name}</div>
					<div className='text-[13px] font-[400]'>$ {props.product.price}</div>
				</div>
			</div>
			<div className='mt-2'>
				<div className='text-white opacity-60 font-[400] flex flex-row justify-between'>
					<div className='text-[13px] w-[48%] overflow-clip text-ellipsis'>{props.product.address.state}</div>
					<div className='text-left text-[12px]'>
						Date:
						<span className='text-[13px] font-[500] font-sfRound w-[48%]'>
							{dayjs(props.product.date).format('DD:MM:YY')}
						</span>
					</div>
				</div>
				<div>
					<span className='text-white opacity-60 text-[11px]'>
						{props.product.discription}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
