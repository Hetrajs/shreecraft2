import React from 'react';
import NavbarTopBarPreview from './Navbar';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <NavbarTopBarPreview />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[25px] lg:text-[45px] font-inter text-3xl font-bold">Oops! Your cart is empty.</h1>
        <h1 className="text-[20px] lg:text-[25px] mt-2 lg:mt-7 font-inter text-3xl font-normal">Time to fill it with goodies!</h1>
        <Link to="/products" className='mt-16 font-inter font-normal text-[14px] lg:text-[20px] tracking-wide py-3 px-16 lg:py-3 lg:px-32 border-[#0066FF] border-[1.4px] rounded-[20px] text-[#0066FF] hover:bg-[#0066FF] hover:text-[#fff] duration-300'>
            Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
