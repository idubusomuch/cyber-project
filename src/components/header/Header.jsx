import { Logo } from '@components/common/Logo';

import { Burger } from './Burger';
import { HeaderIcons } from './HeaderIcons';
import { SearchBar } from './SearchBar';

function Header() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex items-center">
          <Logo />
          <SearchBar />
        </div>
        <HeaderIcons />
        <Burger />
      </nav>
    </div>
  );
}

export default Header;
