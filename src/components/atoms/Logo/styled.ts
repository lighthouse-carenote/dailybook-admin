import { Link } from 'react-router-dom';
import styled from 'styled-components';
import carehouseLogo from '~/assets/icons/carehouse_logo.svg';
import carehouseBusinessLogo from '~/assets/icons/carehouse_business_logo.svg';

interface IBackbround {
  business?: boolean;
}

export const Background = styled(Link)<IBackbround>`
  width: ${({ business }) => (business ? 205 : 147)}px;
  height: 32px;
  background-image: url(${({ business }) => (business ? carehouseBusinessLogo : carehouseLogo)});
  cursor: pointer;
`;
