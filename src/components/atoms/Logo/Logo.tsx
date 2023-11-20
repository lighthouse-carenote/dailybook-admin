import React from 'react';
import * as S from './styled';

export interface LogoProps {
  to: string;
  business?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Logo: React.FC<LogoProps> = ({ to, business, onClick }) => {
  return <S.Background to={to} business={business} onClick={onClick}></S.Background>;
};

export default Logo;
