// @ts-nocheck
import { css } from 'styled-components';
import { mediaQueries } from './_mediaQueries';

const getMediaBreakpoints = () => {
  const media = {} as Record<
    keyof typeof mediaQueries,
    (l: TemplateStringsArray, ...args: any[]) => string
  >;
  Object.keys(mediaQueries).forEach((breakpoint) => {
    media[breakpoint] = (literals: TemplateStringsArray, ...args: any[]) => css`
      @media ${mediaQueries[breakpoint]} {
        ${css(literals, ...args)};
      }
    `;
  });
  return media;
};

export const respondTo = getMediaBreakpoints();
