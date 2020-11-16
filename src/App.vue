<template>
  <h3>欢迎来到数字华容道 第{{ currentGKRef }}关</h3>
  <div class="wall-container" :style="wraperContainerStyle">
    <template v-for="(itemArr, indexH) in numberArrsRef" :key="indexH">
      <template v-for="(item, indexC) in itemArr" :key="item">
        <number-block
          :position="[indexH, indexC]"
          :value="item"
          @move="moveBlock"
          >{{ item }}</number-block
        >
      </template>
    </template>
  </div>
  <div class="btn-grp">
    <div class="startGame" @click="startGame" v-if="!isGame">开始游戏</div>
    <div class="resetGame" @click="resetGame" v-else>重置游戏</div>
    <div class="nextGame" @click="nextGame">下 一 关</div>
  </div>
</template>

<script>
import NumberBlock from "./components/NumberBlock.vue";
import userBasic from "./compositions/userBasic.js";
import userGame from "./compositions/userGame.js";
export default {
  name: "App",
  components: {
    NumberBlock,
  },
  setup() {
    return {
      ...userBasic,
      ...userGame,
    };
  },
};
</script>
<style>
body {
  background-color: bisque;
}
h3 {
  text-align: center;
  width: 100%;
  font-size: 30px;
  color: #f40;
}
.wall-container {
  background-color: #f0f0f0;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  padding: 5px;
  cursor: pointer;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-select: none;
}

.btn-grp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.startGame,
.resetGame,
.nextGame {
  padding: 10px 20px;
  border-radius: 22px;
  cursor: pointer;
  margin: 10px;
}

.startGame {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.startGame:focus,
.startGame:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.startGame:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.resetGame {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.resetGame:hover,
.resetGame:focus {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.resetGame:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.nextGame {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.nextGame:hover,
.nextGame:focus {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.nextGame:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: none;
}
</style>