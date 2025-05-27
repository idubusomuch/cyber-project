import Button from '@components/common/Button';
import PcImg from '@images/Iphone.png';
import MobileImg from '@images/IphoneMobileImage.png';

function TopBanner() {
  return (
    <div className="bg-[#211c24]">
      <div className="pt-22 text-center text-white flex-center flex-col md:flex-row md:max-w-[1200px] md:m-auto md:h-[632px] md:justify-between md:px-6 md:gap-10 md:overflow-hidden">
        <div className="flex items-center flex-col pt-20 px-4 gap-6 md:items-start md:gap-4 md:text-left">
          <h3 className="text-[#909090] font-semibold text-[2em]">
            Pro.Beyond.
          </h3>
          <h1 className="text-[4em] tracking-tight leading-none font-thin md:text-[5em] lg:text-[6em]">
            IPhone 14 <b className="font-bold">Pro</b>
          </h1>
          <p className="text-[#909090] pb-5">
            Created to Change everything for the better. For everyone
          </p>
          <Button btnColor="transparent">Shop Now</Button>
        </div>
        <img
          src={MobileImg}
          alt="iphone mobile banner img"
          className="bottom-0 w-[80%] max-w-[500px] mt-14 md:hidden"
        />
        <img
          src={PcImg}
          alt="iphone pc banner img"
          className="hidden max-w-[400px] top-0 self-start md:block md:pt-20"
        />
      </div>
    </div>
  );
}

export default TopBanner;
