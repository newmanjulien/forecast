export const CHART_DIMENSIONS = {
  width: 720,
  height: 360,
};

export const CHART_PADDING = {
  top: 20,
  right: 24,
  bottom: 54,
  left: 68,
};

export const AXIS_LABEL_OFFSET = {
  x: 54,
  bottom: 6,
};

export function getInnerSize(
  padding: typeof CHART_PADDING = CHART_PADDING,
  dimensions: typeof CHART_DIMENSIONS = CHART_DIMENSIONS
) {
  return {
    width: dimensions.width - padding.left - padding.right,
    height: dimensions.height - padding.top - padding.bottom,
  };
}
