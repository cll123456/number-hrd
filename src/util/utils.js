
/**
 * 获取随机的值
 */
export function getRandomValue() {
  return Math.random() - 0.5;
}

/**
 * 将一个一维数组，通过长度，分成一个二维数组
 * @param {Array} oneArray 
 * @param {Number} splitLength 
 */
export function getDoubleArray(oneArray, splitLength) {
  if (oneArray.length === 0) {
    return [[]];
  }
  if (!splitLength || splitLength === 0) {
    splitLength = 1;
  }

  let index = 0;
  let newArray = [];
  while (index < oneArray.length) {
    newArray.push(oneArray.slice(index, index += splitLength));
  }
  return newArray;

}