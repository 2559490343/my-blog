const useSvgInfo = (svgRef: any) => {
  const svgElement = svgRef.current || {
    setAttribute() {},
    querySelector() {},
  };
  svgElement.set = svgElement.setAttribute;
  const svgWidth = svgElement.clientWidth || 36;
  const svgHeight = svgElement.clientHeight || 36;
  const strokeWidth = svgWidth / 12;
  const pathElement = svgElement.querySelector('#path-test') || {
    querySelector() {},
    setAttribute() {},
  };
  pathElement.set = pathElement.setAttribute;
  return {
    svgElement,
    svgWidth,
    svgHeight,
    strokeWidth,
    pathElement,
  };
};

export default useSvgInfo;
