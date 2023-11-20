import styled from 'styled-components';

interface ContainerProps {
  width: number;
  height: number;
  phaseColor: 'black' | 'white';
}

interface NumberProps {
  phaseColor: 'black' | 'white';
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ phaseColor }) => (phaseColor === 'white' ? 'var(--white)' : 'var(--grey900)')};
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.div<NumberProps>`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  ${({ phaseColor }) => phaseColor === 'black' && 'color: var(--white);'}
`;
