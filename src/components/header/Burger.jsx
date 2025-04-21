import BurgerIcon from '@icons/40px/Burger.svg';

export function Burger() {
  return (
    <img
      src={BurgerIcon}
      alt="햄버거메뉴"
      className="cursor-pointer md:hidden"
    />
  );
}
