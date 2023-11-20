import React from 'react';
import * as S from './styled';

export interface ListProps {
  width: number;
  height: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  titleChildren?: React.ReactElement | string;
  contentsChildren?: React.ReactElement | string;
  backgroundcolor?: 'white' | 'hover';
}

const List: React.FC<ListProps> = ({
  width,
  height,
  onClick,
  titleChildren,
  contentsChildren,
  backgroundcolor = 'white',
}) => {
  return (
    <S.ListContainer width={width} height={height} onClick={onClick} backgroundcolor={backgroundcolor}>
      <S.InnerContainer>
        <S.Title>{titleChildren}</S.Title>
        <S.Contents>{contentsChildren}</S.Contents>
      </S.InnerContainer>
    </S.ListContainer>
  );
};

export default List;
