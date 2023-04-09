import { css } from '@emotion/css';
export const styleRoot = css`
  background-color: var(--gray-900);
  border-radius: 12px;
  border: 1px solid var(--gray-800);
  display: grid;
  align-items: center;
  grid-template-columns: auto max-content;
  padding: 12px 16px;

  &:focus-within {
    border: 1px solid var(--primary-700);
  }

  input {
    color: var(--white);
    border: none;
    background-color: transparent;
    outline: none;
    border: none;
    flex-grow: 1;
    padding: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
  }

  input::placeholder {
    color: var(--gray-500);
  }

  input:focus {
    outline: none;
    border: none;
  }

  & button.small {
    flex-grow: 1;
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 0) 0%,
      rgba(20, 20, 20, 0) 4%,
      var(--gray-900) 100%
    );
    border-radius: 0;
    padding-left: 24px;
  }
`;
