import { css } from '@emotion/css';

export const promptStyle = { marginTop: '8px', marginBottom: '16px' };

export default function getStyleRoot() {
  return css`
    .form {
      display: grid;
      gap: 12px;
    }

    section.prompt {
      border-bottom: 1px solid var(--gray-900);
      display: grid;

      & .header {
        display: grid;
        gap: 12px;
        margin-bottom: 16px;

        & .tag-container {
          margin-left: -4px;
          display: flex;
          gap: 4px;
        }
      }
    }

    section:not(:first-of-type) {
      margin-top: 36px;
    }

    .button-container {
      padding-bottom: 4px;
      display: none;
    }

    section.footer {
      display: flex;
      justify-content: space-between;
    }

    .card-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  `;
}
