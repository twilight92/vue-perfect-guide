<template>
  <user-data @add-user="addUser"></user-data>
  <ul>
    <active-user
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :username="user.name"
      :age="user.age"
    ></active-user>
  </ul>
</template>
<script>
// import UserData from "./components/UserData.vue";

export default {
  //   components: { UserData },
  data() {
    return {
      users: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          age: "20",
        },
        {
          id: "julie",
          name: "julie Lorenz",
          age: "30",
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };

      this.users.push(newUser);
    },
  },
};
</script>
