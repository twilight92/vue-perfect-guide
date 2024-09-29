<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="test"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["수강 완료", "Vue 학습"],
    };
  },
};
</script>
