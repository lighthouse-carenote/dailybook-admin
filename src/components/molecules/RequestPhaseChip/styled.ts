import styled from 'styled-components';

interface ColorProps {
  color: 'selected' | 'unselected';
}

interface ButtonProps extends ColorProps {
  width: number;
  height: number;
}

interface TextProps extends ColorProps {
  marginLeft: number;
}

export const RequestPhaseChip = styled.div<ButtonProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;
  background-color: ${({ color }) => (color === 'selected' ? 'var(--grey900)' : 'var(--white)')};
  ${({ color }) =>
    color === 'unselected' &&
    `border: 1px solid var(--border01);
     box-sizing: border-box;`}
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerContainer = styled.div<ColorProps>`
  margin: ${({ color }) => (color === 'unselected' ? 12 : 13)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberContainer = styled.div<ColorProps>`
  width: 24px;
  height: 24px;
  background: ${({ color }) => (color === 'selected' ? 'var(--white)' : 'var(--grey900)')};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberText = styled.div<ColorProps>`
  margin-top: 2px;
  height: 20px;
  color: ${({ color }) => (color === 'selected' ? 'var(--textBlack)' : 'var(--white)')};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

export const Text = styled.div<TextProps>`
  margin-top: 1px;
  height: 23px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ color }) => (color === 'selected' ? 'var(--white)' : 'var(--textBlack)')};
`;
