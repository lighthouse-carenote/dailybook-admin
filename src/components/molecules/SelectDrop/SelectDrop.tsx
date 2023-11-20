import React from 'react';
import * as S from './styled';
import dropUpIcon from '~/assets/icons/select_drop_up_icon.svg';
import dropDownIcon from '~/assets/icons/select_drop_down_icon.svg';
import { Icon24x24 } from '~/globalStyles';

export interface Item {
  id: any;
  value: any;
  valueElement?: React.ReactElement;
}

export interface SelectDropProps {
  width: number;
  height: 40 | 48 | 52 | 56 | 60;
  borderradius: 0 | 4 | 6;
  itemVisible: boolean;
  selectedItem?: Item;
  items: Item[];
  itemOnClick: ({ id, value }) => void;
  defaultOptionText: string;
  fontColor?: 'textGrey';
  dropdownBorderColor?: 'grey200' | 'grey900' | 'border01';
  fontSize?: 16 | 18 | 20;
  fontWeight?: 400 | 700;
  visibleItemCnt?: number;
  onClick?: () => void;
  refToAll?: React.RefObject<HTMLDivElement>;
  onBlur?: () => void;
  disabled?: boolean;
}

const selectDrop: React.FC<SelectDropProps> = ({
  onClick,
  onBlur,
  width,
  height,
  borderradius,
  itemVisible,
  items,
  itemOnClick,
  selectedItem,
  defaultOptionText,
  fontColor,
  dropdownBorderColor = 'grey900',
  fontSize = 16,
  fontWeight = 700,
  visibleItemCnt = 2,
  refToAll,
  disabled = false,
}) => {
  return (
    <S.Container width={width} height={height} tabIndex={0} borderradius={borderradius} onBlur={onBlur}>
      <div style={{ height: itemVisible ? height * (visibleItemCnt + 1) : height }} ref={refToAll}>
        <S.DropdownTitleArea
          width={width}
          height={height}
          fontColor={fontColor}
          onClick={(e) => {
            e.stopPropagation();
            if (onClick !== undefined) {
              onClick();
            }
          }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          dropdownBorderColor={dropdownBorderColor}
          borderradius={borderradius}
          itemVisible={itemVisible && !!items.length && !disabled}
          disabled={disabled}>
          {selectedItem ? <span style={{ color: 'var(--textBlack)' }}>{selectedItem.value}</span> : defaultOptionText}
          <Icon24x24 icon={itemVisible && !!items.length && !disabled ? dropUpIcon : dropDownIcon} />
        </S.DropdownTitleArea>
        {!!items.length && (
          <S.DropdownItemArea
            width={width}
            height={height * visibleItemCnt}
            borderradius={borderradius}
            itemVisible={itemVisible && !disabled}>
            {items.map(({ id, value, valueElement }) => (
              <S.DropdownItem
                key={id}
                onClick={(e) => {
                  e.stopPropagation();
                  itemOnClick({ id, value });
                }}
                width={width}
                height={height}
                fontSize={fontSize}
                fontWeight={fontWeight}
                borderradius={borderradius}>
                {valueElement || value}
              </S.DropdownItem>
            ))}
          </S.DropdownItemArea>
        )}
      </div>
    </S.Container>
  );
};

export default selectDrop;
