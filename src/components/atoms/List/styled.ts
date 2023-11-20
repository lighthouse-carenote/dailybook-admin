import styled from 'styled-components';

interface ListContainerProps {
  width: number;
  height: number;
  backgroundcolor: 'white' | 'hover';
}

export const ListContainer = styled.div<ListContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ backgroundcolor }) => {
    if (backgroundcolor === 'hover') {
      return 'var(--whiteHover)';
    } else if (backgroundcolor === 'white') {
      return 'var(--white)';
    } else {
      return 'var(--white)';
    }
  }};
  display: flex;
  align-items: center;
  cursor: pointer;
  & + & {
    border-top: 1px solid var(--border01);
  }
  &:hover {
    background: var(--whiteHover);
  }
`;

export const InnerContainer = styled.div`
  margin: 16px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

export const Contents = styled.div`
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;
