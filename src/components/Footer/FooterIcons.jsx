import Facebook from '@icons/16px/Facebook.svg';
import Instagram from '@icons/16px/Instagram.svg';
import Tiktok from '@icons/16px/Tiktok.svg';
import Twitter from '@icons/16px/Twitter.svg';

export default function FooterIcons() {
  return (
    <div className="flex-center gap-6 px-8 pt-2 pb-14 mx-auto [&>img]:w-6 md:[&>img]:w-4 md:gap-9 md:px-12 md:justify-start max-w-[1200px]">
      <img src={Facebook} alt="페이스북" />
      <img src={Instagram} alt="페이스북" />
      <img src={Tiktok} alt="페이스북" />
      <img src={Twitter} alt="페이스북" />
    </div>
  );
}
