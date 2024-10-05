<template>
  <li>
    <div>
      <header>
        <h3></h3>
        <button>Delete</button>
      </header>
    </div>
    <p></p>
    <nav>
      <a href="">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>
