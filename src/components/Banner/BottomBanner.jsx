import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@components/common/Button';
import MobileImg from '@images/bottomBannerMobile.png';
import PcImg from '@images/bottomBannerPc.png';

export default function BottomBanner() {
  return (
    <div className="w-full flex-center">
      <img
        src={MobileImg}
        alt="mobile banner img"
        className="w-full h-full md:hidden"
      />
      <img
        src={PcImg}
        alt="pc banner img"
        className="hidden max-h-[500px] object-cover md:w-full md:block"
      />

      <div className="absolute text-white flex-center flex-col gap-4 md:max-w-[1200px] md:m-auto md:justify-between md:gap-0">
        <h1 className="text-[3.5em] font-thin lg:text-[5em] 2xl:text-[6em]">
          Big Summer <b>Sale</b>
        </h1>
        <p className="text-[#909090] font-thin text-[1.2em] pb-5">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <Link to={'/products'}>
          <Button btnColor="transparent">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}
