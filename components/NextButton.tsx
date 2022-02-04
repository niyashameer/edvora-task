import React, { useImperativeHandle } from 'react';

const NextButton = React.forwardRef((props, ref) => {
    const onClickHandler = () => {
        document.getElementById('horizontal-list')!.scrollLeft += 250;
        console.log('hi')
    };
    useImperativeHandle(ref,() => ({
       onClickHandler
    }))
  return (<div
  className='absolute -right-10 top-36 cursor-pointer'
  onClick={onClickHandler}>
  <img src='assets/icons/next.svg' />
</div>);
});

export default NextButton;