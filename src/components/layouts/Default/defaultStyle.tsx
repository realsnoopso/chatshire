import { css } from '@emotion/css';
import { mediaQuery } from '@constants';

export const styleRoot = css`
  max-width: 640px;
  margin: 0 auto;
  padding: var(--size-gnb) 20px;

  ${mediaQuery[0]} {
    padding-top: calc(var(--size-gnb) + 8px);
  }

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
