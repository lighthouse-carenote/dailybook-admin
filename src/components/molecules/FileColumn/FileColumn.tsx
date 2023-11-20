import React from 'react';
import * as S from './styled';
import xIcon from '~/assets/icons/x_icon.svg';

export interface FileColumnProps {
  width: number;
  height: number;
  iconOnClick?: React.MouseEventHandler<HTMLDivElement>;
  fileExt: string;
  fileName: string;
}

const FileColumn: React.FC<FileColumnProps> = ({ width, height, fileExt, fileName, iconOnClick }) => {
  return (
    <S.FileColumnContainer width={width} height={height}>
      <S.InnerContainer>
        <S.ExtLogo>
          <S.ExtLogoText>{fileExt}</S.ExtLogoText>
        </S.ExtLogo>
        <S.Filename>{fileName}</S.Filename>
        <S.Icon icon={xIcon} onClick={iconOnClick} />
      </S.InnerContainer>
    </S.FileColumnContainer>
  );
};

export default FileColumn;
