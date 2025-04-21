import Cart from '@icons/32px/Cart.svg';
import Favorites from '@icons/32px/Favorites.svg';
import User from '@icons/32px/User.svg';

export function HeaderIcons() {
  return (
    <div className="hidden md:flex gap-3">
      <img src={Favorites} alt="찜" />
      <img src={Cart} alt="장바구니" />
      <img src={User} alt="마이페이지" />
    </div>
  );
}
