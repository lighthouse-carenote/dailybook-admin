import styled from 'styled-components';
import checkIcon from '~/assets/icons/check_grey_checked_icon.svg';
import checkHoverIcon from '~/assets/icons/check_grey_hover_icon.svg';
import { Icon24x24 } from '~/globalStyles';

interface ContainerProps {
  width: number;
  height: number;
  checked: boolean;
}

export const SelectCheck = styled(Icon24x24)`
  margin-right: 10px;
`;

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  &:hover ${SelectCheck} {
    background-image: url(${({ checked }) => (checked ? checkIcon : checkHoverIcon)});
  }
`;
