import styled from 'styled-components';

interface IconProps {
  icon: any;
}

const IconBase = styled.div<IconProps>`
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ icon }) => icon});
`;

export const Icon16x16 = styled(IconBase)`
  width: 16px;
  height: 16px;
`;

export const Icon20x20 = styled(IconBase)`
  width: 20px;
  height: 20px;
`;

export const Icon24x24 = styled(IconBase)`
  width: 24px;
  height: 24px;
`;

export const Icon32x32 = styled(IconBase)`
  width: 32px;
  height: 32px;
`;

export const Icon36x36 = styled(IconBase)`
  width: 36px;
  height: 36px;
`;

export const Icon40x40 = styled(IconBase)`
  width: 40px;
  height: 40px;
`;

export const Icon48x48 = styled(IconBase)`
  width: 48px;
  height: 48px;
`;

export const Icon60x60 = styled(IconBase)`
  width: 60px;
  height: 60px;
`;
