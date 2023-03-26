import { css } from '@emotion/css';

export function getStyleRoot() {
  return css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;

    max-width: 640px;
    margin: 0 auto;
    padding: 0 20px;

    .form {
      display: grid;
      gap: 12px;
    }

    section:not(:first-of-type) {
      margin-top: 48px;
    }

    .section-title {
      margin-left: 16px;
      margin-bottom: 20px;
    }

    .card-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  `;
}
