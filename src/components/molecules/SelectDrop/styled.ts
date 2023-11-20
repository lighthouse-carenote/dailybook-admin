import styled from 'styled-components';

interface DropdownContainerProps {
  width: number;
  height: number;
  borderradius: number;
}

interface DropdownItemProps {
  width: number;
  height: number;
  borderradius: number;
  fontSize: 16 | 18 | 20;
  fontWeight: 400 | 700;
}

interface DropdownProps extends DropdownContainerProps {
  itemVisible: boolean;
}

interface DropdownTitleProps extends DropdownProps {
  dropdownBorderColor: 'grey200' | 'grey900' | 'border01';
  fontSize: 16 | 18 | 20;
  fontWeight: 400 | 700;
  fontColor?: 'textGrey';
  disabled: boolean;
}

export const Container = styled.div<DropdownContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const DropdownTitleArea = styled.div<DropdownTitleProps>`
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontSize }) => fontSize * 1.5}px;
  ${({ disabled }) => disabled && 'background-color: var(--grey50);'}
  ${({ disabled }) => !disabled && 'cursor: pointer;'}
  ${({ itemVisible, borderradius, dropdownBorderColor, fontColor }) => {
    if (itemVisible) {
      return `border-top-left-radius: ${borderradius}px;
              border-top-right-radius: ${borderradius}px;
              border-left: 1px solid var(--grey900);
              border-right: 1px solid var(--grey900);
              border-top: 1px solid var(--grey900);
              border-bottom: 1px solid var(--white);`;
    } else {
      return `border-radius: ${borderradius}px;
              border: 1px solid var(--${dropdownBorderColor});
              ${fontColor && `color: var(--${fontColor});`}`;
    }
  }}
`;

export const DropdownItemArea = styled.div<DropdownProps>`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  visibility: ${({ itemVisible }) => (itemVisible ? 'visible' : 'hidden')};
  display: ${({ itemVisible }) => (itemVisible ? 'block' : 'none')};
  left: 0;
  bottom: ${({ height }) => -height + 1}px;
  box-sizing: border-box;
  border-bottom-left-radius: ${({ borderradius }) => borderradius}px;
  border-bottom-right-radius: ${({ borderradius }) => borderradius}px;
  border: 1px solid var(--grey900);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownItem = styled.div<DropdownItemProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-style: normal;
  background-color: var(--white);
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontSize }) => fontSize * 1.5}px;
  cursor: pointer;
  &:not(&:last-child) {
    border-bottom: 1px solid black;
  }
  &:hover {
    background-color: var(--whiteHover);
  }
`;
