import styled from 'styled-components';
import { Icon24x24 } from '~/globalStyles';

interface InputProps {
  width: number;
  height: number;
  borderradius: number;
  rightContentsLeftMargin?: number;
  leftContentsRightMargin?: number;
  isError?: boolean;
  isConfirm?: boolean;
  outBorderwidthOnFocus: number;
  bordercolorOnFocus: 'primary' | 'black';
  backgroundcolor?: 'grey50';
  bordercolor?: 'grey100';
  fontSize: number;
  fontLineHeight: number;
}

interface ExtraContentsProps {
  top: number;
}

interface InputContainerProps {
  width: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: ${({ width }) => width}px;
`;

export const LeftContentsIcon = styled(Icon24x24)<ExtraContentsProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

export const RightContents = styled.div<ExtraContentsProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  right: 0;
  margin-right: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: var(--textGrey);
`;

export const RightContentsIcon = styled(Icon24x24)<ExtraContentsProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  right: 0;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderradius }) => borderradius}px;
  border: 1px solid
    ${({ isError, isConfirm, bordercolor }) => {
      if (isError) {
        return 'var(--error)';
      } else if (isConfirm) {
        return 'var(--confirm)';
      } else if (bordercolor === 'grey100') {
        return 'var(--grey100)';
      } else {
        return 'var(--grey200)';
      }
    }};
  background-color: ${({ backgroundcolor }) => {
    if (backgroundcolor === 'grey50') {
      return 'var(--grey50)';
    } else {
      return 'var(--white)';
    }
  }};
  color: var(--textBlack);
  box-sizing: border-box;
  outline: none;
  ${({ rightContentsLeftMargin, leftContentsRightMargin }) => {
    if (rightContentsLeftMargin && leftContentsRightMargin) {
      return `padding: 0 ${rightContentsLeftMargin}px 0 ${leftContentsRightMargin}px;`;
    } else if (rightContentsLeftMargin) {
      return `padding: 0 ${rightContentsLeftMargin}px 0 16px;`;
    } else if (leftContentsRightMargin) {
      return `padding: 0 16px 0 ${leftContentsRightMargin}px;`;
    } else {
      return 'padding: 0 16px;';
    }
  }}
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontLineHeight }) => fontLineHeight}px;
  display: flex;
  align-items: center;
  &::placeholder {
    color: var(--textGrey);
  }
  &:focus {
    border: 1px solid
      ${({ isError, isConfirm, bordercolorOnFocus }) => {
        if (isError) {
          return 'var(--error)';
        } else if (isConfirm) {
          return 'var(--confirm)';
        } else if (bordercolorOnFocus === 'primary') {
          return 'var(--primary)';
        } else {
          return 'var(--grey900)';
        }
      }};

    box-shadow: 0 0 0 ${({ outBorderwidthOnFocus }) => outBorderwidthOnFocus}px
      ${({ isError, isConfirm, bordercolorOnFocus }) => {
        if (isError) {
          return 'var(--error)';
        } else if (isConfirm) {
          return 'var(--confirm)';
        } else if (bordercolorOnFocus === 'primary') {
          return 'var(--primary)';
        } else {
          return 'var(--grey900)';
        }
      }};

    -webkit-box-shadow: 0 0 0 ${({ outBorderwidthOnFocus }) => outBorderwidthOnFocus}px
      ${({ isError, isConfirm, bordercolorOnFocus }) => {
        if (isError) {
          return 'var(--error)';
        } else if (isConfirm) {
          return 'var(--confirm)';
        } else if (bordercolorOnFocus === 'primary') {
          return 'var(--primary)';
        } else {
          return 'var(--grey900)';
        }
      }};

    -moz-box-shadow: 0 0 0 ${({ outBorderwidthOnFocus }) => outBorderwidthOnFocus}px
      ${({ isError, isConfirm, bordercolorOnFocus }) => {
        if (isError) {
          return 'var(--error)';
        } else if (isConfirm) {
          return 'var(--confirm)';
        } else if (bordercolorOnFocus === 'primary') {
          return 'var(--primary)';
        } else {
          return 'var(--grey900)';
        }
      }};
  }
  &:disabled {
    padding: 0 17px;
    background-color: var(--grey100);
    border: none;
  }
`;
