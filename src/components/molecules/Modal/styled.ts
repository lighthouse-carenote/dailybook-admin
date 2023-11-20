import styled from 'styled-components';

interface ModalContainerProps {
  width: number;
  height: number;
}

interface ModalInnerContainerProps {
  height: number;
  margin: number;
}

interface TitleProps {
  marginTop: number;
}

export const Container = styled.div<ModalContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: var(--white);
  border: 1px solid var(--grey900);
`;

export const InnerContainer = styled.div<ModalInnerContainerProps>`
  margin: ${({ margin }) => margin}px;
  height: ${({ margin, height }) => height - margin * 2}px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleContentsContainer = styled.div``;

export const BtnHorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div<TitleProps>`
  margin-top: ${({ marginTop }) => marginTop}px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;

export const Contents = styled.div`
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: var(--textGrey);
  white-space: normal;
  word-break: break-all;
  max-height: 118px;
`;
