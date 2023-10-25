import square from './square.js';
import getTriangleArea from './myMathModule';

const getNTriangleArea = (n) => getTriangleArea(n, square(n) / 2);
export default getNTriangleArea;
