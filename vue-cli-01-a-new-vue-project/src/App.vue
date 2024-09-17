<template>
  <section>
    <h2>My Freinds</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
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
