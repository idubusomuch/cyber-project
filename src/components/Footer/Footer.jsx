import FooterIcons from './FooterIcons';
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';
import FooterRight from './FooterRight';

function Footer() {
  return (
    <footer className="bg-black">
      <div className=" flex flex-col text-center md:flex-row md:text-left gap-10 px-4 py-10 [&>div]:px-8 mx-auto max-w-[1200px] ">
        <FooterLeft />
        <FooterMiddle />
        <FooterRight />
      </div>
      <FooterIcons />
    </footer>
  );
}

export default Footer;
