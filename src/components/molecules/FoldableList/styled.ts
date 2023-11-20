import styled from 'styled-components';

interface ContainerProps {
  divideLineBetween: boolean;
}

interface TitleAndItemContainerProps {
  width: number;
  height: number;
}

export const Container = styled.div<ContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ divideLineBetween }) => {
    if (divideLineBetween) {
      return `
      & + & {
        border-top: 1px solid var(--border01);
      }
      `;
    }
  }}
`;

export const TitleContainer = styled.div<TitleAndItemContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;
`;

export const InnerContainerOfTitle = styled.div`
  height: 100%;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.div`
  margin-top: 1px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const ItemContainer = styled.div<TitleAndItemContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-top: 1px solid var(--border01);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InnerContainerOfItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

export const ItemText = styled.div`
  margin-left: 10px;
  margin-top: 1px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;
