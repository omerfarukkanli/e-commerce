<template>
    <NuxtLink class="defaultButton" :to="to">{{ buttonName }}</NuxtLink>
</template>

<script setup>
const { buttonName, to } = defineProps({
    buttonName: String,
    to: String
})
</script>

<style scoped>
.defaultButton {
    @apply px-3 py-2 font-semibold text-sm border-b border-white hover:text-orange-500 hover:border-orange-500 hover:border-b-2 ;
}
</style>