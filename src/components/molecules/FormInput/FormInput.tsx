import React from 'react';
import Input from '~/components/atoms/Input';
import * as S from './styled';

export interface FormInputProps {
  width: number;
  containerHeight: number;
  inputHeight: number;
  borderradius: 0 | 4 | 6 | 8;
  inputName: string;
  placeholder?: string;
  title?: string;
  titleFontSize?: number;
  isError?: boolean;
  isConfirm?: boolean;
  confirmMsg?: string;
  errorMsg?: string;
  msgFontSize?: number;
  msgFontLineHeight?: number;
  fontSize?: number;
  fontLineHeight?: number;
  disabled?: boolean;
  rightContentsText?: string;
  rightContentsIcon?: any;
  rightContentsTop?: number;
  rightContentsLeftMargin?: number;
  leftContentsIcon?: any;
  leftContentsTop?: number;
  leftContentsRightMargin?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: string;
  betweenSpace?: number;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  outBorderwidthOnFocus?: number;
  bordercolorOnFocus?: 'primary' | 'black';
}

const FormInput: React.FC<FormInputProps> = ({
  width,
  containerHeight,
  inputHeight,
  borderradius,
  inputName,
  disabled,
  title,
  titleFontSize = 16,
  errorMsg,
  confirmMsg,
  isConfirm,
  isError,
  placeholder,
  rightContentsText,
  rightContentsIcon,
  rightContentsTop,
  rightContentsLeftMargin,
  leftContentsIcon,
  leftContentsTop,
  leftContentsRightMargin,
  msgFontSize = 15,
  msgFontLineHeight = 24,
  fontSize,
  fontLineHeight,
  onChange,
  value,
  type,
  betweenSpace = 0,
  onBlur,
  onFocus,
  onKeyDown,
  outBorderwidthOnFocus = 0,
  bordercolorOnFocus = 'black',
}) => {
  return (
    <S.InputContainer width={width} height={containerHeight} betweenSpace={betweenSpace}>
      {title && <S.Title fontSize={titleFontSize}>{title}</S.Title>}
      <Input
        bordercolorOnFocus={bordercolorOnFocus}
        outBorderwidthOnFocus={outBorderwidthOnFocus}
        type={type}
        width={width}
        height={inputHeight}
        inputName={inputName}
        borderradius={borderradius}
        disabled={disabled}
        isConfirm={isConfirm}
        isError={isError}
        placeholder={placeholder}
        fontSize={fontSize}
        fontLineHeight={fontLineHeight}
        rightContentsText={rightContentsText}
        rightContentsIcon={rightContentsIcon}
        rightContentsTop={rightContentsTop}
        rightContentsLeftMargin={rightContentsLeftMargin}
        leftContentsIcon={leftContentsIcon}
        leftContentsRightMargin={leftContentsRightMargin}
        leftContentsTop={leftContentsTop}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {errorMsg && (
        <S.ErrMsg msgFontSize={msgFontSize} msgFontLineHeight={msgFontLineHeight}>
          {errorMsg}
        </S.ErrMsg>
      )}
      {confirmMsg && (
        <S.ConfirmMsg msgFontSize={msgFontSize} msgFontLineHeight={msgFontLineHeight}>
          {confirmMsg}
        </S.ConfirmMsg>
      )}
    </S.InputContainer>
  );
};

export default FormInput;
