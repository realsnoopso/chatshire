import { css } from '@emotion/css';
export const styleRoot = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: var(--size-gnb);
  padding: 0 32px;

  position: fixed;
  width: 100%;

  z-index: var(--zindex-gnb);
  background-color: var(--black);
`;
