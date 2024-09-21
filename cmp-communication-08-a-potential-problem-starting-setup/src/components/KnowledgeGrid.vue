<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // inject는 provide와 세트(부모 자식 관계), props와 동일하게 작동
  inject: ['topics'],
};
</script>
