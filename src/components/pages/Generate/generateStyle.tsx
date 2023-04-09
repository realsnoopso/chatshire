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

    .no-result {
      padding: 24px 0 calc(24px - 8px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--gray-900);
      border-radius: 10px;

      & p {
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        color: var(--gray-300);
      }
    }
  `;
}
