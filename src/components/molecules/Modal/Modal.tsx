import React from 'react';
import Button from '~/components/atoms/Button';
import * as S from './styled';

export interface ModalProps {
  width: 374 | 478 | 580;
  height: 320 | 388 | 360 | 540;
  margin: 20 | 40;
  btnWidth: 162 | 334 | 398 | 500;
  btnHeight: 56;
  btnRadius: 4 | 6;
  btnChildren: React.ReactElement | string;
  btnOnClick?: React.MouseEventHandler<HTMLDivElement>;
  titleMarginTop?: 20 | 30;
  titleChildren?: React.ReactElement | string;
  contentsChildren?: React.ReactElement | string;
}

const Modal: React.FC<ModalProps> = ({
  width,
  height,
  margin,
  btnWidth,
  btnHeight,
  btnRadius,
  btnOnClick,
  btnChildren,
  titleMarginTop = 20,
  titleChildren,
  contentsChildren,
}) => {
  return (
    <S.Container width={width} height={height}>
      <S.InnerContainer height={height} margin={margin}>
        {(
          <S.TitleContentsContainer>
            <S.Title marginTop={titleMarginTop}>{titleChildren}</S.Title>
            <S.Contents>{contentsChildren}</S.Contents>
          </S.TitleContentsContainer>
        ) || <div></div>}
        <Button onClick={btnOnClick} width={btnWidth} height={btnHeight} borderradius={btnRadius} color={'black'}>
          {btnChildren}
        </Button>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Modal;
