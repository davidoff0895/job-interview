<template>
  <div>
    <span class="count-value">{{ count }}</span>
    <button @click="increment">Add</button>
  </div>
</template>

<script setup lang="ts">
const count = 0;

const increment = (): void => {
  count++;
};
</script>
