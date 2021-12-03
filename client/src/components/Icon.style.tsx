import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ReactComponent as CreateIcon } from '../assets/create.svg';
import { ReactComponent as DetailsIcon } from '../assets/details.svg';
import FavouritesIcon from '../assets/favourites.svg';
import { ReactComponent as GoogleIcon } from '../assets/google.svg';
import LibraryIcon from '../assets/library.svg';
import { ReactComponent as RemoveIcon } from '../assets/remove.svg';
import TrainingIcon from '../assets/training.svg';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { Icons } from '../utils/enums';

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-flex;
`;
type IconProps = {
  iconType: Icons;
  color?: string;
  size?: number;
};
const iconTypes: Record<Icons, any> = {
  [Icons.Library]: LibraryIcon,
  [Icons.Favourites]: FavouritesIcon,
  [Icons.Create]: CreateIcon,
  [Icons.Training]: TrainingIcon,
  [Icons.User]: UserIcon,
  [Icons.Back]: BackIcon,
  [Icons.Google]: GoogleIcon,
  [Icons.Details]: DetailsIcon,
  [Icons.Remove]: RemoveIcon,
};

const Icon: React.FC<IconProps> = ({ iconType, color, size }) => {
  let Icn = iconTypes[iconType];
  return (
    <StyledIcon>
      <Icn width={size ?? 20} height={size ?? 20} fill={color} />
    </StyledIcon>
  );
};

export default Icon;
