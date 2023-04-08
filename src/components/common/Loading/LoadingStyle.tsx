import { css } from '@emotion/css';
export const styleRoot = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 80px 0;

  .loadingIcon {
    width: 32px;
    height: 32px;
    position: relative;
  }

  .circle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: var(--primary-400);
    display: inline-block;
    transform: translate(5px, 8px);
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;

    animation-name: circle1;

    &:first-child {
      transform: translate(13px, 20px);
      animation-name: circle2;
    }

    &:last-child {
      transform: translate(21px, 8px);
      animation-name: circle3;
    }

    @keyframes circle1 {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.6;
      }
      50% {
        opacity: 0.3;
      }
      75% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes circle2 {
      0% {
        opacity: 0.3;
      }
      25% {
        opacity: 0.6;
      }
      50% {
        opacity: 1;
      }
      75% {
        opacity: 0.6;
      }
      100% {
        opacity: 0.3;
      }
    }

    @keyframes circle3 {
      0% {
        opacity: 0.6;
      }
      25% {
        opacity: 1;
      }
      50% {
        opacity: 0.6;
      }
      75% {
        opacity: 0.3;
      }
      100% {
        opacity: 0.6;
      }
    }
  }
`;
