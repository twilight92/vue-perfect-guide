<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Age</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
