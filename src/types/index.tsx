import * as assets from '@src/assets/index.js';

export type IconType = keyof typeof assets;

export interface Icon {
  name: IconType;
  _onClick?: React.MouseEventHandler<any>;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  isImg?: boolean;
}

export interface History {
  chain: string;
  item: string;
  prompt: string;
}

export type PromptExample = string;
