import { css } from '@emotion/css';
export const styleRoot = css`
  display: flex;
  flex-direction: column;

  position: relative;

  .select-btn {
    width: 100%;
    background-color: var(--gray-900);
    padding: 0 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;

    height: 52px;
    border: 1px solid var(--gray-800);
    outline: none;

    color: var(--white);
    text-align: left;

    &:focus {
      outline: 1px solid var(--primary-700);
    }

    & .select-btn-value {
      display: flex;
      align-items: center;
      gap: 10px;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01em;
      color: var(--gray-300);
    }
  }

  .option-container {
    padding: 8px;
    background-color: var(--gray-900);
    border-radius: 12px;
    border: 1px solid var(--gray-800);
    filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.5));
    overflow-y: scroll;
    max-height: 210px;
    position: absolute;
    width: 100%;
    top: calc(52px + 4px);
    transition: all 0.3s var(--timing-function);
    z-index: var(--zindex-selectbox-dropdown);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px;
    transform: translateY(-2px);

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
  }

  .option {
    padding: 0 8px;
    height: 35px;
    display: flex;
    align-items: center;
    color: var(--white);

    &:hover {
      background-color: var(--gray-800);
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
