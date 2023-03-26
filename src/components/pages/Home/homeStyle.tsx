import { css } from '@emotion/css';

export default function getStyleRoot() {
  return css`
    .form {
      display: grid;
      gap: 12px;
    }

    section:not(:first-of-type) {
      margin-top: 48px;
    }

    .card-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  `;
}
