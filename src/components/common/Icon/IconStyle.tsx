import { css } from '@emotion/css';

export function getStyleRoot(isOnClick: boolean) {
  return css`
    display: inline-block;

    &:hover {
      ${isOnClick && 'cursor: pointer;'}
    }
  `;
}
