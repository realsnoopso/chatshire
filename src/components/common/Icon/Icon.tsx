import { forwardRef, useEffect, useState } from 'react';
import * as assets from '@src/assets/index.js';
import { getStyleRoot } from './IconStyle';

export type IconType = keyof typeof assets;

interface Icon {
  name: IconType;
  _onClick?: () => void;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

async function loadSVGFile(url: string) {
  try {
    const response = await fetch(url);
    const assetString = await response.text();
    return assetString;
  } catch (error) {
    console.log(error);
  }
}

function changeSVGColor(svgString: string, color: string) {
  const newString = svgString.replace(/fill=".*?"/g, `fill="${color}"`);
  return newString;
}

function changeSVGSize(
  svgString: string,
  props: { size?: number; width?: number; height?: number }
) {
  let newString = svgString;
  const width = props.width || props.size;
  const height = props.height || props.size;

  if (!width || !height) return newString;
  newString = newString.replace(/width=".*?"/g, `width="${width}"`);
  newString = newString.replace(/height=".*?"/g, `height="${height}"`);
  return newString;
}

const Icon = forwardRef((props: Icon) => {
  const { name, _onClick, fill, size, width, height } = props;
  const url = assets[name].src;
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSVGData() {
      let svgString = await loadSVGFile(url);
      if (svgString) {
        if (fill) svgString = changeSVGColor(svgString, fill);
        if (size) svgString = changeSVGSize(svgString, { size });
        if (width && height)
          svgString = changeSVGSize(svgString, { width, height });
        setSvgContent(svgString);
      }
    }

    fetchSVGData();
  }, [url]);

  const isOnClick = _onClick ? true : false;

  const styleRoot = getStyleRoot(isOnClick);

  return (
    <div
      className={styleRoot}
      onClick={_onClick}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }}
    ></div>
  );
});

export default Icon;
