import styled from 'styled-components';
import { Icon24x24 } from '~/globalStyles';

interface ButtonProps {
  width: number;
  height: number;
  borderradius: number;
  color:
    | 'primary'
    | 'white'
    | 'black'
    | 'ghost'
    | 'grey'
    | 'ghost-primary'
    | 'payment-gradient'
    | 'grey50'
    | 'grey50-with-primary-font-color'
    | 'grey50-with-grey900-border'
    | 'ghost-hover-black'
    | 'ghost-border01'
    | 'chat-send'
    | 'light-primary';
  disabled?: boolean;
  leftIcon?: any;
  leftActiveIcon?: any;
  rightIcon?: any;
  rightActiveIcon?: any;
  fontSize: number;
  fontWeight?: number;
}

export const LeftIcon = styled(Icon24x24)`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const RightIcon = styled(Icon24x24)`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Button = styled.div<ButtonProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderradius }) => borderradius}px;
  font-weight: ${({ color, disabled, fontWeight }) => {
    if (disabled) {
      return 700;
    } else if (fontWeight) {
      return fontWeight;
    } else {
      return color === 'primary' || color === 'black' || color === 'ghost-primary' ? 'bold' : 500;
    }
  }};
  color: ${({ color, disabled }) => {
    if (disabled) {
      if (color === 'primary') {
        return 'var(--white)';
      } else {
        return 'var(--textGrey)';
      }
    } else {
      if (color === 'ghost-primary' || color === 'grey50-with-primary-font-color') {
        return 'var(--primary)';
      } else if (color === 'payment-gradient' || color === 'chat-send') {
        return 'var(--white)';
      } else if (color === 'ghost-hover-black') {
        return 'var(--textBlack)';
      } else if (color === 'light-primary') {
        return 'var(--primary)';
      }
      return color === 'primary' || color === 'black' ? 'var(--white)' : 'var(--textBlack)';
    }
  }};
  background-color: ${({ color, disabled }) => {
    if (disabled) {
      if (color === 'ghost') {
        return 'var(--grey100)';
      } else {
        return 'var(--grey400)';
      }
    } else {
      if (color === 'white' || color === 'ghost-hover-black' || color === 'ghost-border01') {
        return 'var(--white)';
      } else if (color === 'black') {
        return 'var(--grey900)';
      } else if (color === 'primary') {
        return 'var(--primary)';
      } else if (color === 'grey') {
        return 'var(--grey100)';
      } else if (color === 'grey50' || color === 'grey50-with-grey900-border' || color === 'grey50-with-primary-font-color') {
        return 'var(--grey50)';
      } else if (color === 'chat-send') {
        return 'var(--tintPrimary05)';
      } else if (color === 'light-primary') {
        return 'var(--tintPrimary08)';
      }
    }
  }};
  ${({ color }) => color === 'payment-gradient' && 'background: linear-gradient(101.75deg, #00E9A2 7.03%, #8567FF 88.23%);'}
  box-sizing: ${({ color, disabled }) =>
    ((color === 'ghost' || color === 'ghost-primary' || color === 'grey50-with-grey900-border') && !disabled) ||
    (disabled && color === 'ghost')
      ? 'border-box'
      : ''};
  border: ${({ color, disabled }) => {
    if (
      (color === 'ghost' && !disabled) ||
      (color === 'ghost-hover-black' && !disabled) ||
      color === 'grey50-with-grey900-border'
    ) {
      return '1px solid var(--grey900)';
    } else if (color === 'ghost-primary') {
      return '1px solid var(--primary)';
    } else if (color === 'ghost' && disabled) {
      return '1px solid var(--grey600)';
    } else if (color === 'ghost-border01') {
      return '1px solid var(--border01)';
    } else {
      return 'none';
    }
  }};
  & > ${LeftIcon} {
    background-image: url(${({ leftIcon }) => leftIcon});
  }
  & > ${RightIcon} {
    background-image: url(${({ rightIcon }) => rightIcon});
  }
  &:hover {
    background-color: ${({ color, disabled }) => {
      if (!disabled) {
        if (color === 'white') {
          return 'var(--whiteHover)';
        } else if (color === 'primary') {
          return 'var(--shadePrimary02)';
        } else if (color === 'ghost') {
          return 'rgba(0, 0, 0, 0.08)';
        } else if (color === 'grey') {
          return 'var(--grey300)';
        } else if (color === 'ghost-hover-black') {
          return 'var(--grey900)';
        } else if (color === 'black') {
          return 'var(--grey700)';
        } else if (color === 'ghost-primary') {
          return 'var(--tintPrimary08)';
        } else if (color === 'grey50' || color === 'grey50-with-primary-font-color' || color === 'grey50-with-grey900-border') {
          return 'var(--grey100)';
        } else if (color === 'light-primary') {
          return 'var(--tintPrimary05)';
        }
      }
    }};
    ${({ color }) => color === 'ghost-hover-black' && 'color: var(--white);'}
  }
  &:active {
    border: ${({ color }) => {
      if (color === 'ghost-primary') {
        return '1px solid var(--shadePrimary03)';
      }
    }};
    background-color: ${({ color, disabled }) => {
      if (!disabled) {
        if (color === 'white') {
          return 'var(--grey100)';
        } else if (color === 'primary') {
          return 'var(--shadePrimary04)';
        } else if (color === 'ghost') {
          return 'rgba(0, 0, 0, 0.6)';
        } else if (color === 'chat-send') {
          return 'var(--primary)';
        } else if (color === 'black') {
          return 'var(--grey800)';
        } else if (color === 'ghost-primary') {
          return 'var(--tintPrimary08)';
        } else if (color === 'grey50' || color === 'grey50-with-primary-font-color' || color === 'grey50-with-grey900-border') {
          return 'var(--grey200)';
        } else if (color === 'light-primary') {
          return 'var(--shadePrimary03)';
        }
      }
    }};
    color: ${({ color, disabled }) => {
      if (!disabled) {
        if (
          color === 'white' ||
          color === 'grey' ||
          color === 'grey50' ||
          color === 'ghost-border01' ||
          color === 'grey50-with-grey900-border'
        ) {
          return 'var(--textBlack)';
        } else if (color === 'ghost-primary') {
          return 'var(--shadePrimary03)';
        } else if (color === 'grey50-with-primary-font-color') {
          return 'var(--primary)';
        } else {
          return 'var(--white)';
        }
      }
    }};
    & > ${LeftIcon} {
      background-image: url(${({ leftActiveIcon, leftIcon }) => (leftActiveIcon ? leftActiveIcon : leftIcon)});
    }
    & > ${RightIcon} {
      background-image: url(${({ rightActiveIcon, rightIcon }) => (rightActiveIcon ? rightActiveIcon : rightIcon)});
    }
  }
`;
