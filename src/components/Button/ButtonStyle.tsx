import { css } from '@emotion/css';
export const styleRoot = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 100px;
  border: none;
  background-color: var(--gray-900);
  color: var(--primary-500);
  height: 32px;

  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;

  &:hover {
    cursor: pointer;
  }

  &.large {
    color: var(--white);
    height: 53px;
    padding: 0 48px;
    background: linear-gradient(
        180deg,
        rgba(164, 80, 238, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #624cd2;
  }

  &.small {
    padding: 4px;
    background: none;
  }

  &.loading {
    background: linear-gradient(0deg, var(--gray-700), var(--gray-700)), #624cd2;
  }
`;
