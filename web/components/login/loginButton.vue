<template>
    <button class="login-button">
        {{ butonName }}
    </button>
</template>

<script setup>
const { butonName } = defineProps(['butonName'])
</script>

<style scoped>
.login-button {
    @apply text-white bg-orange-500 rounded-md mt-3 py-2 px-3 transition-colors hover:bg-orange-600 font-medium;
}</style>
