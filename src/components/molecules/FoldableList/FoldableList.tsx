import React from 'react';
import { Icon24x24 } from '~/globalStyles';
import * as S from './styled';

export interface FoldableListItem {
  id: any;
  value: any;
}

export interface FoldableListProps {
  width: number;
  height: number;
  itemVisible: boolean;
  items: FoldableListItem[];
  itemOnClick: ({ id, value }) => void;
  titleText: string;
  onClick?: () => void;
  divideLineBetween?: boolean;
  iconOnTitleRight: any;
  iconOnItemLeft: any;
}

const FoldableList: React.FC<FoldableListProps> = ({
  width,
  height,
  itemVisible,
  items = [],
  itemOnClick,
  titleText,
  onClick,
  divideLineBetween = false,
  iconOnTitleRight,
  iconOnItemLeft,
}) => {
  return (
    <S.Container divideLineBetween={divideLineBetween}>
      <S.TitleContainer width={width} height={height} onClick={onClick}>
        <S.InnerContainerOfTitle>
          <S.TitleText>{titleText}</S.TitleText>
          <Icon24x24 icon={iconOnTitleRight} />
        </S.InnerContainerOfTitle>
      </S.TitleContainer>
      {itemVisible &&
        items.length &&
        items.map(({ id, value }) => (
          <S.ItemContainer
            width={width}
            height={height}
            key={id}
            onClick={() => {
              itemOnClick({ id, value });
            }}>
            <S.InnerContainerOfItem>
              <Icon24x24 icon={iconOnItemLeft} />
              <S.ItemText>{value}</S.ItemText>
            </S.InnerContainerOfItem>
          </S.ItemContainer>
        ))}
    </S.Container>
  );
};

export default FoldableList;
