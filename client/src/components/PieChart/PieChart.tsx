import React from 'react';
import styled, { css } from 'styled-components';

const Outer = styled.div`
  --size: 5rem;
  position: relative;
  width: var(--size);
  height: var(--size);
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 15;
`;
const Inner = styled.div`
  width: calc(var(--size) - 1rem);
  height: calc(var(--size) - 1rem);
  background: white;
  border-radius: 50%;
  z-index: 50;
  text-align: center;
`;
const segmentCss = css`
  width: 100%;
  height: 100%;
  inset: 0;
  background: ${(props) => props.theme.colors.tertiary};
  z-index: 15;
  position: absolute;
`;
const SegmentRight = styled.div<{ deg: number }>`
  ${segmentCss};
  transform: ${({ deg }) => `translate(-50%, 0) rotate(${deg}deg)`};
  transform-origin: 100% 50%;
`;
const SegmentLeft = styled.div<{ show: boolean; deg: number }>`
  ${segmentCss};
  display: ${({ show }) => (show ? 'block' : 'none')};
  transform: ${({ deg }) => `translate(-50%, 0) rotate(${deg}deg)`};
  transform-origin: 100% 50%;
`;
const Overlay = styled.div<{ cover: boolean }>`
  width: 100%;
  height: 100%;
  inset: 0;
  background: ${(props) => props.theme.colors.primary};
  z-index: ${({ cover }) => (cover ? 25 : 5)};
  position: absolute;
  transform: translate(-50%, 0);
`;
const Label = styled.span`
  font-size: 0.8rem;
  position: absolute;
  max-width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
type PieChartProps = {
  progress: number;
  total: number;
  label: string;
};
const PieChart = ({ progress, total, label }: PieChartProps) => {
  const progressPercent = (100 * progress) / total;
  const deg = (360 * progressPercent) / 100;
  return (
    <Outer>
      <Inner>
        <Label>{progress + ' ' + label}</Label>
      </Inner>
      <SegmentRight deg={progressPercent >= 50 ? 180 : deg} />
      <SegmentLeft show={progressPercent > 50} deg={deg} />
      <Overlay cover={progressPercent < 50} />
    </Outer>
  );
};

export default PieChart;
