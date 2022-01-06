import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { respondTo } from '../../utils/_respondTo';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Lato, sans-serif;
  ${respondTo.laptopAndDesktop`
    display: none;
`}
`;
const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2 | 3>(0);
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1725"
        height="388"
        viewBox="0 0 1725 388"
      >
        <path
          id="Bar"
          fill-rule="evenodd"
          fill="#2b41a7"
          d="M994,388H731m263,0h731V213A130,130,0,0,0,1595,83H1124c-87.36,0-130,113-130,113s-32.587,88-131,88-132-87-132-87S685.448,83,601,83H130A130,130,0,0,0,0,213V388H731"
        />
        <circle
          id="Center_Button"
          data-name="Center Button"
          stroke-width="12px"
          stroke="white"
          fill="#2b41a7"
          cx="863"
          cy="138"
          r="125"
        />
        <Link to="/" data-testid="dashboard-link-testid">
          <circle
            id="Button_1"
            data-name="Button 1"
            fill="#fff"
            cx="145"
            cy="225"
            r="105"
            onClick={() => setActiveTab(0)}
          />
        </Link>
        <Link to="/library" data-testid="dashboard-link-testid">
          <circle
            id="Button_2"
            data-name="Button 2"
            fill="#fff"
            cx="588"
            cy="225"
            r="105"
            onClick={() => setActiveTab(1)}
          />
        </Link>
        <Link to="/training" data-testid="dashboard-link-testid">
          <circle
            id="Button_3"
            data-name="Button 3"
            fill="#fff"
            cx="1136.72"
            cy="225"
            r="105"
            onClick={() => setActiveTab(2)}
          />
        </Link>
        <Link to="/settings" data-testid="dashboard-link-testid">
          <circle
            id="Button_4"
            data-name="Button 4"
            fill="#fff"
            cx="1579.72"
            cy="225"
            r="105"
            onClick={() => setActiveTab(3)}
          />
        </Link>
        <path
          id="House"
          fill={activeTab === 0 ? theme.colors.secondary : theme.colors.primary}
          fill-rule="evenodd"
          d="M100,212l44-35,40,32s7,5.09,7,16v34s0.283,12-11,12H107s-10-.215-10-11V223S96.241,216.448,100,212Zm8,48V220l35-29,37,30v40H154V239H133v21H108Z"
        />
        <path
          id="Folder"
          fill={activeTab === 1 ? theme.colors.secondary : theme.colors.primary}
          fill-rule="evenodd"
          d="M531,271V186l4-4h41l7,7h54l4,5v27h-9v-8H583l-9,8H539v46h39v9H535Zm54,5V228h9v48h-9Zm16-48v48h8V228h-8Zm15,3,8-3,17,45-9,3Zm-77-41v23h33l8-8h52v-8H580l-8-7H539Z"
        />
        <path
          id="Head"
          fill={activeTab === 2 ? theme.colors.secondary : theme.colors.primary}
          fill-rule="evenodd"
          d="M1099,249s-13-12.232-13-34,20.49-45,46-45,46,20.3,46,45c3.38,6.446,12,21,12,21s3.26,6.648-3,8-9,2-9,2v14s-0.77,3.508-8,3-16-2-16-2l-1,12a7.434,7.434,0,0,1-7,5h-36s-4.15,1.537-6-7S1099,249,1099,249Zm14,21h31l2-14s0.03-6.63,8-5,16,3,16,3V244s-1.46-5.643,3-6a46.7,46.7,0,0,0,7-1l-11-19v-5s0.54-32.028-37-34c-37.54,0-37,36.565-37,38s-0.37,18.04,13,27C1109.19,251.619,1113,270,1113,270Zm15-18v-6s0.13-2.955,4-3c5-.058,5,3,5,3v6s-0.19,3-5,3A4.159,4.159,0,0,1,1128,252Zm-13-39v-5s1.37-13.588,17-14,18,15.039,18,17-1.23,14.752-13,17v6s-0.53,3-5,3-4-4-4-4V222a7.024,7.024,0,0,1,5-2c3.21,0,8-4.223,8-9s-3.82-8-9-8-8,6-8,6v4a5.047,5.047,0,0,1-5,3C1115.04,216,1115,213,1115,213Z"
        />
        <path
          id="Gear"
          fill={activeTab === 3 ? theme.colors.secondary : theme.colors.primary}
          fill-rule="evenodd"
          d="M1567,165h27s3,0.78,3,5v12s0.31,2.188,3,0,9-8,9-8a4.256,4.256,0,0,1,6,0c3.05,2.882,16,16,16,16s2.29,2.188-1,6-8,9-8,9-2.14,3,1,3h13s4,0.061,4,5v24s0.18,4-5,4h-13s-2.47.751,0,3,9,8,9,8,2.6,3.454-1,7-15,15-15,15-3.27,3.86-6,1-9-9-9-9-3-2.227-3,1v14s0.97,3-6,3h-22s-5,.171-5-4V268s-1.07-4.145-3-2-9,9-9,9-3.4,2.826-7-1-15-15-15-15-2.81-4.686,1-8,8-7,8-7,1.49-3-2-3h-12s-4,.014-4-6V212s-0.59-4,5-4h11s4.46-.441,2-3-9-10-9-10a4.88,4.88,0,0,1,1-6c2.92-2.868,15-16,15-16s3.19-3.048,7,1,7,8,7,8,4,2.686,4-2V169S1563.27,164.915,1567,165Zm6,9h15v11s-0.1,2.8,2,4,8,4,8,4,3.89,1.454,6-1,8-8,8-8l9,9-9,8s-2.44,2.87-1,6,4,8,4,8a12.475,12.475,0,0,0,6,2h10v15h-11s-3.53-.911-5,2-3,7-3,7-2.32,4.013,1,7,8,7,8,7l-9,9-9-8s-2.36-2.382-5-1-8,4-8,4a8.3,8.3,0,0,0-3,7c0.18,4.767,0,9,0,9h-13V263s-0.57-3.089-5-5-9.98-4.6-13-1a69.61,69.61,0,0,1-7,7l-9-9,8-7s3.93-3.508,0-11-10-6-10-6h-7V218h10s2.34,1.113,5-4,3-7,3-7,2.74-2.518-1-6-7-7-7-7-1.22-.993,2-4,3-3,3-3,1.52-4.066,5-1,7,6,7,6a6.891,6.891,0,0,0,7,0c4.01-2.1,6-3,6-3s2-.283,2-5V174Zm7.5,30a20.5,20.5,0,1,1-20.5,20.5A20.5,20.5,0,0,1,1580.5,204Zm0,10a10.5,10.5,0,1,1-10.5,10.5A10.5,10.5,0,0,1,1580.5,214Z"
        />
        <path
          id="Plus"
          fill="white"
          fill-rule="evenodd"
          d="M855,131V91s-0.288-6,7-6,6,6,6,6v40h39s7-1.274,7,7-6,7-6,7H868v41s0.1,4-7,4-6-5-6-5V145H815s-6,0-6-8,7-6,7-6h39Z"
        />
      </svg>
    </Container>
  );
};

export default MobileMenu;
