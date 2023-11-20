import styled from 'styled-components';

interface ContainerProps {
  width: number;
  height: number;
  phaseColor: 'white' | 'black';
}

interface PhaseTextProps {
  leftMargin: number;
  phaseColor: 'white' | 'black';
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  box-sizing: border-box;
  padding: ${({ phaseColor }) => (phaseColor === 'white' ? 11 : 12)}px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ phaseColor }) => (phaseColor === 'white' ? 'var(--white)' : 'var(--grey900)')};
  ${({ phaseColor }) => phaseColor === 'white' && 'border: 1px solid var(--border01);'}
`;

export const PhaseText = styled.div<PhaseTextProps>`
  margin-top: 1px;
  margin-left: ${({ leftMargin }) => leftMargin}px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ phaseColor }) => (phaseColor === 'white' ? 'var(--textBlack)' : 'var(--white)')};
`;
