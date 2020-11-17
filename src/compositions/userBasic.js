// 数字华容道的基础模块
import { ref, computed } from 'vue';
import { getDoubleArray } from './../util/utils'

// 实现方式， 使用一个二维数组， 横向是行，纵向是列
let numberArrsRef = ref([]);
// 当前是第几关
let currentGKRef = ref(1);

const generateGame = () => {
  // 获取页面显示的值
  let numbers = ref((currentGKRef.value + 2) * (currentGKRef.value + 2) - 1);

  // 往数组里面放入值
  for (let i = 1; i <= numbers.value; i++) {
    numberArrsRef.value.push(i);
  }
  // 在push 一个空格，里面不需要值
  numberArrsRef.value.push(0);

  // 分组成一个二维数组，每currentGKRef.value + 2 分成一组
  numberArrsRef.value = getDoubleArray(numberArrsRef.value, (currentGKRef.value + 2));
}

/**
 * 生成wrapper的宽高
 */
const wraperContainerStyle = computed(() => {
  let width = 80 * (currentGKRef.value + 2) + 'px';
  let height = width;
  return { width, height }
})

export default {
  currentGKRef,
  numberArrsRef,
  generateGame,
  wraperContainerStyle
}