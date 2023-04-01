import { forwardRef, useEffect, useState } from 'react';
import { Icon as IconTypes } from '@types';
import * as assets from '@src/assets/index.js';
import { getStyleRoot } from './IconStyle';

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

const Icon = forwardRef((props: IconTypes) => {
  const { name, _onClick, fill, size, width, height, isImg } = props;
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

  if (isImg) {
    return (
      <img
        src={url}
        alt={name}
        width={width ?? size + 'px'}
        height={height ?? size + 'px'}
      ></img>
    );
  }

  return (
    <div
      className={styleRoot}
      onClick={_onClick}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }}
    ></div>
  );
});

export default Icon;
