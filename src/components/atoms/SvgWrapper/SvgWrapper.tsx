import React from 'react';
import * as S from './styled';

interface SvgWrapperProps {
  width: number;
  height: number;
  svg: any;
  onClick?: () => void;
  style?: React.CSSProperties;
  dataAos?: string;
  dataAosDelay?: string;
  dataAosDuration?: string;
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  width = 24,
  height = 24,
  svg,
  onClick,
  style,
  dataAos,
  dataAosDelay,
  dataAosDuration,
}) => {
  return (
    <S.SvgWrapper
      width={width}
      height={height}
      svg={svg}
      onClick={onClick}
      style={style}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
    />
  );
};

export default SvgWrapper;
