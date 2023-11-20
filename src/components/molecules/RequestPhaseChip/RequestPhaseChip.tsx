import React from 'react';
import * as S from './styled';

export interface RequestPhaseChipProps {
  width: number;
  height: number;
  color: 'selected' | 'unselected';
  phase: number;
  text: string;
  textMarginLeft: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const RequestPhaseChip: React.FC<RequestPhaseChipProps> = ({
  onClick,
  width,
  height,
  color,
  textMarginLeft,
  phase,
  text,
}) => {
  return (
    <S.RequestPhaseChip width={width} height={height} color={color} onClick={onClick}>
      <S.InnerContainer color={color}>
        <S.NumberContainer color={color}>
          <S.NumberText color={color}>{phase}</S.NumberText>
        </S.NumberContainer>
        <S.Text color={color} marginLeft={textMarginLeft}>
          {text}
        </S.Text>
      </S.InnerContainer>
    </S.RequestPhaseChip>
  );
};

export default RequestPhaseChip;
