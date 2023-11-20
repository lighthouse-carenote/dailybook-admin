import React from 'react';
import * as S from './styled';

export interface InputProps {
  width: number;
  height: number;
  borderradius: 0 | 4 | 6 | 8;
  bordercolor?: 'grey100';
  backgroundcolor?: 'grey50';
  inputName: string;
  rightContentsText?: string;
  rightContentsIcon?: any;
  rightContentsTop?: number;
  rightContentsLeftMargin?: number;
  leftContentsIcon?: any;
  leftContentsTop?: number;
  leftContentsRightMargin?: number;
  fontSize?: number;
  fontLineHeight?: number;
  placeholder?: string;
  isError?: boolean;
  isConfirm?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  outBorderwidthOnFocus?: number;
  bordercolorOnFocus?: 'primary' | 'black';
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  borderradius,
  bordercolor,
  backgroundcolor,
  rightContentsText,
  rightContentsIcon,
  rightContentsTop,
  rightContentsLeftMargin,
  leftContentsIcon,
  leftContentsTop,
  leftContentsRightMargin,
  inputName,
  disabled,
  isError,
  isConfirm,
  fontSize = 18,
  fontLineHeight = 28,
  placeholder,
  onChange,
  value,
  type = 'text',
  onBlur,
  onFocus,
  onKeyDown,
  outBorderwidthOnFocus = 0,
  bordercolorOnFocus = 'black',
}) => {
  return (
    <S.InputContainer width={width}>
      {leftContentsIcon && leftContentsTop && <S.LeftContentsIcon top={leftContentsTop} icon={leftContentsIcon} />}
      <S.Input
        bordercolor={bordercolor}
        backgroundcolor={backgroundcolor}
        bordercolorOnFocus={bordercolorOnFocus}
        outBorderwidthOnFocus={outBorderwidthOnFocus}
        type={type}
        width={width}
        height={height}
        name={inputName}
        borderradius={borderradius}
        disabled={disabled}
        isError={isError}
        isConfirm={isConfirm}
        placeholder={placeholder}
        leftContentsRightMargin={leftContentsRightMargin}
        rightContentsLeftMargin={rightContentsLeftMargin}
        fontSize={fontSize}
        fontLineHeight={fontLineHeight}
        value={value}
        onChange={onChange}
        autoComplete={'off'}
        onWheel={(e) => e.currentTarget.blur()}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {rightContentsIcon && rightContentsTop && <S.RightContentsIcon top={rightContentsTop} icon={rightContentsIcon} />}
      {rightContentsText && rightContentsTop && <S.RightContents top={rightContentsTop}>{rightContentsText}</S.RightContents>}
    </S.InputContainer>
  );
};

export default Input;
