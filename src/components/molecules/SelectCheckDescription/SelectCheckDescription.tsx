import React from 'react';
import * as S from './styled';
import checkIcon from '~/assets/icons/select_checked_icon.svg';
import unCheckIcon from '~/assets/icons/check_grey_unchecked_icon.svg';
import { Icon24x24 } from '~/globalStyles';

export interface SelectCheckDescriptionProps {
  width: number;
  height: number;
  title: string | React.ReactElement;
  description: string | React.ReactElement;
  border?: 0 | 1;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const SelectCheckDescription: React.FC<SelectCheckDescriptionProps> = ({
  onClick,
  border = 1,
  width,
  height,
  title,
  description,
  checked = false,
  paddingTop = 20,
  paddingBottom = 20,
  paddingLeft = 18,
  paddingRight = 18,
}) => {
  return (
    <S.Container
      width={width}
      height={height}
      state={checked}
      onClick={onClick}
      border={border}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}>
      <S.CheckboxContainer>
        <Icon24x24 icon={checked ? checkIcon : unCheckIcon} />
      </S.CheckboxContainer>
      <S.TitleAndDescriptionContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TitleAndDescriptionContainer>
    </S.Container>
  );
};

export default SelectCheckDescription;
