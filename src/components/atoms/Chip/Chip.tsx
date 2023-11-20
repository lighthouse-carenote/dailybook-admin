import React from 'react';
import * as S from './styled';

export interface ChipProps {
  height: number;
  borderradius: 0 | 4 | 6 | 8 | 12 | 40 | 100;
  children: React.ReactElement | string;
  borderwidth: 0 | 1;
  fontweight?: 400 | 500 | 600 | 700;
  marginFromIcon?: number;
  marginFromElement?: number;
  cursor?: 'pointer' | 'default';
  leftIcon?: any;
  rightIcon?: any;
  leftElement?: React.ReactElement;
  backgroundcolor?:
    | 'white'
    | 'black'
    | 'grey50'
    | 'secondaryTint03'
    | 'tint06'
    | 'grey100'
    | 'grey200'
    | 'grey700'
    | 'visitCare'
    | 'visitBath'
    | 'visitNursing'
    | 'dnProtection'
    | 'shortProtection'
    | 'homeForMany'
    | 'homeForLittle'
    | 'payment-gradient';
  fontcolor?: 'white' | 'black' | 'grey' | 'primary';
  fontsize?: number;
  fontlineheight?: number;
  bordercolor?: 'grey' | 'primary';
  paddingSide?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  height = 32,
  borderradius = 4,
  children,
  borderwidth = 1,
  cursor = 'default',
  leftIcon,
  leftElement,
  rightIcon,
  marginFromIcon = 10,
  marginFromElement = 10,
  fontweight = 700,
  fontsize = 15,
  fontlineheight = 24,
  backgroundcolor = 'white',
  fontcolor = 'black',
  bordercolor = 'grey',
  paddingSide = 11,
  style,
  onClick,
}) => {
  return (
    <S.Container style={style} onClick={onClick}>
      <S.Chip
        paddingSide={paddingSide}
        backgroundcolor={backgroundcolor}
        cursor={cursor}
        height={height}
        borderradius={borderradius}
        borderwidth={borderwidth}
        bordercolor={bordercolor}>
        {leftIcon && <S.LeftIcon marginFromIcon={marginFromIcon} icon={leftIcon} />}
        {leftElement && <S.LeftElementWrapper marginFromElement={marginFromElement}>{leftElement}</S.LeftElementWrapper>}
        <S.ChipText fontsize={fontsize} fontlineheight={fontlineheight} fontcolor={fontcolor} fontweight={fontweight}>
          {children}
        </S.ChipText>
        {rightIcon && <S.RightIcon marginFromIcon={marginFromIcon} icon={rightIcon} />}
      </S.Chip>
    </S.Container>
  );
};

export default Chip;
