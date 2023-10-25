import square from './square.js';
import getTriangleArea from './myMathModule'

let getNTriangleArea = (n) => getTriangleArea(n, square(n) / 2);
export default getNTriangleArea;