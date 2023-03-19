import { useRef, forwardRef, useEffect } from 'react';
import * as assets from '@src/assets/index.js';
import { css } from '@emotion/css';

type IconType = keyof typeof assets;

interface Icon {
  name: IconType;
  fill?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Icon = forwardRef((props: Icon) => {
  const { name } = props;
  const url = assets[name].src;
  const iconRef = useRef<HTMLObjectElement | null>(null);

  return <object data={url} ref={iconRef} type="image/svg+xml"></object>;
});

export default Icon;
