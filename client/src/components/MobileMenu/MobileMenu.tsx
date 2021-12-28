import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { respondTo } from '../../utils/_respondTo';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Lato, sans-serif;
  ${respondTo.laptopAndDesktop`
    display: none;
`}/* ${respondTo.mobileXS`
  bottom: -.5rem;
`} */
`;
const MobileMenu = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <svg
        width="414"
        viewBox="0 0 414 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="74" width="414" height="136" rx="32" fill="#2B41A7" />
        <circle cx="207" cy="88" r="34" fill="white" />
        <Link to="/" data-testid="dashboard-link-testid">
          <circle
            cx="35"
            cy="108"
            r="25"
            fill="white"
            onClick={() => setActiveTab(0)}
          />
        </Link>

        <path
          d="M144 102.5V55L166 2.5L182.5 67L175 81.5V96L166 102.5H144Z"
          fill="white"
          stroke="white"
        />
        <circle cx="145" cy="104" r="30" fill="#2B41A7" />
        <path
          d="M269 66V99L239 92.5V85L233.5 66H269Z"
          fill="white"
          stroke="white"
        />
        <Link to="/library" data-testid="library-link-testid">
          <circle
            cx="141"
            cy="108"
            r="25"
            fill="white"
            onClick={() => setActiveTab(1)}
          />
        </Link>
        <circle cx="269" cy="104" r="30" fill="#2B41A7" />
        <Link to="/training" data-testid="training-link-testid">
          <circle
            cx="273"
            cy="108"
            r="25"
            fill="white"
            onClick={() => setActiveTab(2)}
          />
        </Link>
        <Link to="/settings" data-testid="settings-link-testid">
          <circle
            cx="375"
            cy="108"
            r="25"
            fill="white"
            onClick={() => setActiveTab(3)}
          />
        </Link>
        <circle cx="207" cy="87" r="30" fill="#2B41A7" />
        <path
          d="M35 99.9512L26.25 106.951V116.75H32.5V111.75H37.5V116.75H43.75V107.553C43.7501 107.365 43.708 107.18 43.6268 107.011C43.5457 106.842 43.4276 106.693 43.2812 106.576L35 99.9512ZM35 96.75L44.8425 104.625C45.2814 104.976 45.6358 105.421 45.8794 105.928C46.123 106.434 46.2497 106.989 46.25 107.551V116.75C46.25 117.413 45.9866 118.049 45.5178 118.518C45.0489 118.987 44.413 119.25 43.75 119.25H26.25C25.587 119.25 24.9511 118.987 24.4822 118.518C24.0134 118.049 23.75 117.413 23.75 116.75V106.951C23.75 106.577 23.8343 106.207 23.9966 105.869C24.1589 105.531 24.395 105.234 24.6875 105L35 96.75Z"
          fill={activeTab === 0 ? theme.colors.secondary : theme.colors.primary}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.456 99.625H153.187L154.144 100.562V107.125H152.25V105.231H140.419L138.806 106.844L138.15 107.125H129.731V118.375H139.125V120.25H128.831L127.894 119.312V98.6875L128.831 97.75H138.206L138.862 98.0313L140.456 99.625V99.625ZM140.044 103.375H152.231L152.25 101.519H140.062L139.387 101.237L137.794 99.6437H129.75V105.269H137.775L139.387 103.656L140.044 103.375V103.375Z"
          fill={activeTab === 1 ? theme.colors.secondary : theme.colors.primary}
        />
        <path
          d="M141 109H142.875V120.25H141V109Z"
          fill={activeTab === 1 ? theme.colors.secondary : theme.colors.primary}
        />
        <path
          d="M144.75 109H146.625V120.25H144.75V109Z"
          fill={activeTab === 1 ? theme.colors.secondary : theme.colors.primary}
        />
        <path
          d="M148.507 109.66L150.27 109.019L154.117 119.59L152.355 120.231L148.507 109.66Z"
          fill={activeTab === 1 ? theme.colors.secondary : theme.colors.primary}
        />
        <path
          d="M206.5 75C206.914 75 207.312 75.1646 207.605 75.4576C207.898 75.7507 208.062 76.1481 208.062 76.5625V85.9375H217.438C217.852 85.9375 218.249 86.1021 218.542 86.3951C218.835 86.6882 219 87.0856 219 87.5C219 87.9144 218.835 88.3118 218.542 88.6049C218.249 88.8979 217.852 89.0625 217.438 89.0625H208.062V98.4375C208.062 98.8519 207.898 99.2493 207.605 99.5424C207.312 99.8354 206.914 100 206.5 100C206.086 100 205.688 99.8354 205.395 99.5424C205.102 99.2493 204.938 98.8519 204.938 98.4375V89.0625H195.562C195.148 89.0625 194.751 88.8979 194.458 88.6049C194.165 88.3118 194 87.9144 194 87.5C194 87.0856 194.165 86.6882 194.458 86.3951C194.751 86.1021 195.148 85.9375 195.562 85.9375H204.938V76.5625C204.938 76.1481 205.102 75.7507 205.395 75.4576C205.688 75.1646 206.086 75 206.5 75V75Z"
          fill="white"
        />
        <path
          d="M281.75 106.125L284.875 111.75L281.75 112.375V116.125H279.875L276.125 115.5L275.5 119.875H266.125L264.875 113.387C262.95 111.564 261.75 108.985 261.75 106.125C261.75 100.602 266.227 96.125 271.75 96.125C277.273 96.125 281.75 100.602 281.75 106.125Z"
          stroke={
            activeTab === 2 ? theme.colors.secondary : theme.colors.primary
          }
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M268.625 104.875C268.625 104.257 268.808 103.653 269.152 103.139C269.495 102.625 269.983 102.224 270.554 101.988C271.125 101.751 271.753 101.689 272.36 101.81C272.966 101.931 273.523 102.228 273.96 102.665C274.397 103.102 274.694 103.659 274.815 104.265C274.936 104.872 274.874 105.5 274.637 106.071C274.401 106.642 274 107.13 273.486 107.473C272.972 107.817 272.368 108 271.75 108V109.875"
          stroke={
            activeTab === 2 ? theme.colors.secondary : theme.colors.primary
          }
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M271.75 113.625V114.25"
          stroke={
            activeTab === 3 ? theme.colors.secondary : theme.colors.primary
          }
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M372.188 94.875V98.625L370.312 99.5625L367.5 96.75L363.75 100.5L366.562 103.312L365.625 105.188H361.875V110.812H365.625L366.562 112.688L363.75 115.5L367.5 119.25L370.312 116.438L372.188 117.375V121.125H377.812V117.375L379.688 116.438L382.5 119.25L386.25 115.5L383.438 112.688L384.375 110.812H388.125V105.188H384.375L383.438 103.312L386.25 100.5L382.5 96.75L379.688 99.5625L377.812 98.625V94.875H372.188Z"
          stroke={
            activeTab === 3 ? theme.colors.secondary : theme.colors.primary
          }
          strokeWidth="2.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M375 111.75C377.071 111.75 378.75 110.071 378.75 108C378.75 105.929 377.071 104.25 375 104.25C372.929 104.25 371.25 105.929 371.25 108C371.25 110.071 372.929 111.75 375 111.75Z"
          stroke={
            activeTab === 3 ? theme.colors.secondary : theme.colors.primary
          }
          strokeWidth="2.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default MobileMenu;
