import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AcademicIcon } from '../assets/academic.svg';
import { ReactComponent as AddNewIcon } from '../assets/addNew.svg';
import { ReactComponent as AddToCollectionIcon } from '../assets/addToCollection.svg';
import { ReactComponent as AttentionIcon } from '../assets/attention.svg';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as CreateIcon } from '../assets/create.svg';
import { ReactComponent as DetailsIcon } from '../assets/details.svg';
import { ReactComponent as EnterIcon } from '../assets/enter.svg';
import FavouritesIcon from '../assets/favourites.svg';
import { ReactComponent as GoogleIcon } from '../assets/google.svg';
import { ReactComponent as HeartEmptyIcon } from '../assets/heartEmpty.svg';
import { ReactComponent as HeartFullIcon } from '../assets/heartFull.svg';
import { ReactComponent as IdiomIcon } from '../assets/idiom.svg';
import LibraryIcon from '../assets/library.svg';
import { ReactComponent as ListenIcon } from '../assets/listen.svg';
import { ReactComponent as MicrophoneIcon } from '../assets/microphone.svg';
import { ReactComponent as MinusIcon } from '../assets/minus.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as NextIcon } from '../assets/next.svg';
import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as ProblemIcon } from '../assets/problem.svg';
import { ReactComponent as ProgressBadgeIcon } from '../assets/progressBadge.svg';
import { ReactComponent as QuestionMarkIcon } from '../assets/questionMark.svg';
import { ReactComponent as RemoveIcon } from '../assets/remove.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as SearchSettingsIcon } from '../assets/searchSettings.svg';
import { ReactComponent as SosIcon } from '../assets/sos.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
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
  fill?: boolean;
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
  [Icons.HeartFull]: HeartFullIcon,
  [Icons.HeartEmpty]: HeartEmptyIcon,
  [Icons.Microphone]: MicrophoneIcon,
  [Icons.Enter]: EnterIcon,
  [Icons.Sos]: SosIcon,
  [Icons.QuestionMark]: QuestionMarkIcon,
  [Icons.Play]: PlayIcon,
  [Icons.Next]: NextIcon,
  [Icons.Moon]: MoonIcon,
  [Icons.Sun]: SunIcon,
  [Icons.Attention]: AttentionIcon,
  [Icons.Minus]: MinusIcon,
};

const Icon: React.FC<IconProps> = ({ iconType, color, size, fill = true }) => {
  let Icn = iconTypes[iconType];
  return (
    <StyledIcon>
      <Icn
        width={size ?? 20}
        height={size ?? 20}
        fill={fill ? color : 'none'}
        stroke={color}
        key={Math.random()}
      />
    </StyledIcon>
  );
};

export default Icon;
