import { css } from '@emotion/css';

export function getStyleRoot() {
  return css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;

    .card-container {
      display: flex;
      gap: 12px;
    }
  `;
}
