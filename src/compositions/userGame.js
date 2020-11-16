import userBasic from './userBasic.js';
import { getRandomValue, getDoubleArray } from './../util/utils.js';
import { ref } from 'vue';

const { currentGKRef, numberArrsRef, generateGame } = { ...userBasic };
// 生成游戏
generateGame();
// 是否开始游戏，否在不能移动方块
let isGame = ref(false);
// 游戏的默认值,需要深度克隆
let defaultResult = JSON.parse(JSON.stringify(numberArrsRef.value));

// 开始游戏
const startGame = () => {
  isGame.value = true;
  // 打乱数组
  numberArrsRef.value = getDoubleArray(numberArrsRef.value.reduce((x, y) => [...x, ...y], []).sort(() => getRandomValue()), currentGKRef.value + 2);
}

// 重置游戏
const resetGame = () => {
  isGame.value = false;
  numberArrsRef.value = defaultResult;
}

// 游戏移动
const moveBlock = (obj) => {

  if (!isGame.value) {
    alert('请先点击开始游戏，在进行移动方块');
    return;
  }
  // 获取当前移动的位置， 判断当前上下左右是否有一个地方为 0， 如果式，那么交换
  let position = obj.position;
  // 向下移动
  const nextPosition = [position[0] + 1, position[1]];
  if (numberArrsRef.value[nextPosition[0]] && numberArrsRef.value[nextPosition[0]][nextPosition[1]] !== undefined && numberArrsRef.value[nextPosition[0]][nextPosition[1]] === 0) {
    // 交换位置
    exchangeData(numberArrsRef.value, position, nextPosition);
    // 判断是否游戏成功
    if (isSuccess(numberArrsRef.value, defaultResult)) {
      alert('恭喜，闯关成功！');
      nextGame();
    }
    return;
  }

  // 向左边移动
  const leftPosition = [position[0], position[1] - 1];
  if (numberArrsRef.value[leftPosition[0]] && numberArrsRef.value[leftPosition[0]][leftPosition[1]] !== undefined && numberArrsRef.value[leftPosition[0]][leftPosition[1]] === 0) {
    // 交换位置
    exchangeData(numberArrsRef.value, position, leftPosition);
    // 判断是否游戏成功
    if (isSuccess(numberArrsRef.value, defaultResult)) {
      alert('恭喜，闯关成功！');
      nextGame();
    }
    return;
  }

  // 向右边移动
  const rightPosition = [position[0], position[1] + 1];
  if (numberArrsRef.value[rightPosition[0]] && numberArrsRef.value[rightPosition[0]][rightPosition[1]] !== undefined && numberArrsRef.value[rightPosition[0]][rightPosition[1]] === 0) {
    // 交换位置
    exchangeData(numberArrsRef.value, position, rightPosition);
    // 判断是否游戏成功
    if (isSuccess(numberArrsRef.value, defaultResult)) {
      alert('恭喜，闯关成功！');
      nextGame();
    }
    return;
  }

  // 向上移动
  const upPosition = [position[0] - 1, position[1]];
  if (numberArrsRef.value[upPosition[0]] && numberArrsRef.value[upPosition[0]][upPosition[1]] !== undefined && numberArrsRef.value[upPosition[0]][upPosition[1]] === 0) {
    // 交换位置
    exchangeData(numberArrsRef.value, position, upPosition);
    // 判断是否游戏成功
    if (isSuccess(numberArrsRef.value, defaultResult)) {
      alert('恭喜，闯关成功！');
      nextGame();
    }
    return;
  }
}

/**
 * 交换位置
 * @param {*} array 
 * @param {*} val1 
 * @param {*} val2 
 */
const exchangeData = (array, val1, val2) => {
  if (!array[val1[0]][val1[1]] || array[val2[0]][val2[1]] !== 0) {
    return;
  }
  let res = array[val1[0]][val1[1]];
  array[val1[0]][val1[1]] = array[val2[0]][val2[1]];
  array[val2[0]][val2[1]] = res;
  return array;
}
/**
 * 监测成功
 */
const isSuccess = (arr, originArr) => {
  let arrs = JSON.parse(JSON.stringify(arr)).reduce((x, y) => [...x, ...y], []);
  let originArrs = JSON.parse(JSON.stringify(originArr)).reduce((x, y) => [...x, ...y], []);
  if (arrs.join(',') === originArrs.join(',')) {
    return true;
  } else {
    return false
  }
}
/**
 * 下一关
 */
const nextGame = () => {
  currentGKRef.value = currentGKRef.value + 1;
  isGame.value = false;
  numberArrsRef.value = [];
  generateGame();
  defaultResult = JSON.parse(JSON.stringify(numberArrsRef.value))
}
export default {
  startGame,
  moveBlock,
  resetGame,
  nextGame,
  isGame
}