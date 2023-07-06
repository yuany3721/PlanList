<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import config from "../config";
document.title = config.title;
</script>

<template>
    <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
