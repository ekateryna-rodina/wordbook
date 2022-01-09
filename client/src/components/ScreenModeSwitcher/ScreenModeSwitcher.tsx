import React from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setScreenMode } from '../../features/settings/settings-slice';
import { theme } from '../../globalStyles';
import { Icons, ScreenMode } from '../../utils/enums';
import Icon from '../Icon.style';

const Container = styled.div`
  --ball-size: 1.5rem;
  --margin: 0.2rem;
  width: calc(var(--ball-size) * 2 + var(--margin) * 2);
  height: calc(var(--ball-size) + var(--margin) * 2);
  position: relative;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.primary};
`;

const radioStyle = css`
  opacity: 0;
`;
const Light = styled.input`
  ${radioStyle};
`;
const Dark = styled.input`
  ${radioStyle};
`;
const Ball = styled.div<{ mode: ScreenMode }>`
  position: absolute;
  top: 50%;
  left: var(--margin);
  width: var(--ball-size);
  height: var(--ball-size);
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  transform: ${({ mode }) =>
    mode === ScreenMode.Dark
      ? 'translateX(100%) translateY(-50%)'
      : 'translateY(-50%);'};
`;
const IconContainer = styled.div<{ position: 'left' | 'right' }>`
  pointer-events: none;
  position: absolute;
  transform: translateY(-50%);
  top: calc(50% + 0.1rem);
  left: ${({ position }) => (position === 'left' ? '0.4rem' : '')};
  right: ${({ position }) => (position === 'right' ? '0.4rem' : '')};
`;
const ScreenModeSwitcher = () => {
  const { mode } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const setScreenModeHandler = (e: any) => {
    const modeSelected =
      ScreenMode[ScreenMode[e.target.value] as keyof typeof ScreenMode];
    dispatch(setScreenMode(modeSelected));
  };
  return (
    <Container>
      <label htmlFor="light"></label>
      <Light
        type="radio"
        id="light"
        name="screenMode"
        value={ScreenMode.Light}
        checked={mode === ScreenMode.Light}
        onChange={(e) => setScreenModeHandler(e)}
      />

      <label htmlFor="light">
        <IconContainer position="left">
          <Icon iconType={Icons.Sun} color={theme.colors.yellow} size={15} />
        </IconContainer>
      </label>

      <Dark
        type="radio"
        id="dark"
        name="screenMode"
        value={ScreenMode.Dark}
        checked={mode === ScreenMode.Dark}
        onChange={(e) => setScreenModeHandler(e)}
      />

      <label htmlFor="light">
        <IconContainer position="right">
          <Icon iconType={Icons.Moon} color={theme.colors.yellow} size={15} />
        </IconContainer>
      </label>

      <Ball mode={mode} />
    </Container>
  );
};

export default ScreenModeSwitcher;
