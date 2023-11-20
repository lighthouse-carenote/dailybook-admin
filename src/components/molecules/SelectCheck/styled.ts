import styled from 'styled-components';
import checkIcon from '~/assets/icons/select_checked_icon.svg';
import unCheckIcon from '~/assets/icons/select_unchecked_icon.svg';

interface SelectCheckContainerProps {
  width: number;
  height: number;
  border: 0 | 1;
  state: boolean;
}

interface SelectCheckProps {
  textColor: 'primary' | 'black';
  fontSize: number;
  fontLineHeight: number;
  fontWeight: number;
}

export const Container = styled.div<SelectCheckContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: var(--white);
  border: ${({ border }) => border}px solid ${({ state }) => (state ? 'var(--primary)' : 'var(--border01)')};
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background: var(--whiteHover);
  }
`;

export const SelectCheck = styled.input<SelectCheckProps>`
  display: none;
  margin: 0;
  padding: 0;
  & + label::before {
    content: '';
    padding-right: 34px;
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;
    background-image: url(${unCheckIcon});
  }
  &:checked + label::before {
    background-image: url(${checkIcon});
  }
  & + label {
    cursor: pointer;
    font-style: normal;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: ${({ fontLineHeight }) => fontLineHeight}px;
    text-align: center;
    color: ${({ textColor }) => (textColor === 'primary' ? 'var(--primary)' : 'var(--textBlack)')};
  }
`;

export const Label = styled.label``;
