import { Link } from 'react-router-dom';

import LogoImg from '@icons/Logo.svg';

export function Logo() {
  return (
    <>
      <Link>
        <img src={LogoImg} alt="로고" />
      </Link>
    </>
  );
}
