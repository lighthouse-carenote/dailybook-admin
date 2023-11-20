import styled from 'styled-components';

interface SelectCheckContainerProps {
  width: number;
  height: number;
  border: 0 | 1;
  state: boolean;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
}

export const Container = styled.div<SelectCheckContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: ${({ paddingTop, paddingBottom, paddingLeft, paddingRight }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `};
  cursor: pointer;
  display: flex;
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

export const TitleAndDescriptionContainer = styled.div`
  margin-left: 10px;
`;

export const Title = styled.div`
  padding-top: 1px;
  height: 23px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Description = styled.div`
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  white-space: normal;
  word-break: break-all;
`;

export const CheckboxContainer = styled.div``;
