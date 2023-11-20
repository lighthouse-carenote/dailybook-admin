import React from 'react';
import * as S from './styled';

export interface PhaseNumberProps {
  phase: number;
  width: number;
  height: number;
  phaseColor?: 'black' | 'white';
}

const PhaseNumber: React.FC<PhaseNumberProps> = ({ phase, width, height, phaseColor = 'black' }) => {
  return (
    <S.Container width={width} height={height} phaseColor={phaseColor}>
      <S.Number phaseColor={phaseColor}>{phase}</S.Number>
    </S.Container>
  );
};

export default PhaseNumber;
