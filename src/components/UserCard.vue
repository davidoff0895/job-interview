<template>
  <div class="user-card">
    <h1>{{ user.name }}</h1>
    <p v-if="!user">Guest User</p>
  </div>
</template>

<script setup lang="ts">
interface User {
  name: string;
}

defineProps<{
  user?: User | null;
}>();
</script>
