import Logo from '@icons/Logo.svg';

export default function FooterLeft() {
  return (
    <div className="footer-left">
      <img
        src={Logo}
        alt="로고"
        className="mx-auto filter invert pb-4 md:mx-0"
      />
      <p className="text-[#cfcfcf] text-sm">
        We are a residential interior design firm located in Portland. Our
        boutique-studio offers more than
      </p>
    </div>
  );
}
