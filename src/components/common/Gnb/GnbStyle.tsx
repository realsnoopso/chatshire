import { css } from '@emotion/css';
import { mediaQuery } from '@constants';

export const styleRoot = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: var(--size-gnb);
  padding: 0 32px;

  ${mediaQuery[0]} {
    padding: 0 28px;
    background-color: var(--black);
  }

  position: fixed;
  width: 100%;

  z-index: var(--zindex-gnb);
`;
