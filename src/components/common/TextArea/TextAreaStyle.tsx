import { css } from '@emotion/css';
export const styleRoot = css`
  background-color: var(--gray-900);
  border-radius: 12px;
  border: 1px solid var(--gray-800);
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:focus-within {
    border: 1px solid var(--primary-700);
  }

  textarea {
    width: calc(100% - 16px - 16px);
    padding: 12px 16px;
    color: var(--white);
    border: none;
    background-color: transparent;
    outline: none;
    border: none;
    height: 6em;
    resize: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }

  textarea::placeholder {
    color: var(--gray-500);
  }

  textarea:focus {
    outline: none;
    border: none;
  }

  button {
    margin: 12px 12px 16px 12px;
  }
`;
