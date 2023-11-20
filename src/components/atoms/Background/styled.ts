import styled from 'styled-components';
import { CONSTANTS } from '~/libs';

export const Background = styled.div`
  @media (max-width: ${CONSTANTS.CSS.MOBILE_MAX_WIDTH}) {
    display: none;
  }
  @media (min-width: ${CONSTANTS.CSS.DESKTOP_MIN_WIDTH}) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: var(--backgroundBlackZIndex);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
