<template>
  <ul>
    <learning-resource
      v-for="res in storeResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
