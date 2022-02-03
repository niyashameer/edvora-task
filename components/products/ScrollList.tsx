import React from 'react';
import Card from './Card';

const ScrollList = () => {
  return <div className='mt-2 bg-darkBlack w-[full] rounded-[15px] row-span-4 flex flex-row py-[1.5rem] px-[1.5rem] justify-between'>
    <div className='w-[95%] flex flex-row justify-between'>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  </div>;
};

export default ScrollList