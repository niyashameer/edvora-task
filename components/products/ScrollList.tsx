import React from "react";
import Card from "./Card";

const ScrollList = React.forwardRef((props, ref) => {
  return (
    <div className='relative mt-2 h-[202px] bg-darkBlack w-full rounded-[15px] row-span-4 flex flex-row justify-between overflow-x-scroll overflow-y-hidden whitespace-nowrap'>
      <div className='relative w-[95%] flex flex-row justify-between overflow-x-scroll overflow-y-hidden whitespace-nowrap z-[50] flex-nowrap card-horizontal transition-all duration-150' id="horizontal-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
});

export default ScrollList;
