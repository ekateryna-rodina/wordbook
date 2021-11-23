import React from 'react';
import styled from 'styled-components';
import CreateIcon from '../public/assets/create.svg';
import FavouritesIcon from '../public/assets/favourites.svg';
import LibraryIcon from '../public/assets/library.svg';
import TrainingIcon from '../public/assets/training.svg';
import UserIcon from '../public/assets/user.svg';
import { Icons } from '../utils/enums';

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-flex;
`;
type IconProps = {
  iconType: Icons;
  color: string;
  size?: number;
};
const iconTypes: Record<Icons, any> = {
  [Icons.Library]: LibraryIcon,
  [Icons.Favourites]: FavouritesIcon,
  [Icons.Create]: CreateIcon,
  [Icons.Training]: TrainingIcon,
  [Icons.User]: UserIcon,
};

const Icon = (props: IconProps) => {
  const { iconType, color, size } = props;
  let Icn = iconTypes[iconType];
  return (
    <StyledIcon>
      <Icn width={size ?? 20} height={size ?? 20} fill={color} />
    </StyledIcon>
  );
};

export default Icon;
