<template>
  <section>
    <base-card>
      <h2>Register as coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // replace가 push와 다른 점은 이전 페이지로 돌아갈 수 없다. 양식 제출 후 양식 페이지로 돌아가지 않기 위해 사용한다.
      this.$router.replace('./coaches');
    },
  },
};
</script>

<style scoped></style>
