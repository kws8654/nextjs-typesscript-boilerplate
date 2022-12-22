import React from 'react';
import { RingLoader } from 'react-spinners';

export const PageLoadingModal = () => {
  return (
    <section className='inset-center flex flex-col justify-center gap-10 items-center w-full h-full bg-gray-50 bg-opacity-80 z-20'>
      <RingLoader color='#000000' />
      {/*<div className='text-xl'>데이터를 분석 중입니다...</div>*/}
    </section>
  );
};
