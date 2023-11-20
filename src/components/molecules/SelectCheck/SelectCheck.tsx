import React from 'react';
import * as S from './styled';

export interface SelectCheckProps {
  width: number;
  height: number;
  text: string;
  textColor?: 'primary' | 'black';
  inputName: string;
  border?: 0 | 1;
  checked?: boolean;
  fontSize?: number;
  fontLineHeight?: number;
  fontWeight?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectCheck: React.FC<SelectCheckProps> = ({
  onClick,
  border = 1,
  textColor = 'black',
  width,
  height,
  inputName,
  fontSize = 20,
  fontLineHeight = 30,
  fontWeight = 500,
  text,
  checked,
}) => {
  return (
    <S.Container width={width} height={height} state={!!checked} onClick={onClick} border={border}>
      <S.SelectCheck
        fontSize={fontSize}
        fontLineHeight={fontLineHeight}
        fontWeight={fontWeight}
        textColor={textColor}
        name={inputName}
        id={text}
        type="checkbox"
        value={text}
        checked={checked}
        readOnly
      />
      <S.Label onClick={(e) => e.preventDefault()} htmlFor={text}>
        {text}
      </S.Label>
    </S.Container>
  );
};

export default SelectCheck;
