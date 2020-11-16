<template>
  <div
    :class="[
      'numberBlock-container',
      {
        'no-style': !value,
      },
    ]"
    @click="moveClick(value)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NumberBlock",
  props: {
    // 用于控制样式的值
    value: {
      type: [Number, String],
      default: "",
    },
    // 当前点击的位置
    position: {
      type: Array,
      default: () => [0, 0],
    },
  },
  setup(props, ctx) {
    // 点击移动
    const moveClick = (val) => {
      if(!val) return;
      ctx.emit("move", { position: props.position, value: props.value });
    };

    return {
      moveClick,
    };
  },
};
</script>

<style scoped>
.numberBlock-container {
  width: 78px;
  height: 78px;
  border: 1px solid #abcdef;
  background-color: aliceblue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
}

.no-style {
  border-color: transparent;
  background-color: transparent;
  color: transparent;
  cursor:not-allowed;
}
</style>