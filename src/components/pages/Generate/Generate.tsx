import getStyleRoot from './generateStyle';

export default function Generate() {
  const styleRoot = getStyleRoot();

  return (
    <>
      <div className={styleRoot}>dsadfasdf</div>
    </>
  );
}
