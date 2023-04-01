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

  font-family: 'Red Hat Display', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.01em;

  &:hover {
    box-shadow: none;
    transform: scale(1.1);
  }

  &:hover {
    cursor: pointer;
    transition: all 0.1s var(--timing-function);
    transform: scale(1.1);
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

    &:hover {
      cursor: pointer;
      text-shadow: var(--gray-600) 0px 3px 12px;
      box-shadow: rgba(54, 29, 150, 0.5) 0px 1px 40px;
      transition: all 0.1s var(--timing-function);
      transform: scale(1.1);
    }
  }

  &.small {
    padding: 4px;
    background: none;
    margin-left: -8px;

    font-weight: 500;
    font-size: 13px;
    line-height: 16px;

    letter-spacing: 0.01em;

    &:hover {
      box-shadow: none;
      transform: scale(1.1);
    }
  }

  &.loading {
    background: linear-gradient(0deg, var(--gray-700), var(--gray-700)), #624cd2;
  }

  &.no-animation:hover {
    transition: none;
    transform: none;
  }
`;
