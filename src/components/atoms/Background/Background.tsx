import React from 'react';
import * as S from './styled';

export interface BackgroundProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactElement;
  backgroundRef?: React.RefObject<HTMLDivElement>;
}

const Background: React.FC<BackgroundProps> = ({ backgroundRef, onClick, children }) => {
  return (
    <S.Background ref={backgroundRef} onClick={onClick}>
      {children}
    </S.Background>
  );
};

export default Background;
