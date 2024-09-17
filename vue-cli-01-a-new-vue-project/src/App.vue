<template>
  <section>
    <h2>My Freinds</h2>
    <ul>
      <freind-contact></freind-contact>
    </ul>
  </section>
</template>

<script>
import FreindContact from "./components/FreindContact.vue";
export default {
  components: { FreindContact },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 3456 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "julie Jones",
          phone: "12123 3456 90",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
