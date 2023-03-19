import { css } from '@emotion/css';
export const styleRoot = css`
  padding: 16px;
  background-color: var(--gray-900);
  border-radius: 12px;
  border: 1px solid var(--gray-800);
  color: var(--white);
  flex-grow: 1;
  width: 100%;
  display: flex;
  height: 194px;
  flex-direction: column;

  .label-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;

    color: var(--gray-300);
  }

  .content {
    margin-bottom: 12px;
    height: 100%;
  }

  .icon-btn-container {
    margin: 0 0 0 auto;
  }
`;
