import React from 'react';
import PhaseNumber from '~/components/atoms/PhaseNumber';
import * as S from './styled';

export interface PhaseBtnInRequestProps {
  width: number;
  height: number;
  text: string;
  phase: number;
  phaseColor?: 'black' | 'white';
  textLeftMargin: number;
}

const PhaseBtnInRequest: React.FC<PhaseBtnInRequestProps> = ({
  width,
  height,
  text,
  phase,
  phaseColor = 'white',
  textLeftMargin,
}) => {
  return (
    <S.Container width={width} height={height} phaseColor={phaseColor}>
      <PhaseNumber width={24} height={24} phase={phase} phaseColor={phaseColor === 'white' ? 'black' : 'white'} />
      <S.PhaseText phaseColor={phaseColor} leftMargin={textLeftMargin}>
        {text}
      </S.PhaseText>
    </S.Container>
  );
};

export default PhaseBtnInRequest;
