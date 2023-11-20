import React from 'react';
import { BorderRenderType } from '~/libs';
import * as S from './styled';

export interface SelectRadioProps {
  width: number;
  height: number;
  borderRenderType: BorderRenderType;
  borderradius: number;
  text: string;
  inputName: string;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectRadio: React.FC<SelectRadioProps> = ({
  onClick,
  width,
  height,
  text,
  checked = false,
  inputName,
  borderRenderType,
  borderradius,
}) => {
  return (
    <S.Container
      width={width}
      height={height}
      state={!!checked}
      borderRenderType={borderRenderType}
      borderradius={borderradius}
      onClick={onClick}>
      <S.SelectRadio
        id={text}
        name={inputName}
        type="radio"
        value={text}
        checked={checked}
        state={!!checked}
        readOnly
      />
      <S.Label htmlFor={text} onClick={(e) => e.preventDefault()}>
        {text}
      </S.Label>
    </S.Container>
  );
};

export default SelectRadio;
