import styled from 'styled-components';
import selectIcon from '~/assets/icons/select_radio_select_icon.svg';
import unSelectIcon from '~/assets/icons/select_radio_unselect_icon.svg';
import { BorderRenderType } from '~/libs';

interface SelectRadioContainerProps {
  width: number;
  height: number;
  borderRenderType: BorderRenderType;
  borderradius: number;
  state: boolean;
}

interface SelectRadioProps {
  state: boolean;
}

export const Container = styled.div<SelectRadioContainerProps>`
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
  ${({ borderRenderType, state }) => {
    if (borderRenderType === BorderRenderType.BORDER) {
      return `border: 1px solid ${state ? 'var(--primary)' : 'var(--border01)'};`;
    } else {
      return `box-shadow: 0px 1px 0px var(--border01);`;
    }
  }}
  box-sizing: border-box;
  border-radius: ${({ borderradius }) => borderradius}px;
  &:hover {
    background: var(--whiteHover);
  }
`;

export const SelectRadio = styled.input<SelectRadioProps>`
  display: none;
  margin: 0;
  padding: 0;
  & + label::before {
    content: '';
    padding-right: 34px;
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;
    background-image: url(${unSelectIcon});
  }
  &:checked + label::before {
    background-image: url(${selectIcon});
  }
  & + label {
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: ${({ state }) => (state ? 'var(--primary)' : 'var(--textBlack)')};
  }
`;

export const Label = styled.label``;
