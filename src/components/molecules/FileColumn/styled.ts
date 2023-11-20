import styled from 'styled-components';
import { Icon24x24 } from '~/globalStyles';

interface FileColumnContainerProps {
  width: number;
  height: number;
}

export const FileColumnContainer = styled.div<FileColumnContainerProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: var(--white);
  border: 1px solid var(--grey600);
  box-sizing: border-box;
  border-radius: 6px;
  & + & {
    margin-top: 12px;
  }
`;

export const InnerContainer = styled.div`
  margin: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExtLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--grey900);
  border-radius: 8px;
`;

export const ExtLogoText = styled.div`
  padding-top: 1px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  height: 19px;
  line-height: 20px;
  color: var(--white);
`;

export const Filename = styled.div`
  padding-top: 1px;
  width: 236px;
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Icon = styled(Icon24x24)`
  cursor: pointer;
`;
