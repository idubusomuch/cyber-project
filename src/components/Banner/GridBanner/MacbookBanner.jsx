import { Link } from 'react-router-dom';

import Button from '@components/common/Button';
import MacbookAir from '@images/Webp/MacBookPro14.webp';

export default function MacbookBanner() {
  return (
    <div
      className={`bg-[#ededed] w-full h-full px-4 py-14 text-center flex flex-col items-center lg:grid lg:grid-cols-2 lg:content-center lg:justify-between lg:px-0 lg:text-left`}
    >
      <img
        src={MacbookAir}
        alt="mobile img"
        className="m-auto w-[60%] lg:hidden"
      />
      <div className="flex flex-col gap-4 items-center lg:pl-10 lg:items-start">
        <h2 className="text-[4em] tracking-tight leading-none font-thin">
          Macbook <b>Air</b>
        </h2>
        <p className="text-[#909090] pb-4">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <Link to={'/products'}>
          <Button btnColor="white" className="mt-4">
            Shop Now
          </Button>
        </Link>
      </div>
      <div className="hidden lg:block overflow-hidden">
        <img
          src={MacbookAir}
          alt="pc img"
          className="h-[540px] w-auto object-left object-cover"
        />
      </div>
    </div>
  );
}
