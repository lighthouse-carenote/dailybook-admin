import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export interface ButtonProps {
  width: number;
  height: number;
  borderradius: 0 | 4 | 6 | 8;
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
  children: React.ReactElement | string;
  btnLinkinize?: boolean;
  target?: '_blank' | '_parent' | '_self' | '_top';
  fontSize?: number;
  fontWeight?: number;
  to?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  leftIcon?: any;
  leftActiveIcon?: any;
  rightIcon?: any;
  rightActiveIcon?: any;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  width,
  height,
  borderradius,
  color,
  disabled,
  to = '',
  btnLinkinize = false,
  target,
  leftIcon,
  leftActiveIcon,
  rightIcon,
  rightActiveIcon,
  fontSize = 16,
  style,
  fontWeight,
}) => {
  const props = {
    style,
    draggable: false,
    onClick: (e) => {
      if (onClick && !disabled) {
        onClick(e);
      }
    },
    width,
    height,
    borderradius,
    fontSize,
    fontWeight,
    color,
    disabled,
    leftIcon,
    leftActiveIcon,
    rightIcon,
    rightActiveIcon,
  };
  if (btnLinkinize) {
    props['as'] = Link;
    props['target'] = target;
    props['to'] = to;
  }
  return (
    <S.Button {...props}>
      {leftIcon && <S.LeftIcon icon={leftIcon} />}
      {children}
      {rightIcon && <S.RightIcon icon={rightIcon} />}
    </S.Button>
  );
};

export default Button;
