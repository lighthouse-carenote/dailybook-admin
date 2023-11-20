import styled from 'styled-components';
import { Icon24x24 } from '~/globalStyles';

interface ChipProps {
  height: number;
  backgroundcolor:
    | 'white'
    | 'black'
    | 'grey50'
    | 'secondaryTint03'
    | 'tint06'
    | 'grey200'
    | 'grey100'
    | 'grey700'
    | 'visitCare'
    | 'visitBath'
    | 'visitNursing'
    | 'dnProtection'
    | 'shortProtection'
    | 'homeForMany'
    | 'homeForLittle'
    | 'payment-gradient';
  bordercolor: 'grey' | 'primary';
  borderradius: 0 | 4 | 6 | 8 | 12 | 40 | 100;
  borderwidth: 0 | 1;
  cursor: 'default' | 'pointer';
  paddingSide: number;
}

interface IconProps {
  marginFromIcon: number;
}

interface ChipTextProps {
  fontweight: number;
  fontcolor: 'white' | 'black' | 'grey' | 'primary';
  fontsize: number;
  fontlineheight: number;
}

interface ElementWrapperProps {
  marginFromElement: number;
}

export const LeftIcon = styled(Icon24x24)<IconProps>`
  display: flex;
  align-items: center;
  margin-right: ${({ marginFromIcon }) => marginFromIcon}px;
`;

export const LeftElementWrapper = styled.div<ElementWrapperProps>`
  height: 100%;
  margin-right: ${({ marginFromElement }) => marginFromElement}px;
`;

export const RightIcon = styled(Icon24x24)<IconProps>`
  display: flex;
  align-items: center;
  margin-left: ${({ marginFromIcon }) => marginFromIcon}px;
`;

export const Container = styled.div`
  display: inline-flex;
`;

export const Chip = styled.div<ChipProps>`
  padding: 0 ${({ paddingSide }) => paddingSide}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderradius }) => borderradius}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ${({ cursor }) => cursor};
  border: ${({ borderwidth, bordercolor }) => {
    if (bordercolor === 'grey') {
      return `${borderwidth}px solid var(--border01)`;
    } else if (bordercolor === 'primary') {
      return `${borderwidth}px solid var(--primary)`;
    }
  }};
  box-sizing: border-box;
  background-color: ${({ backgroundcolor }) => {
    if (backgroundcolor === 'black') {
      return 'var(--grey900)';
    } else if (backgroundcolor === 'white') {
      return 'var(--white)';
    } else if (backgroundcolor === 'grey50') {
      return 'var(--grey50)';
    } else if (backgroundcolor === 'secondaryTint03') {
      return 'var(--tintSecondaryPrimary03)';
    } else if (backgroundcolor === 'tint06') {
      return 'var(--tintPrimary06)';
    } else if (backgroundcolor === 'grey200') {
      return 'var(--grey200)';
    } else if (backgroundcolor === 'visitCare') {
      return 'var(--visitCare)';
    } else if (backgroundcolor === 'visitBath') {
      return 'var(--visitBath)';
    } else if (backgroundcolor === 'visitNursing') {
      return 'var(--visitNursing)';
    } else if (backgroundcolor === 'dnProtection') {
      return 'var(--dnProtection)';
    } else if (backgroundcolor === 'shortProtection') {
      return 'var(--shortProtection)';
    } else if (backgroundcolor === 'homeForMany') {
      return 'var(--homeForMany)';
    } else if (backgroundcolor === 'homeForLittle') {
      return 'var(--homeForLittle)';
    } else if (backgroundcolor === 'grey100') {
      return 'var(--grey100)';
    } else if (backgroundcolor === 'grey700') {
      return 'var(--grey700)';
    }
  }};
  ${({ backgroundcolor }) =>
    backgroundcolor === 'payment-gradient' && 'background: linear-gradient(101.75deg, #00E9A2 7.03%, #8567FF 88.23%);'}
`;

export const ChipText = styled.div<ChipTextProps>`
  font-style: normal;
  font-weight: ${({ fontweight }) => fontweight};
  font-size: ${({ fontsize }) => fontsize}px;
  line-height: ${({ fontlineheight }) => fontlineheight}px;
  color: ${({ fontcolor }) => {
    if (fontcolor === 'white') {
      return 'var(--white)';
    } else if (fontcolor === 'black') {
      return 'var(--textBlack)';
    } else if (fontcolor === 'grey') {
      return 'var(--textGrey)';
    } else if (fontcolor === 'primary') {
      return 'var(--primary)';
    }
  }};
`;
