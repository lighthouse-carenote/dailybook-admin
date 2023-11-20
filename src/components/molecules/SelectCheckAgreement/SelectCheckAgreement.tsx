import React from 'react';
import * as S from './styled';
import checkIcon from '~/assets/icons/check_grey_checked_icon.svg';
import unCheckIcon from '~/assets/icons/check_grey_unchecked_icon.svg';

export interface SelectCheckAgreementProps {
  width: number;
  height: number;
  children: string | React.ReactElement;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectCheckAgreement: React.FC<SelectCheckAgreementProps> = ({ onClick, width, height, children, checked = false }) => {
  return (
    <S.Container width={width} height={height} checked={checked} onClick={onClick}>
      <S.SelectCheck icon={checked ? checkIcon : unCheckIcon} />
      {children}
    </S.Container>
  );
};

export default SelectCheckAgreement;
