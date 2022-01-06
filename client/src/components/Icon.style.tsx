import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AcademicIcon } from '../assets/academic.svg';
import { ReactComponent as AddNewIcon } from '../assets/addNew.svg';
import { ReactComponent as AddToCollectionIcon } from '../assets/addToCollection.svg';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as CreateIcon } from '../assets/create.svg';
import { ReactComponent as DetailsIcon } from '../assets/details.svg';
import FavouritesIcon from '../assets/favourites.svg';
import { ReactComponent as GoogleIcon } from '../assets/google.svg';
import { ReactComponent as IdiomIcon } from '../assets/idiom.svg';
import LibraryIcon from '../assets/library.svg';
import { ReactComponent as ListenIcon } from '../assets/listen.svg';
import { ReactComponent as ProblemIcon } from '../assets/problem.svg';
import { ReactComponent as ProgressBadgeIcon } from '../assets/progressBadge.svg';
import { ReactComponent as RemoveIcon } from '../assets/remove.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as SearchSettingsIcon } from '../assets/searchSettings.svg';
import { ReactComponent as SwipeIcon } from '../assets/swipe.svg';
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
  [Icons.Academic]: AcademicIcon,
  [Icons.AddToCollection]: AddToCollectionIcon,
  [Icons.Listen]: ListenIcon,
  [Icons.Problem]: ProblemIcon,
  [Icons.Swipe]: SwipeIcon,
  [Icons.Search]: SearchIcon,
  [Icons.Settings]: SearchSettingsIcon,
  [Icons.Close]: CloseIcon,
  [Icons.New]: AddNewIcon,
  [Icons.ProgressBadge]: ProgressBadgeIcon,
  [Icons.Idiom]: IdiomIcon,
};

const Icon: React.FC<IconProps> = ({ iconType, color, size }) => {
  console.log(iconType);
  let Icn = iconTypes[iconType];
  console.log(Icn);
  return (
    <StyledIcon>
      <Icn
        width={size ?? 20}
        height={size ?? 20}
        fill={color}
        stroke={color}
        key={Math.random()}
      />
    </StyledIcon>
  );
};

export default Icon;
